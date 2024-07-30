import React from "react";
import { LayoutWrapper } from "../Layout";
import { Button, Col, Divider, Flex, Input, Row, Space, Typography } from "antd";
import { useWindowSize } from "../helpers/useWindowSize";
import { Uptime } from "../components/Uptime";
import { EmailInput} from "../components/Buttons";
import { Servers } from "../components/Servers";
import { Nodes } from "../components/Nodes";
import { TelegramButton } from "../components/Buttons/TelegramButton";



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
    const {md, isMobile} = useWindowSize();
    const centerStyle = isMobile ? mobileCenterStyle: desktopCenterStyle;

    return <LayoutWrapper>
        <Flex align="start" gap={25} justify="center" vertical style={centerStyle}>
    <Typography.Title level={md ? 2 : 1} style={{color:'#9579F0'}}>
    Get Status notifications
    </Typography.Title>
    <Flex gap={15} vertical={md}>
      <TelegramButton/>
      <EmailInput/>
    </Flex>
    <Flex justify="start" align="center" wrap={md ? 'wrap': 'nowrap'} gap={15}>
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
        <Col flex={3}>
          <Servers/>
        </Col>
        <Col flex={4}>
          <Nodes/>
        </Col>
    </Row>
    </Flex>
    </LayoutWrapper>
}