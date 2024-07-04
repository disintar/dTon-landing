import { useEffect } from "react"
import useFetchData from "../../helpers/useFetchData"
import { Flex, Spin, Typography } from "antd"
import { callLatencyToString, indexLatencyToString } from "../../helpers/strings"

export const Nodes = () => {
    const {data, loading, error, load} = useFetchData('https://status.dton.io/api/v1/liteservers/')

    useEffect(() => {
        load()
    }, [])

    console.log(data)
    if(loading) return <Spin/>


    return <Flex vertical align="start">
        <Typography style={{fontSize: 30, fontWeight:500}}>TON Private Nodes</Typography>
        <table>
        <tr>
            <th>№</th>
            <th>Last block</th>
            <th>Answer latency</th>
        </tr>
        {Object.entries(data).map(item => {
        const title = item[0]
        const {color, index_latency, call_latency} = item[1];
            return  <tr key={title}>
                        <td >
                            <Flex style={{padding: '15px 20px'}}>{title}</Flex>
                        </td>
                        <td>
                            <Flex style={{padding: '15px 20px'}}>
                                {indexLatencyToString(index_latency)} ago
                            </Flex>
                        </td>
                        <td>
                            <Flex style={{padding: '15px 20px'}}>
                                {callLatencyToString(call_latency)}
                            </Flex>
                        </td>
                            
                       
                    </tr>})}
        </table></Flex>
}