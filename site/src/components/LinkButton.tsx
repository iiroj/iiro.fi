import type { ComponentPropsWithoutRef } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

import { linkButton } from './LinkButton.css'

type NextLinkProps = ComponentPropsWithoutRef<typeof Link>

type Props =
    | NextLinkProps
    | ({
          href: string
      } & Omit<NextLinkProps, 'to'>)

const LinkButton = (props: Props) =>
    'href' in props ? <a className={linkButton} {...props} /> : <Link className={linkButton} {...props} />

LinkButton.displayName = 'LinkButton'

export default LinkButton
