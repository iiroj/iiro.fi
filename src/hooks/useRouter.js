import { createContext, useContext } from 'react'

const RouterContext = createContext({})

export const RouterContextProvider = RouterContext.Provider

/**
 * Use router `history`, `match`, `test` and `loading` state
 */
const useRouter = () => useContext(RouterContext)

export default useRouter
