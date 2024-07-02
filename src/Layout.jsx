
import React from 'react';
import {  ConfigProvider } from 'antd';
import './assets/fonts/fonts.css';
import { HeaderBlock } from './components/Header';
import { Flex, Layout } from 'antd';
import './App.css'
import { FooterLine } from './components/FooterLine';
import { useWindowSize } from './helpers/useWindowSize';

const { Header, Footer, Content } = Layout;

const footerStyle = {
  padding: 0
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
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

export const LayoutWrapper = ({children}) => {
  const {isMobile} = useWindowSize();
  const centerStyle = isMobile ? mobileCenterStyle: desktopCenterStyle

  const headerStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: '#101014',
    width: '100%',
    height: 'auto',
    zIndex: 1,
    ...(isMobile ? {padding: 0} : {})
}

return <ConfigProvider
    theme={{
      token: {
        fontFamily: 'Poppins',
        colorText:'#252525',
        borderRadius: 10,
        fontSizeHeading1: 60,
        colorBgLayout: '#FFFFFF',
        colorPrimaryHover: '#C09BF1',
        colorPrimaryActive: '#714BEB',
        colorPrimaryBorderHover: '#9579F0',
        colorPrimary: '#9579F0',
        colorError: '#9579F0',
        colorBgTextHover: '#9579F0',
      }
    }}
  >
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div style={{
            ...centerStyle,
            height: '100%'
        }}>
            <HeaderBlock/>
        </div>
        </Header>
        <Content style={{minHeight: "100vh"}}>
            {children}
        </Content>
        <Footer style={footerStyle}>
            <FooterLine/>
        </Footer>
    </Layout>
  </Flex>
</ConfigProvider>
}

