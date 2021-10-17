import type { ComponentPropsWithoutRef } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

import { linkButton } from './LinkButton.css'

type Props = ComponentPropsWithoutRef<typeof Link>

const LinkButton = (props: Props) => <Link className={linkButton} {...props} />

LinkButton.displayName = 'LinkButton'

export default LinkButton
