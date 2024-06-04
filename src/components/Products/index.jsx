import { Flex, Typography } from "antd"
import React, { useState } from "react"
import { assetImage, products } from "./products"
import './styles.css'
import { ProductBlock } from "./ProductBlock"

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

const Product = ({id, title, image}) => {
    
   return <div key={id} className="product"
    style={active === id ? activeStyle : {}}
    onClick={() => setActive(id)}>
    <Flex style={{padding: 15}} align="center">
        <img style={logoStyle} src={assetImage(image)}></img>
        <Typography style={textStyle}>
            {title}
        </Typography>
    </Flex>
</div>
}

return <Flex vertical align='flex-start' style={{height: '70vh', marginBottom: 124}}>
    <Typography.Title style={{
            margin: '75px 0 35px 0',
            color: '#9579F0'
        }}>
       Products
        </Typography.Title>
        <Flex  style={{width: '100%'}}>
            <Flex vertical>
                {products.map(Product)}
            </Flex>
            <ProductBlock active={active}/>
        </Flex>

</Flex>
}
