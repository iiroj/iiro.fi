import React from 'react'

import type { Props } from './Link'
import Link from './Link'
import { linkButton } from './LinkButton.css'

const LinkButton = (props: Props) => <Link className={linkButton} {...props} />

LinkButton.displayName = 'LinkButton'

export default LinkButton
