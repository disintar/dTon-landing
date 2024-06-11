import React, { useEffect, useState } from "react"
import { Col, Flex, Row, Space, Spin, Typography } from "antd"
import { GoToStatusPage } from "../Buttons"
import { useWindowSize } from "../../helpers/useWindowSize"
import './status-circle.css'

const emptyData = {
    '7d': 0,
    '24h': 0,
    available: 0,
    'call_latency': 0,
    'index_latency': 0
}

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

const statusIcons = {
    online: {
        color: 'green',
        title: 'Operational',
    },
    offline: {
        color: 'red',
        title: 'Major outage',
    },
    pending: {
        color: 'yellow',
        title: 'Partial outage',
        textColor: '#626262'
    }
}

export const StatusCard = ({statusData, button, resource }) => {

const {"24h": day, "7d": week, index_latency, call_latency, available } = statusData;



    const StatusIcon = ({color, title, textColor}) => {
        return <Flex align="center" justify='space-around' gap={8}>
            <Flex style={{width: 20, height: 20}}>
            <div className={`circle ${color}`}/>
            </Flex>
            <Typography style={{color: textColor || color}}>{title}</Typography>
        </Flex>
    }

    const getStatus = (available) => {
        if(!available){
            return statusIcons['pending']
        }
        else if(available === -1){
            return statusIcons['offline']
        }
        return statusIcons['online']
    }

    return <Flex align="start" vertical gap='middle' style={{width: '100%'}}>
        <Flex style={{width: '100%'}} justify='space-between'>
            <Flex vertical align='start'>
                <Typography.Title level={2} style={{color: '#5AC8FA', margin: 0}}>{resource}</Typography.Title>
                <Typography.Title level={3} style={{margin: 0}}>Status metrics</Typography.Title>
            </Flex>
            <Flex vertical align='end' gap={14} justify='space-between'>
                {button}
                <StatusIcon {...getStatus(available)}/>
            </Flex>
        </Flex>
        <Row style={blockStyle}>
                 <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical>
                       {day ? <Typography.Title style={valueStyle} level={2}>{day.toFixed(3)} %</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Uptime / 24h</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical>
                        {week ? <Typography.Title style={valueStyle} level={2}>{week.toFixed(3)} %</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Uptime / 7d</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical>
                      {index_latency ? <Typography.Title style={valueStyle} level={2}>{index_latency} ms</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Call Latency</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5}  vertical>
                       {call_latency ? <Typography.Title style={valueStyle} level={2}>{call_latency} s</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Index Latency</Typography.Text>
                    </Flex>
                </Col>
        </Row>
    </Flex>
}
export const APIStatus = () => {
    const {isMobile} = useWindowSize()
    const [siteData, setSiteData ] = useState(emptyData)
    const [botData, setBotData] = useState(emptyData);

    useEffect(()=> {
        const fetchData = (url, action) => {
            fetch(url,{mode:'cors'})
        .then(response => {
            console.log(response)
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
            <StatusCard
             button={isMobile ? null : <GoToStatusPage/>}
             resource='Dton.io'
             statusData={siteData} />
            <StatusCard 
            resource='@liteserver.bot'
            statusData={botData}/>
            {isMobile && <GoToStatusPage style={{width: '100%'}}/>}
        </Flex>
    </Flex>
}
