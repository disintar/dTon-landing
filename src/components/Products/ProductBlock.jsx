import { Flex, Space, Typography } from "antd"
import { assetImage, products } from "./products"
import advIcon from '../../assets/icons/adv.svg'
import { BookCall, Documentation, StartUsing } from "../Buttons"
import { Lib } from "./Lib"
import { useWindowSize } from "../../helpers/useWindowSize"

const Buttons = () => {
    const {isMobile} = useWindowSize()
    if (isMobile){
        return <Flex vertical gap={10} flex={1} style={{width: '100%', marginTop: 16}}>
            <Flex gap={10} flex={1}>
                <BookCall style={{width:'100%'}} size="small"/>
                <StartUsing style={{width:'100%'}}/>
            </Flex>
            <Documentation style={{width:'100%'}} size="small"/>
        </Flex>
    }
    return <Space wrap='wrap' align="center" style={{ alignItems: 'center', justifyContent:'center', marginTop: 15}}>
                <BookCall size="small"/>
                <StartUsing/>
                <Documentation size="small"/>
            </Space>}

export const ProductBlock = ({active}) => {
    const info = products.find(item => item.id === active)?.info
    
    if(active === 5) {
        return <Flex gap={20} align='center' style={{width: '100%'}} flex={1} vertical>
            {info.libs.map(Lib)}
        </Flex>
        
    }
    
    const {title, advantages, image} = info;

return <Flex vertical flex={1} align="center">
    <Typography.Title level={2} style={{margin: '0 0 0 15px'}}>
    {title}
    </Typography.Title>
    <Flex style={{marginBottom: 10}}>
    {advantages.map(item => {
        return <Flex key={item} justify="center" align="center" style={{margin: '0 15px'}}>
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
    }} src={assetImage(image)}/>
    <Buttons/>
</Flex>
}
