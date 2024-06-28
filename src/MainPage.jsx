import React from "react";
import { Flex } from 'antd';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Divider } from './components/Divider';
import { APIStatus } from './components/APIStatus';
import { About } from './components/About';
import { useWindowSize } from './helpers/useWindowSize';
import { LayoutWrapper } from "./Layout";
import { AlwaysInTouch } from "./components/AlwaysInTouch";

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

export const MainPage = () => {

    const {isMobile} = useWindowSize();
    const centerStyle = isMobile ? mobileCenterStyle: desktopCenterStyle;

    return <LayoutWrapper>
            <Flex style={{...contentStyle,  backgroundColor: '#101014', padding: '100px 0'}}>
                <div style={centerStyle}>
                    <Hero/>
                </div>
            </Flex>
            <Flex id='products' style={contentStyle}>
                <div style={centerStyle}>
                    <Products/>
                </div>
            </Flex>
  
            <Flex  style={{...contentStyle,
            backgroundColor: '#F3F3F3',
            position:'relative'
            }}>
                <Divider/>
                <div id="api-status" style={centerStyle}>
                    <APIStatus/>
                </div>
            </Flex>
            <Flex  style={contentStyle}>
                <div id='about' style={centerStyle}>
                  <About/>
                </div>
            </Flex>
            <AlwaysInTouch/>
  </LayoutWrapper>
  }