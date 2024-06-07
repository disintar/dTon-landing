import { Col, Flex, Row, Typography } from "antd"
import { ACard, CollectionsCard, DownloadsCard, GrantsCard, MarketplaceCard, Projects, SevenCard, Since, StarCard, Volume2M, Volume3M } from "./cards"
import { useWindowSize } from "../../helpers/useWindowSize"

const desctopGrid = <Flex vertical gap={10}>
        <Row gutter={10}>
            <Col xl={9} >
                <MarketplaceCard/>
            </Col>
            <Col xl={5} >
            <Volume3M/>
            </Col>
            <Col xl={5} > 
                <Volume2M/>
            </Col>
            <Col xl={5} xs={0}>
            <Since/>
            </Col>
        </Row>
        <Row gutter={10} style={{height: '100%'}}>
            <Col xl={8} xs={0}>
                <Flex gap={10} vertical>
                    <ACard/>
                    <GrantsCard/>
                </Flex>
            </Col>
            <Col span={16}>
                <Flex vertical gap={10} style={{height: '100%'}}>
                <Row gutter={10}>
                    <Col xl={15}  > 
                        <Projects/>
                    </Col>
                    <Col span={9}> 
                        <CollectionsCard/>
                    </Col>
                </Row>
                <Row gutter={10} style={{height: '100%'}}>
                        <Col span={7} > 
                            <DownloadsCard/>
                        </Col>
                        <Col span={10}> 
                            <SevenCard/>
                        </Col>
                        <Col span={7} > 
                            <StarCard/>
                        </Col>
                    </Row>
                    </Flex>
            </Col>
        </Row>
        </Flex>

        const mobileGrid = <Flex align="center" flex={1} style={{width: '100%'}} vertical gap={10}>
            <MarketplaceCard mobile/>
            <Flex style={{width: '100%'}} gap={10}>
                <Volume3M/>
                <Volume2M/>
            </Flex>
            <Projects/>
            <Flex gap={10} style={{width: '100%', height: '100%'}}>
                <Flex flex={1}>
                    <GrantsCard/>
                </Flex>
                <Flex gap={10} vertical>
                    <DownloadsCard mobile/>
                    <StarCard/>
                </Flex>
            </Flex>
            <Flex wrap='wrap' gap={10} style={{width: '100%'}}>
                <Since mobile/>
                <ACard style={{flexGrow: 5, height: 'auto'}}/>
            </Flex>
            <SevenCard/>
        </Flex>

export const About = () => {
    const {isMobile} = useWindowSize()
    return <Flex style={{marginBottom: 75}} vertical>
        <Typography.Title style={{
            margin: '75px 0 35px 0',
            color: '#9579F0',
            alignSelf:'flex-start'
        }}>
            About us
        </Typography.Title>
        {isMobile ? mobileGrid : desctopGrid}
    </Flex>
}
