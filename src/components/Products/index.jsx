import { Flex, Typography } from "antd"
import React, { useState } from "react"
import { assetImage, products } from "./products"
import './styles.css'
import { ProductBlock } from "./ProductBlock"
import { useWindowSize } from "../../helpers/useWindowSize"

const textStyle = {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '28px',
    textAlign: 'left',
}

const logoStyle = {
    width: 40,
    height: 40,
    marginRight: 10,
    objectFit: 'contain',
}

const activeStyle = {
    border: '1px solid #CACACA',
    borderRadius: '10px',
    boxShadow:' 0px 0px 10px 0px #CDBEFF69',
}



export const Products = () => {
    const [active, setActive] = useState(1)
    const {isMobile} = useWindowSize()

const Product = ({id, title, image}) => {

    const productStyle = {
        width: isMobile ? '100%' : 360,
        margin: '5px 0',
        height: '70px',
        cursor: 'pointer',
}

   return <Flex flex={1} key={id}
    style={{...productStyle, ...active === id ? activeStyle : {}}}
        onClick={() => setActive(id)}>
    <Flex style={{padding: 15}} align="center">
        <img style={logoStyle} src={assetImage(image)}></img>
        <Typography style={textStyle}>
            {title}
        </Typography>
    </Flex>
</Flex>
}

return <Flex vertical align='flex-start' style={{height: '100%', marginBottom: 124}}>
    <Typography.Title style={{
            margin: '75px 0 35px 0',
            color: '#9579F0'
        }}>
       Products
        </Typography.Title>
        <Flex  style={{width: '100%'}}>
            <Flex vertical style={{width: '100%'}} flex={1}>
                {products.map(item => {return isMobile ? <Flex gap={15} vertical flex={1}>
                    <Product {...item}/>
                   {item.id === active && <ProductBlock active={active}/>}
                </Flex> : <Product {...item}/>})}
                
            </Flex>
            {!isMobile && <ProductBlock active={active}/>}
        </Flex>

</Flex>
}
