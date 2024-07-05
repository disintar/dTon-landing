import { useEffect } from "react"
import useFetchData from "../../helpers/useFetchData"
import { Flex, Skeleton, Spin, Typography } from "antd"
import { callLatencyToString, indexLatencyToString } from "../../helpers/strings"

export const Nodes = () => {
    const {data, loading, error, load} = useFetchData('https://status.dton.io/api/v1/liteservers/')

    useEffect(() => {
        load()
    }, [])

    return <Flex vertical align="start">
        <Typography style={{fontSize: 30, fontWeight:500}}>TON Private Nodes</Typography>
        {loading ? <Skeleton active style={{width:315, height: 430}} /> : <table>
        <thead>
        <tr>
            <th>№</th>
            <th>Last block</th>
            <th>Answer latency</th>
        </tr>
        </thead>
        <tbody>
        { data && data.map(item => {
        const {title, index_latency, call_latency} = item;
            return  <tr key={title}>
                        <td >
                            <Flex align="center" justify="center" style={{padding: '15px 20px'}}>{title}</Flex>
                        </td>
                        <td>
                            <Flex align="center" justify="center" style={{padding: '15px 20px'}}>
                                {indexLatencyToString(index_latency)} ago
                            </Flex>
                        </td>
                        <td>
                            <Flex align="center" justify="center" style={{padding: '15px 20px'}}>
                                {callLatencyToString(call_latency)}
                            </Flex>
                        </td>
                    </tr>})}
                    </tbody>
        </table>}</Flex>
}