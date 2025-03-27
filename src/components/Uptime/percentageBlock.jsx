import { Col, Flex, Row, Spin, Typography } from "antd"
import useFetchData from "../../helpers/useFetchData"
import { useEffect } from "react"
import { percentToString } from "../../helpers/strings"

const blockStyle = {
    boxShadow: '0px 8px 25px 0px #A5A5A54D',
    borderRadius: '10px',
    padding: '20px 40px',
    width: '100%'
}
const textStyle = {fontSize: 18, color: '#32E350'}
const valueStyle = {margin: 0}

export const PercentageBlock = ({service}) => {
 
    const {data, loading, error, load} = useFetchData(`https://dton.io/api_status/v1/success_percentages/${service}/`)


    useEffect(()=>{load()},[])
    
    const {"1d": day, "7d": week, "30d": month, "90d":d90} = data

    return <Row style={blockStyle}>
    <Col md={6} sm={12} span={12}>
       <Flex gap={5} vertical align="center">
          {!loading && day ? <Typography.Title style={valueStyle} level={2}>{percentToString(day)}</Typography.Title> : <Spin size="large"/>}
           <Typography.Text style={textStyle}>Last 24 hours</Typography.Text>
       </Flex>
   </Col>
   <Col md={6} sm={12} span={12}>
       <Flex gap={5} vertical align="center">
           {!loading && week ? <Typography.Title style={valueStyle} level={2}>{percentToString(week)}</Typography.Title> : <Spin size="large"/>}
           <Typography.Text style={textStyle}>Last 7 days</Typography.Text>
       </Flex>
   </Col>
   <Col md={6} sm={12} span={12}>
       <Flex gap={5}  vertical align="center">
          {!loading && month ? <Typography.Title style={valueStyle} level={2}>{percentToString(month)}</Typography.Title> : <Spin size="large"/>}
           <Typography.Text style={textStyle}>Last 30 days</Typography.Text>
       </Flex>
   </Col>
   <Col md={6} sm={12} span={12}>
       <Flex gap={5} vertical align="center">
         {!loading && d90 ? <Typography.Title style={valueStyle} level={2}>{percentToString(d90)}</Typography.Title> : <Spin size="large"/>}
           <Typography.Text style={textStyle}>Last 90 days</Typography.Text>
       </Flex>
   </Col>
</Row>
}
