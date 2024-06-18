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
        className: 'green',
        color: '#32E350',
        title: 'Operational',
    },
    offline: {
        className: 'red',
        color: '#FF7878',
        title: 'Major outage',
    },
    pending: {
        className: 'yellow',
        title: 'Partial outage',
        color: '#626262'
    }
}

export const StatusCard = ({statusData, button, resource }) => {

const {"24h": day, "7d": week, index_latency, call_latency, available } = statusData;

    const {isMobile} = useWindowSize()

    const StatusIcon = ({color, title, className}) => {
        return <Flex align="center" justify='space-around' gap={8}>
            <Flex style={{width: 20, height: 20}}>
            <div className={`circle ${className}`}/>
            </Flex>
            <Typography style={{color}}>{title}</Typography>
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
                <Typography.Title level={isMobile ? 3 : 2} style={{color: '#5AC8FA', margin: 0}}>{resource}</Typography.Title>
                <Typography.Title level={isMobile ? 4 : 3} style={{margin: 0}}>Status metrics</Typography.Title>
            </Flex>
            <Flex vertical align='flex-end' gap={14} justify='flex-end'>
                {button}
                <StatusIcon {...getStatus(available)}/>
            </Flex>
        </Flex>
        <Row style={blockStyle}>
                 <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical>
                       {day ? <Typography.Title style={valueStyle} level={2}>{day.toFixed(2)} %</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Uptime / 24h</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical>
                        {week ? <Typography.Title style={valueStyle} level={2}>{week.toFixed(2)} %</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Uptime / 7d</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5}  vertical>
                       {call_latency ? <Typography.Title style={valueStyle} level={2}>{call_latency} ms</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Call Latency</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical>
                      {index_latency ? <Typography.Title style={valueStyle} level={2}>{(index_latency/ 1000).toFixed(2)} s</Typography.Title> : <Spin size="large"/>}
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
    const [siteDataLoading, setSiteDataLoading] = useState(true)
    const [botDataLoading, setBotDataLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = (url, action, setLoading) => {
        console.log('fetch', url)
        fetch(url,{mode:'cors'})
                .then(response => {
                    if (!response.ok) {

                    setLoading(false)
                    throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    action(data)
                    setLoading(false)
                })
                .catch(error => {
                    console.error('There was a problem with your fetch operation:', error);
                    setError(error.message)
                });
    }

    const fetchBoth = () => {
        setBotDataLoading(true)
        setSiteDataLoading(true)
        fetchData(SITE_STATUS_URL, setSiteData, setSiteDataLoading)
        fetchData(BOT_STATUS_URL, setBotData, setBotDataLoading)
    }
    

        useEffect(()=> {
            fetchBoth()
            const myInterval = setInterval(fetchBoth, 10000);
            return () => {
                clearInterval(myInterval);
            };
        },[])

    return <Flex vertical style={{ height: '100%', marginBottom: 75 }}>
            <Typography.Title style={{
            margin: '108px 0 35px 0  ',
            color: '#9579F0',
            alignSelf: 'flex-start',
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
            {error && <Typography.Title level={3} style={{color: 'red'}}>{error}</Typography.Title>}
        </Flex>
    </Flex>
}
