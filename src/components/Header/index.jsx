import React, { useState } from "react"
import { dton_logo } from './logo'
import { Flex, Space, Typography, Button } from "antd"
import Lottie from "react-lottie"
import { BookCall } from "../Buttons"
import {useWindowSize} from '../../helpers/useWindowSize'
import {MenuOutlined, CloseOutlined} from '@ant-design/icons'
const BURGER_BREAKPOINT = 835

const linkStyle = {
   fontSize: 16,
   margin: '0 15px',
   color: '#FFFFFF'
}
const mobileMenuStyle = {
    position:'fixed',
    top: 81,
    height: 'calc(100vh - 81px)',
    backgroundColor: '#101014',
    left: 0,
    width: '100%',
    padding: 24,
    overflow: 'hidden'
}

const iconStyle = {height:24, width: 24, color: '#fff'}

const Links = ({mobile, style}) => {
    return <Flex vertical={mobile} gap={30} style={style}>
            <Typography.Link href="#api-status" style={linkStyle}>
                API Status
            </Typography.Link>
            <Typography.Link href="#about" style={linkStyle}>
                About us
            </Typography.Link>
            <Typography.Link href="#products" style={linkStyle}>
                Products
            </Typography.Link>
    </Flex>
}
export const HeaderBlock = () => {

const {width} = useWindowSize()
const isMobileHeader = width < BURGER_BREAKPOINT
const [showMenu, setShowMenu] = useState(false)
const mobileHiddenStyle = { display: isMobileHeader ? 'none' : 'block'}
const mobileVisibleStyle = { display: !isMobileHeader ? 'none' : 'flex'}
const BurgerIcon = !showMenu ? MenuOutlined : CloseOutlined

    return <Flex
     justify='space-between'
     align="center"
     style={{height:'100%', zIndex: 0}} >
        <Flex align='baseline' gap={8}>
            <Lottie options={{
                            loop: true,
                            autoplay: true,
                            animationData: dton_logo,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                                }
                            }}
                            height={35}
                            width={40}/>
            <div style={{color: '#FFFFFF', margin: 0, fontSize: '30px', fontWeight: 600}}>
                dTon
            </div>
        </Flex>
            <Links style={mobileHiddenStyle}/>
            <BookCall style={mobileHiddenStyle} size="small"/>
            <BurgerIcon onClick={()=> setShowMenu(prev => !prev)} style={{...mobileVisibleStyle, ...iconStyle}}/>
            {showMenu && <Flex vertical justify='space-between' 
            style={{ ...mobileVisibleStyle,
             ...mobileMenuStyle}}>
                <Links mobile />
                <BookCall style={{alignSelf: 'center', color: '#FFF', width: '100%'}} size="large"/>
            </Flex>}
    </Flex>
}
