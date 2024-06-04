import { Col, Flex, Row, Typography } from "antd"
import onImg from './assets/on.png'
import offImg from './assets/off.png'
import sinceImg from './assets/Since2022.png'
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


const cardStyle = {
    border:'1px solid #CACACA',
    borderRadius: 10,
    padding: '20px',
    height:'100%'

}

const titleStyle = {
    color: '#908C8C',
    fontSize: 21,
    fontWeight: 600,
    lineHeight: '25px',
    textAlign: 'left',
}

export const About = () => {
    return <Flex style={{marginBottom: 75}} vertical>
        <Typography.Title style={{
            margin: '75px 0 35px 0',
            color: '#9579F0'
        }}>
        About us
        </Typography.Title>
        <Flex vertical gap={10}>
            <Row gutter={10}>
                <Col xl={9} xs={24}>
                    <Flex style={cardStyle} gap={20} align="center" justify="center">
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
                </Col>
                <Col xl={5} xs={12}>
                    <Flex vertical gap={15} style={cardStyle}>
                        <img src={onImg} style={{width: 55}}/>
                        <Typography style={titleStyle}>
                            $ 3M volume on-chain
                        </Typography>
                    </Flex>
                </Col>
                <Col xl={5} xs={12}> 
                    <Flex vertical gap={15} style={cardStyle}>
                        <img src={offImg} style={{width: 55}}/>
                        <Typography style={titleStyle}>
                            $ 2M volume off-chain
                        </Typography>
                    </Flex>
                </Col>
                <Col xl={5} xs={0}>
                    <Flex flex={1} style={cardStyle} align="center" justify="center"  > 
                        <img src={sinceImg} style={{width: 113, height: 35}}/>
                    </Flex>
                </Col>
            </Row>
            <Row gutter={10} style={{height: '100%'}}>
                <Col xl={8} xs={0}>
                    <Flex gap={10} vertical>
                        <Flex flex={1} align="center" justify='space-between' gap={15} style={cardStyle}> 
                            <img src={aImg} style={{
                                width: 54,
                                height: 60
                            }}/>
                            <Typography style={titleStyle}>
                                Custom smart contracts and standarts
                            </Typography>
                        </Flex>
                        <Flex vertical gap={10} align="start" style={cardStyle}> 
                            <img src={img120k} style={{height:50, objectFit:'contain'}} />
                            <Typography style={{fontFamily:'Manrope', fontSize: 20, textAlign:'left'}}>TON Foundation Core Developers  </Typography>
                            <img src={img70k}  style={{height:50, objectFit:'contain'}}/> 
                            <Typography style={{fontFamily:'Manrope', fontSize: 20}}>Grants & Rewards</Typography>
                        </Flex>
                    </Flex>
                </Col>
                <Col span={16}>
                    <Flex vertical gap={10} style={{height: '100%'}}>
                    <Row gutter={10}>
                        <Col xl={15} xs={24} > 
                            <Flex style={{...cardStyle, backgroundColor:'#9579F0', position:'relative'}} vertical justify='space-between'>
                                <Typography style={{fontSize: 18, marginTop:45, color: '#FFFFFF'}}>
                                    We provide data for best projects</Typography>
                                <Flex gap={15} justify="end" style={{marginTop: 31}}>
                                    <img src={deDustLogo} style={{width: 45, objectFit: 'contain'}}/>
                                    <img src={tonLogo} style={{width: 45, objectFit: 'contain'}}/>
                                    <img src={notcoinLogo} style={{width: 45, objectFit: 'contain'}}/>
                                    <img src={disintarLogo} style={{width: 45, objectFit: 'contain'}}/>
                                </Flex>
                            </Flex>
                        </Col>
                        <Col span={9}> 
                            <Flex gap={20} style={{...cardStyle, height: '100%'}} vertical align="center" justify="center">
                                <img src={collectionsImg} style={{height: 62, objectFit: 'contain'}}/>
                                <Typography style={titleStyle}>
                                    30 collections 
                                </Typography>
                            </Flex>
                        </Col>
                    </Row>
                    <Row gutter={10} style={{height: '100%'}}>
                            <Col span={7} > 
                                <Flex gap={10} align="start" justify="center" vertical style={cardStyle}>
                                    <img src={downloadIcon} style={{height: 60, objectFit: 'contain'}}/>
                                    <Typography style={titleStyle}>
                                        5000+ downloads
                                    </Typography>
                                </Flex>
                            </Col>
                            <Col span={10}> 
                                <Flex gap={10} align="center" justify="center" style={cardStyle}>
                                    <img src={img7} style={{width: 53, objectFit: 'contain'}}/>
                                    <Typography style={titleStyle}>
                                        PRs to official TON monorepo
                                    </Typography>
                                </Flex>
                            </Col>
                            <Col span={7} > 
                                <Flex gap={10} align="center" justify="center" vertical style={cardStyle}>
                                    <img src={starIcon} style={{width: 53, objectFit: 'contain'}}/>
                                    <Typography style={titleStyle}>
                                        180+ stars
                                    </Typography>
                                </Flex>
                            </Col>
                        </Row>
                        </Flex>
                </Col>
            </Row>
            
        </Flex>
    </Flex>
}
