import React from 'react'
import styles from './index.module.css'

const Icons = () => (
    <article className={styles.icons}>
        <img
            className={styles.iconsGrid}
            src="icons/icons.jpg"
            />
        <h1 className={styles.heading}>Icon Aficionado</h1>
        <div className={styles.iconExamples}>
            <div className={styles.iconGrowl}>
                <img
                    src="icons/growl.png"
                    srcSet="icons/growl.png 1x,
                    icons/growl@2x.png 2x,
                    icons/growl@3x.png 3x"
                    />
                <a
                    href="http://growl.info"
                    target="_blank"
                    className={styles.buttonLink}
                    >Growl</a>
            </div>
            <div className={styles.iconTuneInstructor}>
                <img
                    src="icons/tuneinstructor.png"
                    srcSet="icons/tuneinstructor.png 1x,
                    icons/tuneinstructor@2x.png 2x,
                    icons/tuneinstructor@3x.png 3x"
                    />
                <a
                    href="https://www.tune-instructor.de/en/"
                    target="_blank"
                    className={styles.buttonLink}
                    >Tune•Instructor</a>
            </div>
        </div>
    </article>
)

export { Icons as default }
