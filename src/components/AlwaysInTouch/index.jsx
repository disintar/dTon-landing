import { Flex, Typography } from "antd"
import React from "react"
import './styles.css'
import { Dtontech } from "../Buttons"

export const AlwaysInTouch = () => {
    return <Flex vertical justify="center" align="center" className="always-in-touch">
        <Typography.Title style={{color: '#FFFFFF'}}>Always in touch</Typography.Title>
        <Dtontech/>
    </Flex>
}
