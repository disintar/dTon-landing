import React from "react"
import logo from './images/logo.svg'
import { Flex, Space, Typography, Button } from "antd"

const linkStyle = {
   fontSize: 16,
   margin: '0 15px',
   color: '#FFFFFF'
}
export const HeaderBlock = () => {

    return <Flex
     justify='space-between'
     align="center"
     style={{height:'100%'}} >
        <Flex align="center" gap={8}>
            <img src={logo}/>
            <Typography.Title style={{color: '#FFFFFF'}}>
                dTon
            </Typography.Title>
        </Flex>
        <Space>
            <Typography.Link style={linkStyle}>
                API Status
            </Typography.Link>
            <Typography.Link style={linkStyle}>
                About us
            </Typography.Link>
            <Typography.Link style={linkStyle}>
                Products
            </Typography.Link>
        </Space>

        <Button style={{width: 120, height: 35, backgroundColor: '#9579F0'}} type='primary'>Profile</Button>
    </Flex>
}
