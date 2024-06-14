import { Flex, Space, Typography } from "antd"
import { assetImage, products } from "./products"
import advIcon from '../../assets/icons/adv.svg'
import { BookCall, Documentation, StartUsing } from "../Buttons"
import { Lib } from "./Lib"
import { useWindowSize } from "../../helpers/useWindowSize"

const Buttons = ({href}) => {
    const {isMobile} = useWindowSize()
    if (isMobile){
        return <Flex vertical gap={10} flex={1} style={{width: '100%', marginTop: 16}}>
            <Flex gap={10} flex={1}>
                <BookCall style={{width:'100%'}} size="small"/>
                <StartUsing href={href} style={{width:'100%'}}/>
            </Flex>
            <Documentation style={{width:'100%'}} size="small"/>
        </Flex>
    }
    return <Flex wrap='wrap' gap={10} align="center" style={{ alignItems: 'center', justifyContent:'center', marginTop: 15}}>
                <BookCall size="small"/>
                <StartUsing href={href}/>
                <Documentation size="small"/>
            </Flex>}

export const ProductBlock = ({active}) => {
    const info = products.find(item => item.id === active)?.info
    
    if(active === 5) {
        return <Flex style={{width: '100%', minHeight: 470}} flex={1} align="center" justify='stretch'>
            <Flex gap={20} flex={1} align='center' vertical>
                {info.libs.map(Lib)}
            </Flex>
        </Flex>
    }
    
    const {title, advantages, image, href} = info;

return <Flex vertical style={{width: '100%'}} flex={1} align="center">
    <Typography.Title level={2} style={{margin: '0 0 0 15px'}}>
    {title}
    </Typography.Title>
    <Flex style={{marginBottom: 10}}>
    {advantages.map(item => {
        return <Flex key={item} justify="center" align="center" style={{margin: 15}}>
            <img src={advIcon} style={{width: 24, marginRight: 8}}/>
            <Typography style={{
                fontSize: 16,
                fontWeight: 400
            }}>
                {item}
            </Typography>
        </Flex>
    })}
    </Flex>
    <img style={{
        objectFit: 'contain',
        height: 265,
        width: '100%',
    }} src={assetImage(image)}/>
    <Buttons href={href}/>
</Flex>
}
