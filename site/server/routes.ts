import { routes } from '../src/routes'

export const getServerRoutes = () => Promise.resolve(['/404'].concat(routes.map(([{ path }]) => path)))
