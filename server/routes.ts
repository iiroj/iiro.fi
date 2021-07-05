import { routes } from '../src/routes'

export const getServerRoutes = async () => ['/404'].concat(routes.map(([{ path }]) => path))
