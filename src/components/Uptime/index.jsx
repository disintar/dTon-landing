import { Flex, Space, Typography } from "antd"

const DataBlock = ({title,value, data}) => {
    return <Flex vertical style={{
        padding:'20px 40px',
         boxShadow: '0px 8px 25px 0px #A5A5A54D',
         borderRadius: 10
    }}>
<Flex gap={5} style={{marginBottom:10}}>
    <Typography>{title}</Typography>
    |
    <Typography style={{color: '#32E350'}}>{value}</Typography>
</Flex>
    {data.map((item, index) => {
        return <div key={index} className="status-period"/>
    })}
    </Flex>
}

export const Uptime = ({title}) => {
    return <Flex vertical>
        <Flex justify='space-between'>
            <Flex gap={8} align='baseline'>
                    <Typography style={{fontSize:30, fontWeight:500}}>Uptime</Typography>
                    <Typography style={{fontSize:24, fontWeight:600, color: '#5AC8FA'}}>{title}</Typography>
            </Flex>  
            <Flex>Calendar</Flex>
        </Flex>
        <Flex vertical gap={26}>
            <DataBlock title='Available' value='99.996%' data={[]}/>
            <DataBlock title='Index latency' value='12s' data={[]}/>
            <DataBlock title='Call latency' value='300ms' data={[]}/>
        </Flex>
    </Flex>
}