import { Flex, Typography } from "antd"
import { useWindowSize } from "../../helpers/useWindowSize"
import TgIcon from "./icons/TgIcon"
import GithubIcon from "./icons/GithubIcon"
import XIcon from "./icons/XIcon"
import MailIcon from "./icons/MailIcon"

import './footer.css';

const textStyle = {
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'left',
    color: '#626262'
}

export const FooterLine = () => {

    const {isMobile} = useWindowSize()
    return <Flex vertical={isMobile} 
    gap={15}
    style={{height: isMobile ? 'auto' : 50, padding: 25, backgroundColor:'#101014'}} 
    justify='space-around' align={isMobile ? 'end' :'center'}>
        <Flex  gap={25}>
            <Typography.Link className="footer-menu-item" href="https://t.me/dtontech" target='_blank' style={textStyle}>
                Terms
            </Typography.Link>
            <Typography.Link className="footer-menu-item" href="https://t.me/dtontech" target='_blank' style={textStyle}>
                Privacy
            </Typography.Link>
            <Typography.Link className="footer-menu-item" href="https://t.me/dtontech" target='_blank' style={textStyle}>
                Support
            </Typography.Link>
        </Flex>
        <Flex gap={25}>
            <Typography.Link className="footer-icon" href="https://t.me/dtonforum" target="_blank">
                <TgIcon />
            </Typography.Link>
            <Typography.Link className="footer-icon" href="https://github.com/disintar" target="_blank">
                <GithubIcon />
            </Typography.Link>
            <Typography.Link className="footer-icon" href="https://x.com/disintar_io" target="_blank">
                <XIcon />
            </Typography.Link>
            <Typography.Link className="footer-icon" href="mailto:hi@head-labs.com" target="_blank">
                <MailIcon />
            </Typography.Link>
        </Flex>

        <Typography.Paragraph style={{...textStyle, margin: 0}}>
        © 2024 Disintar LLP All Rights Reserved
        </Typography.Paragraph>

    </Flex>
}
