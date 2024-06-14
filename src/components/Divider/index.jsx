import React from "react"
import './styles.css'
import { Flex } from "antd"

export const Divider = () => {
    return <Flex className="divider" align="center" justify='space-around'>
        <div className="patterns"></div>
    </Flex>
}
