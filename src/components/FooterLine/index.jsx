import { Flex, Typography } from "antd"
import tgIcon from './tg.svg'
import ghIcon from './gh.svg'
import xIcon from './x.svg'
import emailIcon from './email.svg'

const textStyle = {
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'left',
    color: '#626262'
}

export const FooterLine = () => {
    return <Flex style={{height: 50, backgroundColor:'#101014'}} 
    justify='space-around' align='center'>
        <Flex gap={25}>
            <Typography.Link href="/" style={textStyle}>
                Terms
            </Typography.Link>
            <Typography.Link href="/" style={textStyle}>
                Privacy
            </Typography.Link>
            <Typography.Link href="/" style={textStyle}>
                Support
            </Typography.Link>
        </Flex>
        <Flex gap={25}>
           <img src={tgIcon}/>
           <img src={ghIcon}/>
           <img src={xIcon}/>
           <img src={emailIcon}/>
        </Flex>

        <Typography.Paragraph style={{...textStyle, margin: 0}}>
        ©2024 Disintar LLP All Rights Reserved
        </Typography.Paragraph>

    </Flex>
}
