import React from 'react';
import {  ConfigProvider } from 'antd';
import './assets/fonts/fonts.css';
import { HeaderBlock } from './components/Header';
import { Flex, Layout } from 'antd';
import './App.css'
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Divider } from './components/Divider';
import { APIStatus } from './components/APIStatus';
import { About } from './components/About';
import { AlwaysInTouch } from './components/AlwaysInTouch';
import { FooterLine } from './components/FooterLine';
import { useWindowSize } from './helpers/useWindowSize';

const { Header, Footer, Content } = Layout;


const contentStyle = {
  textAlign: 'center',
  color: '#fff',
};

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

const App = () => {
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
      <Content style={{...contentStyle,  backgroundColor: '#101014', padding: '100px 0'}}>
        <div style={centerStyle}>
            <Hero/>
        </div>
        
      </Content>
      <Content id='products' style={contentStyle}>
        <div style={centerStyle}>
           <Products/>
        </div>
      </Content>
      
      <Content  style={{...contentStyle,
        backgroundColor: '#F3F3F3',
        position:'relative'
      }}>
        <Divider/>
        <div id="api-status" style={centerStyle}>
          <APIStatus/>
        </div>
      </Content>
      <Content  style={contentStyle}>
        <div id='about' style={centerStyle}>
          <About/>
        </div>
      </Content>
      <Footer style={footerStyle}>
        <AlwaysInTouch/>
        <FooterLine/>
      </Footer>
    </Layout>
  </Flex>
  </ConfigProvider>
}

export default App;
