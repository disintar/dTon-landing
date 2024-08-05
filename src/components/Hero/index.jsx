import { Button, Flex, Typography } from "antd";
import React from "react";
import { BookCall,  ConnectAndTry } from "../Buttons";
import { useWindowSize } from "../../helpers/useWindowSize";

export const Hero = () => {
    const {isMobile} = useWindowSize()
    return <Flex vertical align='flex-start' >
        <Typography.Title style={{
            margin: '0 0 40px 0 ',
            color: '#9579F0',
            fontSize: isMobile ? 40 : 60
        }}>
        Empowering TON Innovators
        </Typography.Title>
        <Typography.Paragraph style={{
            fontSize: '24px',
            lineHeight: '26px', 
            color: '#FFFFFF',
            textAlign: 'start'
        }}>
            Enjoy our state-of-the-art analytic services<br/>
            Lead your business to new heights in the dynamic TON landscape
        </Typography.Paragraph>
        <Flex gap={30} vertical={isMobile} style={{marginTop: 44, width: '100%'}}>
            <BookCall style={isMobile ? {width: '100%'} : {}} size='large'/>
            <ConnectAndTry style={isMobile ? {width: '100%'} : {}} size='large' />
        </Flex>
    </Flex>
}
