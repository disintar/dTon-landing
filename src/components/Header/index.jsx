import React from "react"
import { dton_logo } from './logo'
import { Flex, Space, Typography, Button } from "antd"
import Lottie from "react-lottie"
import { BookCall } from "../Buttons"

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
        <Lottie options={{
                        loop: true,
                        autoplay: true,
                        animationData: dton_logo,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                        height={50}
                        width={50}/>
            <Typography.Title style={{color: '#FFFFFF'}}>
                dTon
            </Typography.Title>
        </Flex>
        <Space>
            <Typography.Link href="#api-status" style={linkStyle}>
                API Status
            </Typography.Link>
            <Typography.Link href="#about" style={linkStyle}>
                About us
            </Typography.Link>
            <Typography.Link href="#products" style={linkStyle}>
                Products
            </Typography.Link>
        </Space>

        <BookCall size="small"/>
    </Flex>
}
