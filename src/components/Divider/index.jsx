import React from "react"
import './styles.css'
import { Flex } from "antd"

export const Divider = () => {
  const screenWidth = window.innerWidth;
        const calculateAngle = () => {
          const dividerHeight = 65;
          
          const angle = Math.atan(dividerHeight / screenWidth) * (180 / Math.PI);
          return angle;
        };
      
        const dividerStyle = {
          transform: `rotate(${calculateAngle()}deg)`,
        };

        const textWidth = 450;
        const arr = new Array(Math.round(screenWidth / textWidth)).fill(0);
    return <Flex vertical style={{height:'auto'}}>
        <div className="zone"/>
        <Flex className="divider" style={dividerStyle} align="center" justify='space-around'>
        {arr.map((item, index) => <span key={index} className="text">BLOCKCHAIN ANALYTICS</span>)}
    </Flex>
    </Flex>
   
}
