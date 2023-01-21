import type { LinkProps } from '@remix-run/react'
import type { FC, ReactElement } from 'react'
import { Children } from 'react'

interface Props {
    children: ReactElement | ReactElement[]
    links: ReactElement<LinkProps>[]
    title: string
}

const Page: FC<Props> = ({ children, links, title }) => (
    <>
        <h1>{title}</h1>

        {children}

        {Children.count(links) > 0 && (
            <footer>
                <nav>
                    <ul>
                        {Children.map(links, (link) => (
                            <li>{link}</li>
                        ))}
                    </ul>
                </nav>
            </footer>
        )}
    </>
)

Page.displayName = 'Page'

export default Page
