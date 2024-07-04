import { useEffect } from "react"
import useFetchData from "../../helpers/useFetchData"
import { Flex, Spin, Typography } from "antd"

export const Servers = () => {
    const {data, loading, error, load} = useFetchData('https://status.dton.io/api/v1/servers/')

    useEffect(() => {
        load()
    }, [])

    console.log(data)
    if(loading) return <Spin/>


    return <Flex vertical align="start">
        <Typography style={{fontSize: 30, fontWeight:500}}>Servers</Typography>
        <table>
        {Object.entries(data).map(item => {
        const title = item[0]
        const {color, ping} = item[1];
            return  <tr key={title}>
                        <td >
                            <Flex style={{padding: '15px 20px', }}>{title}</Flex></td>
                        <td>
                        <Flex align="center" justify="space-between">
                            <Flex style={{padding: '15px 20px'}}>
                                {ping} ping
                            </Flex>
                            <Flex align="center" justify="center" style={{height: 20, width: 20, padding: '15px 20px'}}>
                                <span className={`circle ${color}`}/>
                            </Flex>
                        </Flex>
                            </td>
                            
                       
                    </tr>})}
        </table></Flex>
}