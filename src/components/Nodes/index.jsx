import { useEffect } from "react"
import useFetchData from "../../helpers/useFetchData"
import { Flex, Skeleton, Spin, Typography } from "antd"
import { callLatencyToString, indexLatencyToString } from "../../helpers/strings"

export const Nodes = () => {
    const {data, loading, error, load} = useFetchData('https://dton.io/api_status/v1/liteservers/')

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
            <th>Requests #</th>
        </tr>
        </thead>
        <tbody>
        { data && data.map(item => {
        const {title, index_latency, requests_amount} = item;
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
                                {requests_amount}
                            </Flex>
                        </td>
                    </tr>})}
                    </tbody>
        </table>}</Flex>
}