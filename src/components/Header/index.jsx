import React, {useState} from "react"
import {dton_logo} from './logo'
import {Dropdown, Flex, Menu, Typography} from "antd"
import Lottie from "react-lottie"
import {ConnectAndTry} from "../Buttons"
import {useWindowSize} from '../../helpers/useWindowSize'
import {MenuOutlined, CloseOutlined} from '@ant-design/icons'
import DropdownIcon from "./icons/DropdownIcon"

import './header.css'

const BURGER_BREAKPOINT = 835

const linkStyle = {
    fontSize: 16,
    margin: '0 15px',
    color: '#FFFFFF'
}
const mobileMenuStyle = {
    height: '90vh',
    backgroundColor: '#101014',
    paddingTop: 24,
    width: '100%',
    overflow: 'hidden'
}

// Docs
// GraphQL
// API Keys
// Explorer
// Status
// Support
// About us
// Testnet

const iconStyle = {fontSize: 24, color: '#fff'}

const Links = ({mobile, style, setShowMenu}) => {
    const resourcesMenu = {
        items: [
            {
                label: <a className="resource-link-item" target="_blank" href="https://docs.dton.io/">Docs</a>,
                key: 'docs',
            },
            {
                label: <a className="resource-link-item" target="_blank" href="https://dton.io/graphql/">GraphQL</a>,
                key: 'graphql',
            },
            {
                label: <a className="resource-link-item" target="_blank" href="https://t.me/dtontech_bot">API Keys</a>,
                key: 'api-keys',
            },
            {
                label: <a className="resource-link-item" target="_blank" href="https://blog.dton.io/">Blog</a>,
                key: 'blog',
            },
            {
                label: <a className="resource-link-item" target="_blank" href="https://tech.dton.io/status">Status</a>,
                key: 'status',
            },
            {
                label: <a className="resource-link-item" target="_blank" href="https://t.me/dtontech">Support</a>,
                key: 'support',
            },
        ]
    }

    return <Flex vertical={mobile} gap={30} style={style}>
        <Typography.Link className="menu-item" onClick={() => setShowMenu(false)} href="#products" style={linkStyle}>
            Products
        </Typography.Link>
        <Typography.Link className="menu-item" onClick={() => setShowMenu(false)} href="#pricing" style={linkStyle}>
            Pricing
        </Typography.Link>
        <Typography.Link className="menu-item" onClick={() => setShowMenu(false)} href="#api-status" style={linkStyle}>
            API Status
        </Typography.Link>
        <Typography.Link className="menu-item" onClick={() => setShowMenu(false)} href="#about" style={linkStyle}>
            About Us
        </Typography.Link>
        
      <Dropdown className="dropdown" menu={resourcesMenu} placement="bottom">
        <Typography.Link 
            className="menu-item"
            style={{ 
                ...linkStyle, 
                cursor: 'pointer',
                display: 'inline-flex',
                gap: 5,
                alignItems: 'center', 
            }}
        >
          Resources
          <DropdownIcon />
        </Typography.Link>
      </Dropdown>
    </Flex>
}
export const HeaderBlock = () => {

    const {width} = useWindowSize()
    const isMobileHeader = width < BURGER_BREAKPOINT
    const [showMenu, setShowMenu] = useState(false)
    const mobileHiddenStyle = {display: isMobileHeader ? 'none' : 'block'}
    const mobileVisibleStyle = {display: !isMobileHeader ? 'none' : 'flex'}
    const BurgerIcon = !showMenu ? MenuOutlined : CloseOutlined

    return <>
        <Flex
            justify='space-between'
            align="center"
            style={{paddingTop: 16}}
        >
            <Flex align='baseline'
                  style={{cursor: 'pointer'}}
                  gap={8} onClick={() => window.open('/', '_self')}>
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
            <Links setShowMenu={setShowMenu} style={mobileHiddenStyle} />
            <ConnectAndTry style={mobileHiddenStyle} size="small"/>
            <BurgerIcon onClick={() =>
                setShowMenu(prev => !prev)} style={{...mobileVisibleStyle, ...iconStyle}}/>

        </Flex>
        {showMenu && <Flex vertical justify='space-between'
                           style={{
                               ...mobileVisibleStyle,
                               ...mobileMenuStyle
                           }}>
            <Links mobile setShowMenu={setShowMenu} />
            <ConnectAndTry style={{alignSelf: 'center', color: '#FFF', width: '100%', fontSize: 18, fontWeight: 500}}/>
        </Flex>}
    </>
}
