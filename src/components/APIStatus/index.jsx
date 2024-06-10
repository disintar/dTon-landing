import React from "react"
import { Col, Flex, Row, Typography } from "antd"
import { GoToStatusPage } from "../Buttons"
import { useWindowSize } from "../../helpers/useWindowSize"
const blockStyle = {
    boxShadow: '0px 8px 25px 0px #A5A5A54D',
    borderRadius: '10px',
    padding: '20px 40px',
    width: '100%'

}

const statusData = [{
    resource: 'Dton.io',
    metrics: [
        {title: 'Uptime / 24h', value: '100.000%'},
        {title: 'Uptime / 7d', value: '100.000%'},
        {title: 'Call Latency', value: '95ms'},
        {title: 'Index Latency', value: '12.2s'}
    ]},
    {
        resource: '@liteserver.bot:',
        metrics: [
            {title: 'Last 24 hours', value: '100.000%'},
            {title: 'Last 7 days', value: '100.000%'},
            {title: 'Last 30 days', value: '99.977%'},
            {title: 'Last 90 days', value: '99.982%'}
        ]}
]

export const StatusCard = ({statusData, button }) => {
    return <Flex align="start" vertical gap='middle' style={{width: '100%'}}>
        <Flex style={{width: '100%'}} justify='space-between'>
            <Flex vertical align='start'>
                <Typography.Title level={2} style={{color: '#5AC8FA', margin: 0}}>{statusData?.resource}</Typography.Title>
                <Typography.Title level={3} style={{margin: 0}}>Status metrics</Typography.Title>
            </Flex>
            {button}
        </Flex>
        <Row style={blockStyle}>
            {statusData?.metrics.map(({title, value})=> {
                return <Col key={title} md={6} sm={12} span={12}>
                <Flex  vertical>
                    <Typography.Title level={2}>{value}</Typography.Title>
                    <Typography.Text style={{color: '#32E350'}}>{title}</Typography.Text>
                </Flex></Col>
            })}
        </Row>
    </Flex>
}

export const APIStatus = () => {
    const {isMobile} = useWindowSize()
    return <Flex vertical style={{ height: '100%', marginBottom: 75 }}>
            <Typography.Title style={{
            margin: '108px 0 35px 0  ',
            color: '#9579F0',
                alignSelf: 'flex-start'
        }}>
       API Status
        </Typography.Title>
        <Flex gap='large' align="center" vertical>
            <StatusCard button={isMobile? null :
                <GoToStatusPage/>
            } statusData={statusData[0]} />
            <StatusCard statusData={statusData[1]}/>
            {isMobile && <GoToStatusPage style={{width: '100%'}}/>}
        </Flex>
    </Flex>
}
