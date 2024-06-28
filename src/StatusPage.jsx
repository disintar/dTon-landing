import React from "react";
import { LayoutWrapper } from "./Layout";
import { Flex, Typography } from "antd";
import { useWindowSize } from "./helpers/useWindowSize";
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
        <Flex vertical style={centerStyle}>
    <Typography.Title style={{color:'#9579F0'}}>
    Get Status notifications
    </Typography.Title>
    
        </Flex>
    </LayoutWrapper>
}