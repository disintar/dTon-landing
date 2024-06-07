import { Flex, Typography } from "antd"
import React from "react"
import './styles.css'
import { Dtontech } from "../Buttons"
import { useWindowSize } from "../../helpers/useWindowSize"

export const AlwaysInTouch = () => {
    const {isMobile} = useWindowSize()
    return <Flex vertical justify="center" align="center" className="always-in-touch">
        <Typography.Title style={{color: '#FFFFFF', fontSize: isMobile ? 30 : 60}}>Always in touch</Typography.Title>
        <Dtontech/>
    </Flex>
}
