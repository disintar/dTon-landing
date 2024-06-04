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

const { Header, Footer, Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  color: '#fff',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
};

const centerStyle = {
  width: 'min(calc(100dvw - 280px), 960px)',
  maxWidth: 'min(calc(100dvw - 280px), 960px)',
  margin: 'auto',
}

const App = () => (
  <ConfigProvider
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
      <Header style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            height: 81,
            zIndex: 1,
        }}>
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
      <Content style={contentStyle}>
        <div style={centerStyle}>
           <Products/>
        </div>
      </Content>
      
      <Content style={{...contentStyle,
      backgroundColor: '#F3F3F3',
      position:'relative'
      }}>
        <Divider/>
        <div style={centerStyle}>
          <APIStatus/>
        </div>
      </Content>
      <Content style={contentStyle}>
        <div style={centerStyle}>
          <About/>
        </div>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Flex>
  </ConfigProvider>
);

export default App;
