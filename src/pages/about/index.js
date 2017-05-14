import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { Back } from 'components/Back'
import { ProfilePicture } from 'components/ProfilePicture'

import s from './styles.module.css'

export default function About () {
    return (
        <div>
            <Helmet
                title="About Iiro Jäppinen"
            />
            <Back />
            <h1 className={s.heading}>About Iiro Jäppinen</h1>
            <div className={s.wrapper}>
                <article className={s.resume}>
                    <div className={s.leftColumn}>
                        <header className={s.header}>
                            <ProfilePicture />
                            <h1 className={s.name}>Iiro Jäppinen</h1>
                            <time dateTime="2017-04-15">Sat Apr 15 2017</time>
                        </header>
                        <section className={s.section}>
                            <p>I am an UX/UI designer with a passion for precise pixels and intelligent solutions. I love agile methods and became a Scrum Certified <a href="https://www.scrumalliance.org/community/profile/ijappinen">Product Owner</a> and <a href="https://www.scrumalliance.org/community/profile/ijappinen">Scrum Master</a>. I prefer workshops and demo sessions to boring meetings without purpose.</p>
                            <p>As an <strong>UX designer</strong> I aim to understand users and create solutions perfect for them. I believe fancy designs are not worth anything unless they are intuitive and usable.</p>
                            <p>As an <strong>UI designer</strong> I want to create visually stunning designs that delight and guide users to their goals. I help developers with styling and layout thanks to my knowledge of modern<s>ish</s> web technologies.</p>
                        </section>
                    </div>
                    <div className={s.rightColumn}>
                        <section className={s.section}>
                            <h2>Experience</h2>
                            <p>I"ve been at <strong><a href="https://www.verkkokauppa.com" target="_blank">Verkkokauppa.com</a></strong> since November 2014 working as an UX/UI designer. I"ve learned how to work as part of an agile team transforming the wishes of the entire organisation into value-delivering features. I"ve seen many projects from start to finish, like overhauling warehouse processes and workflows and bringing email notifications to the modern age. I’ve also designed many new tools, including a future-proof discount manager.</p>
                            <p>Since fall 2016 I"ve been focusing on improving the customer-facing store. I measure and seek to understand customer interaction to provide better solutions for all. I design beautiful interfaces and work with developers to turn them into reality. I quickly iterate over design choices and make business-critical decisions with our stakeholders.</p>
                            <p>Before that I worked with <strong><a href="https://humblebundle.com" target="_blank">Humble Bundle</a></strong> in many ways. Since its inception in 2011 I helped design the individual promotions’ websites and logos. I designed the popular Humble Widget as a way to help everyone easily sell their game. In January 2014 I visited the beautiful San Francisco under a student visa and helped Humble Bundle establish its position as a platform for indie gamers and developers.</p>
                            <p>In 2012 I worked with <strong><a href="https://unity3d.com" target="_blank">Unity Technologies</a></strong> and designed new iconography for the Unity 4 Editor as a freelance project. It was a nice project for a summer break from my studies. I designed some 100 interface icons optimized to various sizes.</p>
                        </section>
                        <section className={s.section}>
                            <h2>Education</h2>
                            <p>I studied mathematics in the <a href="http://mathstat.helsinki.fi/english/">University of Helsinki</a> from 2009 until about 2014. I also studied genetics. Unfortunately designing got the best of me and I didn"t have time to graduate, but I did my bachelor"s thesis on studying evolution in the Snow-drift game with means of Adaptive Dynamics. Mathematics helped me become an analytic thinker and appreciate data-driven approaches to solving problems.</p>
                            <p>Before that I studied in the <a href="http://www.hel.fi/www/kuvatl/fi/koulun-esittely/in-english/in-english">Helsinki Upper Secondary School of Visual Arts</a>. There I studied a wide variety of different artistic methods along with the standard curriculum.</p>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    )
}