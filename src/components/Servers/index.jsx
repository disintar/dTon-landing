import { useEffect } from "react"
import useFetchData from "../../helpers/useFetchData"
import { Flex, Skeleton, Spin, Typography } from "antd"

export const Servers = () => {
    const {data, loading, error, load} = useFetchData('https://dton.io/api_status/v1/servers/')

    useEffect(() => {
        load()
    }, [])

    return <Flex vertical style={{margin: '0 25px 25px 0'}} align="start">
        <Typography style={{fontSize: 30, fontWeight:500}}>Servers</Typography>
        {loading ? <Skeleton active style={{width:320, height: 370}} /> : <table>
            <tbody>
        {data && data.map(item => {
        const {color,title, ping} = item
            return  <tr key={title}>
                        <td >
                            <Flex style={{padding: '15px 20px', }}>{title}</Flex></td>
                        <td>
                        <Flex align="center" justify="space-between">
                            <Flex align="center" justify="center" style={{height: 20, width: 20, padding: '15px 20px'}}>
                                <span className={`circle ${color}`}/>
                            </Flex>
                        </Flex>
                            </td>
                            
                       
                    </tr>})}
                    </tbody>
        </table>}</Flex>
}