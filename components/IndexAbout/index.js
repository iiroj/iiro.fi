import React from 'react'

import s from './styles.module.css'

export const IndexAbout = () => (
    <section>
        <div className={s.container}>
            <p><strong>I’m Iiro Jäppinen</strong>. I design user interfaces, icons and logos. Lately I’ve been defining user stories and turning them into valuable experiences.</p>
            <p><strong>I work at</strong> <a href="https://fraktio.fi" target="_blank">Fraktio</a>.</p>
            <p className={s.second}><strong>Before that</strong> I worked at <a href="https://m.verkkokauppa.com" target="_blank" rel="noopener noreferrer"> Verkkokauppa.com</a>, Finland’s largest and best-known online retailer. I helped create the best omni-channel shopping experience for everyone.</p>
            <p className={s.third}><strong>Earlier</strong> I helped design the <a href="https://www.humblebundle.com" target="_blank" rel="noopener noreferrer">Humble Indie Bundle</a> brand and concept. I moved to San Francisco in the process but have then returned to Helsinki, Finland. You can reach me online for the occasional icon.</p>
        </div>
    </section>
)
