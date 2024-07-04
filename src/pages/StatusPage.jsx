import React from "react";
import { LayoutWrapper } from "../Layout";
import { Button, Col, Divider, Flex, Input, Row, Space, Typography } from "antd";
import { useWindowSize } from "../helpers/useWindowSize";
import { Uptime } from "../components/Uptime";
import { EmailInput, TelegramButton } from "../components/Buttons";
import axios from "axios";
import { Servers } from "../components/Servers";
import { Nodes } from "../components/Nodes";
const contentStyle = {
    textAlign: 'center',
    color: '#fff',
  };
  const mobileCenterStyle = {
    padding: '0 24px',
    width: '100%'
  }
  const desktopCenterStyle = {
    width: 'min(calc(100dvw - 280px), 960px)',
    maxWidth: 'min(calc(100dvw - 280px), 960px)',
    margin: 'auto',
  }
export const StatusPage = () => {
    const {isMobile} = useWindowSize();
    const centerStyle = isMobile ? mobileCenterStyle: desktopCenterStyle;

  

    return <LayoutWrapper>
        <Flex align="start" gap={25} justify="center" vertical style={centerStyle}>
    <Typography.Title style={{color:'#9579F0'}}>
    Get Status notifications
    </Typography.Title>
    <Space>
      <TelegramButton/>
     <EmailInput/>
    </Space>
    <Flex justify="start" align="center" gap={15}>
      <Flex align="center"
        justify="center" >
        <div style={{width: 30, height: 30}} className={`circle green`}/>
      </Flex>
      <Typography style={{fontSize: 32, fontWeight: 600}}>All systems</Typography>
      <Typography style={{fontSize: 32, fontWeight: 600, color: '#32E35099'}}>operational</Typography>
    </Flex>
      <Uptime title={'dton.io'}/>
      <Uptime title={'@literserver.bot'}/>
      <Divider type='horizontal'/>
      <Row style={{width: '100%', marginBottom: 25}}>
        <Col span={8}>
          <Servers/>
        </Col>
        <Col span={14} offset={2}>
          <Nodes/>
        </Col>
    </Row>
    </Flex>
    </LayoutWrapper>
}