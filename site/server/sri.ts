import type { StatsCompilation } from 'webpack'

export const processSRI = (tags: string, compilation: StatsCompilation): string =>
    tags.replace(/(?:src|href)="(.*?)"/gm, (original: string, url: string) => {
        const asset = compilation.assets?.find(({ name }) => url.replace(/^\//, '') === name)

        if (asset?.integrity) {
            return `${original} integrity="${asset.integrity as string}"`
        }

        return original
    })
