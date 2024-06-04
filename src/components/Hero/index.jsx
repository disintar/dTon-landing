import { Button, Flex, Space, Typography } from "antd";
import React from "react";
import { BookCall, OpenTheDocumentation } from "../Buttons";

export const Hero = () => {
    return <Flex vertical align='flex-start' >
        <Typography.Title style={{
            margin: '0 0 40px 0 ',
            color: '#9579F0'
        }}>
        Empowering Developers:
        </Typography.Title>
        <Typography.Paragraph style={{
            fontSize: '24px',
            lineHeight: '26px', 
            color: '#FFFFFF',
            textAlign: 'start'
        }}>
            Learn About Our API<br/>
            We provide analytics and custom integrations
        </Typography.Paragraph>
        <Space size='large' style={{marginTop: 44}}>
            <BookCall size='large'/>
            <OpenTheDocumentation size='large' />
        </Space>
    </Flex>
}
