import React from 'react'
import './styles.css'

export const BookCall = ({style={}, size = 'small'}) => {

    const sizes = {
        'large': {
            width: 150,
            height: 50,
            fontSize: 18,
            fontWeight: 500
        },
        'small': {
            width: 120,
            height: 35,
            color: '#FFFFFF'
        },
    }

    return <button style={{...sizes[size], ...style }} className='btn-primary' >
       Book Call
    </button>
}
export const ProfileButton = ({style}) => {
    return <button style={{ width: 120,
        height: 35,
        color: '#FFFFFF',...style}} className='btn-primary' >
    Profile
 </button>
}
export const Documentation = ({style = {},size = 'small'}) => {
    const sizes = {
        'large': {
            width: 260,
            height: 50,
            fontSize: 18,
            fontWeight: 600,
        },
        'small': {
            width: 234,
            height: 35,
            color: '#9579F0',
            borderColor: '#9579F0'
        },
    }
    
    return <button
            style={{...sizes[size], ...style}}
            className='btn-primary outline'>
        Documentation
    </button>
}

export const GoToStatusPage = ({style}) => {
    return <button style={{width: 192,
        height: 45,
        fontWeight:600,
        fontSize: 18,
        color: '#9579F0',
        borderColor: '#9579F0', ...style }} className='btn-primary outline'>Go to status page</button>
}

export const StartUsing = ({style}) => {
    return <button style={style} className='btn-blue'>Start using</button>
}

export const Dtontech = () => {
    return <button className='btn-tg'>@dtontech <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="12.5" r="12.5" fill="#9579F0"/>
    <path d="M17.5 8C17.5 7.72386 17.2761 7.5 17 7.5L12.5 7.5C12.2239 7.5 12 7.72386 12 8C12 8.27614 12.2239 8.5 12.5 8.5L16.5 8.5L16.5 12.5C16.5 12.7761 16.7239 13 17 13C17.2761 13 17.5 12.7761 17.5 12.5L17.5 8ZM8.35355 17.3536L17.3536 8.35355L16.6464 7.64645L7.64645 16.6464L8.35355 17.3536Z" fill="white"/>
    </svg></button>
}
