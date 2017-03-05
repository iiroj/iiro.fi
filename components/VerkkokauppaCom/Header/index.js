import React from 'react'

import styles from './index.module.css'

const VerkkokauppaComHeader = () => (
  <header className={styles.header}>
    <div className={styles.headerText}>
      <h1 className={styles.heading}>Verkkokauppa.com</h1>
      <p>UX/UI designer since November 2014.
      As the resident web designer,
      I oversee the visual direction of Verkkokauppa.com’s
      website.</p>
      <a
        href="https://www.verkkokauppa.com/"
        target="_blank"
        className={styles.buttonLink}
      >
        Visit Verkkokauppa.com
      </a>
    </div>
    <div className={styles.frontPageContainer}>
      <img
        className={styles.frontPagePhone}
        src="verkkokauppa.com/pixel.png"
        srcSet="verkkokauppa.com/pixel.png 1x,
                verkkokauppa.com/pixel@2x.png 2x,
                verkkokauppa.com/pixel@3x.png 3x"
      />
      <img
        className={styles.frontPageImage}
        src="verkkokauppa.com/frontpage.jpg"
        srcSet="verkkokauppa.com/frontpage.jpg 1x,
                verkkokauppa.com/frontpage@2x.jpg 2x,
                verkkokauppa.com/frontpage@3x.jpg 3x"
      />
    </div>
  </header>
)

export { VerkkokauppaComHeader as default }
