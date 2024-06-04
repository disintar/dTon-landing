import React from 'react'
import './styles.css'

export const BookCall = ({size = 'small'}) => {

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

    return <button style={sizes[size]} className='btn-primary' >
       Book Call
    </button>
}

export const OpenTheDocumentation = ({size = 'small'}) => {
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
            style={sizes[size]}
            className='btn-primary outline'>
        Open the documentation
    </button>
}


export const StartUsing = () => {
    return <button className='btn-blue'>Start using</button>
}
