import React, { useEffect, useState } from "react"
import { Col, Flex, Row, Spin, Typography } from "antd"
import { GoToStatusPage } from "../Buttons"
import { useWindowSize } from "../../helpers/useWindowSize"
import { LoadingOutlined } from "@ant-design/icons"

const blockStyle = {
    boxShadow: '0px 8px 25px 0px #A5A5A54D',
    borderRadius: '10px',
    padding: '20px 40px',
    width: '100%'
}

const textStyle = {fontSize: 18, color: '#32E350'}
const valueStyle = {margin: 0}

const SITE_STATUS_URL = 'https://status.dton.io/api/v1/simple/liteserver/';
const BOT_STATUS_URL = 'https://status.dton.io/api/v1/simple/graphql/';

export const StatusCard = ({statusData, button, resource }) => {

    return <Flex align="start" vertical gap='middle' style={{width: '100%'}}>
        <Flex style={{width: '100%'}} justify='space-between'>
            <Flex vertical align='start'>
                <Typography.Title level={2} style={{color: '#5AC8FA', margin: 0}}>{resource}</Typography.Title>
                <Typography.Title level={3} style={{margin: 0}}>Status metrics</Typography.Title>
            </Flex>
            {button}
        </Flex>
        {statusData?.available ?
        <Row style={blockStyle}>
                 <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical>
                        <Typography.Title style={valueStyle} level={2}>{statusData['24h']} %</Typography.Title>
                        <Typography.Text style={textStyle}>Uptime / 24h</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical>
                        <Typography.Title style={valueStyle} level={2}>{statusData['7d']} %</Typography.Title>
                        <Typography.Text style={textStyle}>Uptime / 7d</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical>
                        <Typography.Title style={valueStyle} level={2}>{statusData['index_latency']} ms</Typography.Title>
                        <Typography.Text style={textStyle}>Call Latency</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5}  vertical>
                        <Typography.Title style={valueStyle} level={2}>{statusData['call_latency']} s</Typography.Title>
                        <Typography.Text style={textStyle}>Index Latency</Typography.Text>
                    </Flex>
                </Col>
        </Row> : <Flex justify="center" style={blockStyle}> <Typography.Title style={valueStyle} level={2}>NOT AVAILABLE</Typography.Title></Flex>}
    </Flex>
}
export const APIStatus = () => {
    const {isMobile} = useWindowSize()
    const [siteData, setSiteData ] = useState()
    const [botData, setBotData] = useState();

    useEffect(()=> {
        const fetchData = (url, action) => {
            fetch(url,{mode:'no-cors'})
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Обработка полученных данных
            action(data)
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
        }

        fetchData(SITE_STATUS_URL, setSiteData)
        fetchData(BOT_STATUS_URL, setBotData)
        
    },[])

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
            } resource='Dton.io'
             statusData={siteData} />
            <StatusCard 
            resource='@liteserver.bot'
            statusData={botData}/>
            {isMobile && <GoToStatusPage style={{width: '100%'}}/>}
        </Flex>
    </Flex>
}
