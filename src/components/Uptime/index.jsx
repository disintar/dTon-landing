import { Flex,Skeleton,Spin, Tooltip, Typography } from "antd"
import './styles.css'
import useFetchData from "../../helpers/useFetchData";
import { useEffect, useState } from "react";
import { PercentageBlock } from "./percentageBlock";
import { callLatencyToString, indexLatencyToString, percentToString } from "../../helpers/strings";

const resources = {
    'dton.io': 'graphql',
    '@literserver.bot':'liteserver'
}

const activeStyle = {
    backgroundColor: '#626262',
    color: '#FFF'
}

const radioStyle = {
    borderRadius: 100,
    padding: '1px 8.5px',
    fontSize: 14,
    color: '#626262',
    height: 20,
    cursor: 'pointer',
}

function interpolateColor(value, min = 0, max = 1) {
    const minColor = [255, 0, 0]; // Red
    const maxColor = [0, 255, 0]; // Green

    if (value > 0.4 && value <= 0.6) {
        return 'rgb(255, 255, 0)'; // Yellow color at value 0.4 - 0.6
      }
  
    const ratio = (value - min) / (max - min);
    const color = [
      Math.round((maxColor[0] - minColor[0]) * ratio + minColor[0]),
      Math.round((maxColor[1] - minColor[1]) * ratio + minColor[1]),
      Math.round((maxColor[2] - minColor[2]) * ratio + minColor[2])
    ];
  
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  }


const DataBlock = ({title, field, avg, loading, error, data, formatValue}) => {

    const lastItem = data && data["176"]

    const getAvgValue = (item) => {
        if(avg == 'success_normalized'){
            return item[avg] * 100
        }
         return item[avg]
    }

    return <Flex vertical  style={{
        padding:'20px 40px',
         boxShadow: '0px 8px 25px 0px #A5A5A54D',
         borderRadius: 10,
         width:'100%'
    }}>
<Flex gap={5} style={{marginBottom:10}}>
    <Typography>{title}</Typography>
    |
    <Typography style={{color: '#32E350'}}>{!lastItem ? <Spin/> : formatValue(getAvgValue(lastItem))}</Typography>
</Flex>
<Flex gap={2} className="status-line" style={{ overflow:'hidden'}}>
    {loading ? <Skeleton.Input size="small" block active/> : Object.values(data).map((item, index) => {
       
        const date = new Date(item['avg_date']).toDateString()
        const tooltipText = <Flex vertical>
                <span style={{color: '#5AC8FA'}}>
                {date}
                </span>
                {formatValue(getAvgValue(item))}
            </Flex>
        return <Tooltip key={index} placement="top" title={tooltipText}>
            <div  className="status-stick" style={{backgroundColor: interpolateColor(item[field], 0 , 1)}} />
            </Tooltip>
    })}
    </Flex>
    </Flex>
}

export const Uptime = ({title}) => {
    const [days, setDays] = useState(1)
   
    const {data,loading,error, load} = useFetchData(`https://status.dton.io/api/v1/advanced/${resources[title]}/${days}/`)

    useEffect(()=> {
        load();
    },[days])

    const isActiveStyle = (value) => {
        return days === value ? activeStyle : {}

    }

    return <Flex vertical gap={25} style={{width: '100%'}}>
        <Flex justify='space-between'>
            <Flex gap={8} align='baseline'>
                    <Typography style={{fontSize:30, fontWeight:500}}>Uptime</Typography>
                    <Typography style={{fontSize:24, fontWeight:600, color: '#5AC8FA'}}>{title}</Typography>
            </Flex>  
            <Flex align="center" justify='center' gap={2} style={{backgroundColor: '#8F8F8F33', height:30, padding: '5px 15px', borderRadius: 8}}>
                <div onClick={()=> setDays(1)} style={{...radioStyle, ...isActiveStyle(1)}}>1d</div>
                <div onClick={()=> setDays(30)} style={{...radioStyle, ...isActiveStyle(30)}}>30d</div>
                <div onClick={()=> setDays(90)} style={{...radioStyle, ...isActiveStyle(90)}}>90d</div>
            </Flex>
        </Flex>
        <Flex vertical flex={1} gap={25}>
            <DataBlock title='Available' formatValue={percentToString} avg="success_normalized" loading={loading} error={error} data={data} field="success_normalized"/>
            <DataBlock title='Index latency' formatValue={indexLatencyToString} avg="avg_index_latency" data={data} loading={loading} error={error} field="normalized_index_latency"/>
             <DataBlock title='Call latency' formatValue={callLatencyToString} avg="avg_call_latency" data={data} loading={loading} error={error} field="normalized_call_latency" />
            <PercentageBlock service={'graphql'}/>
        </Flex>
    </Flex>
}

