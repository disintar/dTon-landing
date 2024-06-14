import {  Flex, Typography } from "antd"
import onImg from './assets/on.png'
import offImg from './assets/off.png'
import aImg from './assets/Vector.png'
import firstImg from './assets/first.png'
import img70k from './assets/70k.png'
import img120k from './assets/120k.png'
import deDustLogo from './assets/DeDustLogo.png'
import tonLogo from './assets/tonLogo.png'
import notcoinLogo from './assets/NotcoinLogo.png'
import disintarLogo from './assets/DisintarLogo.png'
import collectionsImg from './assets/collections.png'
import downloadIcon from './assets/download.png'
import img7 from './assets/7.png'
import starIcon from './assets/star.png'

import './styles.css'

const cardStyle = {
    border:'1px solid #CACACA',
    borderRadius: 10,
    padding: '20px',
    height:'100%',
    width: '100%'
}

const titleStyle = {
    color: '#908C8C',
    fontSize: 21,
    fontWeight: 600,
    lineHeight: '25px',
    textAlign: 'left',
}

export const MarketplaceCard = () => {
    return <Flex style={cardStyle} 
    gap={20} flex={1} align="center" justify="center">
    <img src={firstImg} style={{width: 67, height: 67}}/>
    <Flex vertical align='flex-start'>
        <Typography style={titleStyle}>
            Marketplace on TON
        </Typography>
        <Typography style={{ fontSize: 18}}>
            Disintar
        </Typography>
    </Flex>
</Flex>
}

export const Volume3M = () => {
   return  <Flex vertical gap={15} style={cardStyle}>
    <img src={onImg} style={{width: 55}}/>
    <Typography style={titleStyle}>
        $ 3M volume on-chain
    </Typography>
</Flex>
}

export const Volume2M = () => {
   return  <Flex vertical align="center" justify="center" gap={15} style={cardStyle}>
        <img src={offImg} style={{width: 55}}/>
        <Typography style={titleStyle}>
            $ 2M volume off-chain
        </Typography>
    </Flex>
}

export const Since = ({mobile}) => {

    const textStyle = {
        fontSize: 24,
        lineHeight: '35px',
        fontWeight: 600
    }
    return  <Flex flex={1} style={cardStyle} align="center" justify="center"> 
    {mobile ? <Flex vertical><div style={textStyle} className="gradient">Since</div>
    <div style={textStyle} className="gradient">2022</div></Flex> :  <div style={textStyle} className="gradient">Since 2022</div>}
</Flex>
}

export const ACard = ({style}) => {
   return  <Flex flex={6} align="center" justify='center' gap={15} style={{...cardStyle, ...style}}> 
                            <img src={aImg} style={{
                                width: 54,
                                height: 60,
                                justifySelf:'start'
                            }}/>
                            <Typography.Paragraph ellipsis={{rows: 3}}  style={{...titleStyle, maxWidth: 250, margin: 0}}>
                                Custom smart contracts and standarts
                            </Typography.Paragraph>
                        </Flex>
}

export const GrantsCard = () => {
    return <Flex vertical gap={10} align="start" style={cardStyle}> 
    <div style={{fontSize: 45, lineHeight: '54px'}} className="gradient">$120k</div>
    <Typography style={{fontFamily:'Manrope', color: '#908C8C', fontSize: 20, textAlign:'left'}}>TON Foundation Core Developers  </Typography>
    <div style={{fontSize: 45, lineHeight: '54px', }} className="gradient">$70k</div>
    <Typography style={{fontFamily:'Manrope',color: '#908C8C', fontSize: 20, textAlign:'start'}}>Grants & Rewards</Typography>
</Flex>
}

export const Projects = () => {
    return  <Flex style={{...cardStyle, backgroundColor:'#9579F0', position:'relative'}} vertical justify='space-between'>
    <Typography style={{fontSize: 18, marginTop:45, color: '#FFFFFF'}}>
        We provide data for best projects</Typography>
    <Flex gap={15} justify="end" style={{marginTop: 31}}>
        <img src={deDustLogo} style={{width: 45, objectFit: 'contain'}}/>
        <img src={tonLogo} style={{width: 45, objectFit: 'contain'}}/>
        <img src={notcoinLogo} style={{width: 45, objectFit: 'contain'}}/>
        <img src={disintarLogo} style={{width: 45, objectFit: 'contain'}}/>
    </Flex>
</Flex>
}

export const CollectionsCard = () => {
    return  <Flex gap={20} style={{...cardStyle, height: '100%'}} vertical align="center" justify="center">
    <img src={collectionsImg} style={{height: 62, objectFit: 'contain'}}/>
    <Typography style={titleStyle}>
        30 collections 
    </Typography>
</Flex>
}

export const DownloadsCard =({mobile}) => {
    return  <Flex gap={10} align={mobile ? 'center':"start"} justify="center" vertical style={cardStyle}>
    <img src={downloadIcon} style={{height: 60, objectFit: 'contain'}}/>
    <Typography style={titleStyle}>
        5000+ {mobile ? '' : 'downloads'}
    </Typography>
</Flex>
}

export const SevenCard = () => {
    return  <Flex gap={10} align="center" justify="center" style={cardStyle}>
    <img src={img7} style={{width: 53, objectFit: 'contain'}}/>
    <Typography style={titleStyle}>
        PRs to official TON monorepo
    </Typography>
</Flex>
}

export const StarCard = () => {
    return  <Flex gap={10} align="center" justify="center" vertical style={cardStyle}>
    <img src={starIcon} style={{width: 53, objectFit: 'contain'}}/>
    <Typography style={titleStyle}>
        180+ stars
    </Typography>
</Flex>
}