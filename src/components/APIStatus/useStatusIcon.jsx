import { Flex, Typography } from "antd"
import { useEffect, useState } from "react"

const statusIcons = {
    online: {
        className: 'green',
        color: '#32E350',
        title: 'Operational',
    },
    offline: {
        className: 'red',
        color: '#FF7878',
        title: 'Major outage',
    },
    pending: {
        className: 'yellow',
        title: 'Partial outage',
        color: '#626262'
    }
}

const getStatus = (available) => {
    if(!available){
        return statusIcons['pending']
    }
    else if(available === -1){
        return statusIcons['offline']
    }
    return statusIcons['online']
}

const StatusIcon = ({color, title, className}) => {
        return <Flex align="center" justify='space-around' gap={8}>
            <Flex style={{width: 20, height: 20}}>
                <div className={`circle ${className}`}/>
            </Flex>
            <Typography style={{color}}>{title}</Typography>
        </Flex>
    }

export const useStatusIcon = (available) => {  
    const [icon, setIcon] = useState(getStatus(available))
    
    useEffect(() => {
            setIcon(getStatus(available));
      },[available]);

    return {icon: <StatusIcon {...icon}/>}
}