import React from 'react'

import { default as profilePicture1x } from './profilePicture.jpg'
import { default as profilePicture2x } from './profilePicture@2x.jpg'
import { default as profilePicture3x } from './profilePicture@3x.jpg'

export const ProfilePicture = (props) => (
    <img
        className={props.className}
        src={profilePicture1x}
        srcSet={`${profilePicture1x} 1x, ${profilePicture2x} 2x, ${profilePicture3x} 3x`}
    />
)
