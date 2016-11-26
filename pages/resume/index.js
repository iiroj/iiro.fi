import React from 'react'
import Helmet from 'react-helmet'
import Back from 'Back'
import { config } from 'config'
import styles from './index.module.css'

function Resume () {
  const breadcrumb = `{
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@id": "${config.siteUrl}/resume",
        "name": "Résumé",
        "image": "${config.siteUrl}/icon.png"
      }
    }]
  }`

  return (
    <div>
      <Helmet
        title='Résumé'
        script={[
          {'type': 'application/ld+json', 'innerHTML': breadcrumb}
        ]}
      />
      <Back />
      <div className={styles.wrapper}>
        <article className={styles.resume}>
          <div className={styles.leftColumn}>
            <header className={styles.header}>
              <img className={styles.headerPicture} src='/profile.jpg' />
              <h1 className={styles.name}>Iiro Jäppinen</h1>
              <div>
                <h2>Résumé</h2>
                <time dateTime='2016-11-25'>Fri Now 25 2016</time>
              </div>
            </header>
            <section className={styles.section}>
              <p>I am an UX/UI designer with a passion for precise pixels and intelligent solutions. I hate meetings and will rather make decisions and plans in person when needed. I love agile methods and became a Scrum Certified <a href='https://www.scrumalliance.org/community/profile/ijappinen'>Product Owner</a> and <a href='https://www.scrumalliance.org/community/profile/ijappinen'>Scrum Master</a>.</p>
              <p>As an <strong>UX designer</strong> I aim to understand users and create solutions perfect for them. I believe fancy designs are not worth anything unless they are intuitive and usable.</p>
              <p>As an <strong>UI designer</strong> I want to create visually stunning designs that delight and guide users to their goals. I help developers with styling and layout thanks to my knowledge of modern<s>ish</s> web technologies.</p>
            </section>
          </div>
          <div className={styles.rightColumn}>
            <section className={styles.section}>
              <h2>Experience</h2>
              <p>I've been at <strong><a href='https://www.verkkokauppa.com' target='_blank'>Verkkokauppa.com</a></strong> since November 2014 working as an UX/UI designer. I've learned how to work as part of an agile team transforming the wishes of the entire organisation into value-delivering features. I've seen many projects from start to finish, like overhauling warehouse processes and workflows and bringing email notifications to the modern age. I've also designed many new tools, including a future-proof discount manager.</p>
              <p>Since fall 2016 I've been focusing on improving the customer-facing store. I measure and seek to understand customer interaction to provide better solutions for all. I design beautiful interfaces and work with developers to turn them into reality. I quickly iterate over design choices and make business-critical decisions with our stakeholders.</p>
              <p>Before that I worked with <strong><a href='https://humblebundle.com' target='_blank'>Humble Bundle</a></strong> in many ways. Since its inception in 2011 I helped design the individual promotions' websites and logos. I designed the popular Humble Widget as a way to help everyone easily sell their game. In January 2014 I visited the beautiful San Francisco under a student visa and helped Humble Bundle establish its position as a platform for indie gamers and developers.</p>
              <p>In 2012 I worked with <strong><a href='https://unity3d.com' target='_blank'>Unity Technologies</a></strong> and designed new iconography for the Unity 4 Editor as a freelance project. It was a nice project for a summer break from my studies. I designed some 100 interface icons optimized to various sizes.</p>
            </section>
            <section className={styles.section}>
              <h2>Education</h2>
              <p>I studied mathematics in the <a href='http://mathstat.helsinki.fi/english/'>University of Helsinki</a> from 2009 until about 2014. I also studied genetics. Unfortunately designing got the best of me and I didn't have time to graduate, but I did my bachelor's thesis on studying evolution in the Snow-drift game with means of Adaptive Dynamics. Mathematics helped me become an analytic thinker and appreciate data-driven approaches to solving problems.</p>
              <p>Before that I studied in the <a href='http://www.hel.fi/www/kuvatl/fi/koulun-esittely/in-english/in-english'>Helsinki Upper Secondary School of Visual Arts</a>. There I studied a wide variety of different artistic methods along with the standard curriculum.</p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Resume
