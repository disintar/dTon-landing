import { Flex, Typography } from "antd"
import tgIcon from './tg.svg'
import ghIcon from './gh.svg'
import xIcon from './x.svg'
import emailIcon from './email.svg'
import { useWindowSize } from "../../helpers/useWindowSize"

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
            <Typography.Link href="https://t.me/dtontech" target='_blank' style={textStyle}>
                Terms
            </Typography.Link>
            <Typography.Link href="https://t.me/dtontech" target='_blank' style={textStyle}>
                Privacy
            </Typography.Link>
            <Typography.Link href="https://t.me/dtontech" target='_blank' style={textStyle}>
                Support
            </Typography.Link>
        </Flex>
        <Flex gap={25}>
           <img style={{cursor: 'pointer'}} onClick={()=> window.open('https://t.me/dtonforum', '_blank')} src={tgIcon}/>
           <img style={{cursor: 'pointer'}} onClick={()=> window.open('https://github.com/disintar', '_blank')} src={ghIcon}/>
           <img style={{cursor: 'pointer'}} onClick={()=> window.open('https://x.com/disintar_io', '_blank')} src={xIcon}/>
           <img style={{cursor: 'pointer'}} onClick={()=> window.open('hi@head-labs.com', '_blank')} src={emailIcon}/>
        </Flex>

        <Typography.Paragraph style={{...textStyle, margin: 0}}>
        © 2024 Disintar LLP All Rights Reserved
        </Typography.Paragraph>

    </Flex>
}
