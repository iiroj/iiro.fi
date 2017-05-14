current_dir := $(shell pwd)
date := $(shell date +%Y-%m-%d_%H-%M-%S)
image := $(shell cat docker-compose.yml | grep 'image:' | awk '{print $$2}')
modules := iirofi_node_modules_make

clean:
	@ echo "Cleaning Docker Volumes…"
	@ docker volume ls | grep ${modules} || exit 0 && docker volume rm ${modules}
	@ echo "Cleaning Gatsby cache…"
	@ rm -fr ${current_dir}/.cache
	@ echo "Cleaning previous build…"
	@ rm -fr ${current_dir}/public

build:
	@ echo "Creating Docker Volumes if necessary…"
	@ docker volume ls | grep ${modules} || docker volume create ${modules}
	@ echo "Starting build…"
	@ docker container run --rm						\
			-v ${current_dir}:/app						\
			-v tmp-${date}:/app/node_modules	\
			-w /app														\
		${image}														\
			sh -c "npm install -s && npm run lint && npm run build"

deploy:
	@ echo "Running deploy.sh…"
	@ $current_dir/deploy.sh

.PHONY: build
