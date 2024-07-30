
import { Col, Flex, Row, Spin, Typography } from "antd";
import './status-circle.css'
import { callLatencyToString, indexLatencyToString, percentToString } from "../../helpers/strings";

const blockStyle = {
    boxShadow: '0px 8px 25px 0px #A5A5A54D',
    borderRadius: '10px',
    padding: '20px 40px',
    width: '100%'
}

const textStyle = {fontSize: 18, color: '#32E350'}
const valueStyle = {margin: 0}

export const SITE_STATUS_URL = 'https://status.dton.io/api/v1/simple/liteserver/';
export const BOT_STATUS_URL = 'https://status.dton.io/api/v1/simple/graphql/';

export const StatusCard = ({data, button, resource }) => {

const {"24h": day, "7d": week, index_latency, call_latency, available } = data;

    return <Row style={blockStyle}>
                 <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical align="center">
                       {day ? <Typography.Title style={valueStyle} level={2}>{percentToString(day)}</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Uptime / 24h</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical align="center">
                        {week ? <Typography.Title style={valueStyle} level={2}>{percentToString(week)}</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Uptime / 7d</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5}  vertical align="center">
                       {call_latency ? <Typography.Title style={valueStyle} level={2}>{callLatencyToString(call_latency)}</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Call Latency</Typography.Text>
                    </Flex>
                </Col>
                <Col md={6} sm={12} span={12}>
                    <Flex gap={5} vertical align="center">
                      {index_latency ? <Typography.Title style={valueStyle} level={2}>{indexLatencyToString(index_latency)}</Typography.Title> : <Spin size="large"/>}
                        <Typography.Text style={textStyle}>Index Latency</Typography.Text>
                    </Flex>
                </Col>
        </Row>
}