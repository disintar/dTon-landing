import React, { useEffect, useRef, useState } from 'react'
import { Alert, Flex, Input, Typography } from 'antd'
import axios from 'axios'

export const BookCall = ({style={}, size = 'small'}) => {

    const sizes = {
        'large': {
            width: 150,
            height: 50,
            fontSize: 18,
            fontWeight: 500,
            color: '#FFFFFF'
        },
        'small': {
            width: 120,
            height: 35,
            color: '#FFFFFF'
        },
    }

    return <button style={{...sizes[size], ...style }} onClick={()=> window.open('https://t.me/tvorogme', '_blank')} className='btn btn-primary' >
       Book Call
    </button>
}
export const ConnectAndTry = ({style,size='small'}) => {
    const sizes = {'large': {
            width: 210,
            height: 50,
            fontSize: 18,
            fontWeight: 600,
        },'small': {
            width: 165,
            height: 35,
        },}

    return <button style={{ width: 120,
        color: '#FFFFFF',
        ...sizes[size],
        ...style}} 
        className='btn btn-primary outline'
        onClick={()=> window.open('https://tech.dton.io/profile','_blank')}>
            <Flex gap={8} align='center' justify='center'>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6336 0.612917C14.5697 0.557653 14.4918 0.520909 14.4085 0.50665C14.3252 0.492392 14.2395 0.50116 14.1608 0.532008L0.720613 5.79176C0.557138 5.85572 0.418828 5.971 0.326455 6.12027C0.234081 6.26955 0.192631 6.44476 0.208328 6.6196C0.224026 6.79444 0.296024 6.95947 0.41351 7.0899C0.530996 7.22034 0.687628 7.30913 0.859882 7.34296L4.44906 8.04793V12.0397C4.44913 12.2247 4.50451 12.4055 4.60807 12.5589C4.71164 12.7123 4.85867 12.8312 5.0303 12.9004C5.20192 12.9696 5.39032 12.9859 5.5713 12.9473C5.75228 12.9087 5.91759 12.8169 6.04602 12.6836L7.81275 10.8512L10.5703 13.2685C10.7386 13.4175 10.9556 13.4998 11.1804 13.5C11.2786 13.4998 11.3761 13.4843 11.4696 13.4542C11.6228 13.4058 11.7606 13.318 11.8693 13.1996C11.9779 13.0813 12.0537 12.9365 12.089 12.7798L14.7829 1.06853C14.8018 0.986195 14.7979 0.900256 14.7716 0.819969C14.7453 0.739683 14.6976 0.668094 14.6336 0.612917ZM1.00379 6.55973C1.00125 6.55288 1.00125 6.54535 1.00379 6.53851C1.00679 6.5362 1.01015 6.5344 1.01374 6.5332L11.6055 2.38695L4.75479 7.29454L1.01374 6.56238L1.00379 6.55973ZM5.47302 12.1305C5.45474 12.1495 5.43123 12.1626 5.40548 12.1681C5.37973 12.1737 5.35291 12.1714 5.32844 12.1617C5.30397 12.152 5.28296 12.1351 5.26807 12.1134C5.25319 12.0917 5.24512 12.066 5.24489 12.0397V8.59837L7.21389 10.3227L5.47302 12.1305ZM11.3137 12.6001C11.3088 12.6225 11.298 12.6432 11.2824 12.66C11.2667 12.6768 11.2469 12.6891 11.2249 12.6956C11.2024 12.7034 11.1782 12.7051 11.1549 12.7005C11.1316 12.6958 11.1099 12.6849 11.0922 12.669L5.48629 7.75148L13.8 1.79339L11.3137 12.6001Z" fill="white"/>
                </svg>
                Connect and Try
            </Flex>
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
            width: 250,
            height: 35,
            color: '#9579F0',
            fontWeight: 500,
            borderColor: '#9579F0'
        },
    }
    
    return <button
            style={{...sizes[size], ...style}}
            onClick={() => window.open('https://docs.dton.io/', '_blank')}
            className='btn btn-primary outline'>
        Documentation
    </button>
}

export const GoToStatusPage = ({style}) => {
    return <a style={{width: 192,
        height: 45,
        fontWeight:600,
        fontSize: 18,
        padding: 8,
        color: '#9579F0',
        borderColor: '#9579F0',
        ...style }}
       onClick={()=> window.open('/status','_self')}
        className='btn btn-primary outline'>Go to status page</a>
}

export const StartUsing = ({style, href}) => {
    return <button onClick={()=> window.open(href,'_blank')} style={style} className='btn btn-blue'>Start using</button>
}

export const Dtontech = () => {
    return <button 
    onClick={()=> window.open('https://t.me/dtontech','_blank')}
    className='btn btn-tg'>@dtontech <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="12.5" r="12.5" fill="#9579F0"/>
    <path d="M17.5 8C17.5 7.72386 17.2761 7.5 17 7.5L12.5 7.5C12.2239 7.5 12 7.72386 12 8C12 8.27614 12.2239 8.5 12.5 8.5L16.5 8.5L16.5 12.5C16.5 12.7761 16.7239 13 17 13C17.2761 13 17.5 12.7761 17.5 12.5L17.5 8ZM8.35355 17.3536L17.3536 8.35355L16.6464 7.64645L7.64645 16.6464L8.35355 17.3536Z" fill="white"/>
    </svg></button>
}





export const EmailInput = () => {
    const [email, setEmail] = useState();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const inputRef = useRef(null);

    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            setError('Email not valid')
            return false
        } else {
            setError('')
            return true
        }
      }

    const handleEmail = () => {
        if(validateEmail(email)){
            axios.post(`https://dton.io/api_status/v1/email_subscribe/${email}/`).then(({data}) => {
                if(data?.success){
                    setSuccess('Subscribe success!')
                    //setInterval(()=> setSuccess(''), 5000)
                }}
            )
        }
      }

     return <Flex align='center' justify='center' gap={10}>
        <Input ref={inputRef} onPressEnter={handleEmail} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" 
     style={{width: 282, height:40, backgroundColor:'#C8BCF6', color: '#9579F0', borderRadius: 10}}/>
     <Typography style={{color: '#FF7878' }}>{error}</Typography>
     <Typography style={{color: '#32E350' }}>{success}</Typography>
     </Flex>

}
