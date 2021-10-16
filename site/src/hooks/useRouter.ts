import type { Context } from 'react'
import { useContext } from 'react'

import type { RouterContext } from '../contexts/Router'
import Router from '../contexts/Router'

/**
 * Use router `history`, `match`, `test` and `loading` state
 */
const useRouter = () => useContext<RouterContext>(Router as Context<RouterContext>)

export default useRouter
