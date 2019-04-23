#!/usr/bin/env sh

ENV_SOURCE=".env"

if [ ! -f "$ENV_SOURCE" ]; then
  echo "Error: Environment Source does not exist"
  exit 1
else
  source $ENV_SOURCE
fi

if ${AWS_S3_BUCKET+false}; then
  echo "Error: \$AWS_S3_BUCKET is not defined"
  exit 1
fi

if ${AWS_CLOUDFRONT_ID+false}; then
  echo "Error: \$AWS_CLOUDFRONT_ID is not defined"
  exit 1
fi

# Build site
npm run build

DEPLOY_DIR="public"

if [ ! -d "$DEPLOY_DIR" ]; then
  echo "Error: Public Directory does not exist"
  exit 1
fi

# Upload immutable assets
npx s3-redeploy --cwd $DEPLOY_DIR --bucket $AWS_S3_BUCKET \
  --pattern 'static/*'                                    \
  --gzip                                                  \
  --cache 31536000                                        \
  --immutable

npx s3-redeploy --cwd $DEPLOY_DIR --bucket $AWS_S3_BUCKET \
  --no-rm                                                 \
  --pattern 'workbox-*/*'                                 \
  --gzip                                                  \
  --cache 31536000                                        \
  --immutable

# Upload cacheable assets
npx s3-redeploy --cwd $DEPLOY_DIR --bucket $AWS_S3_BUCKET \
  --no-rm                                                 \
--pattern '*.{jpg,png,svg,txt,webmanifest}'               \
  --cache 2592000

npx s3-redeploy --cwd $DEPLOY_DIR --bucket $AWS_S3_BUCKET \
  --no-rm                                                 \
  --pattern '{*.html,sw.js}'                              \
  --gzip                                                  \
  --cf-dist-id $AWS_CLOUDFRONT_ID

# Tag new version
npx standard-version --no-verify

# Push to git
git push --follow-tags origin master
