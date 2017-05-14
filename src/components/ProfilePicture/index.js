import React from 'react'

import { default as profilePicture1x } from './profilePicture.jpg'
import { default as profilePicture2x } from './profilePicture@2x.jpg'
import { default as profilePicture3x } from './profilePicture@3x.jpg'

import s from './styles.module.css'

export const ProfilePicture = (props) => {
  const classes = props.className ? `${props.className} ${s.pictureContainer}` : `${s.pictureContainer}`

  return (
    <div className={classes} >
      <img
        className={s.picture}
        src={profilePicture1x}
        srcSet={`${profilePicture1x} 1x, ${profilePicture2x} 2x, ${profilePicture3x} 3x`}
        />
    </div>
  )
}
