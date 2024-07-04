import { useEffect } from "react"
import {  Flex, Typography } from "antd"
import { GoToStatusPage } from "../Buttons"
import { useWindowSize } from "../../helpers/useWindowSize"
import { BOT_STATUS_URL, SITE_STATUS_URL, StatusCard } from "./StatusCard"
import { useStatusIcon } from "./useStatusIcon"
import useFetchData from "../../helpers/useFetchData"









export const APIStatus = () => {
    const {isMobile} = useWindowSize()


    const {data: siteData, loading : siteLoading, error: siteError, load: loadSiteData} = useFetchData(SITE_STATUS_URL)
    const {data: botData, loading: botLoading, error: botError, load: loadBotData} = useFetchData(BOT_STATUS_URL)

    useEffect(()=> {
        loadSiteData();
        loadBotData()
        const siteInterval = setInterval(loadSiteData, 10000);
        const botInterval = setInterval(loadBotData, 10000)
        return () => {
            clearInterval(siteInterval);
            clearInterval(botInterval)
        };
    },[])


    const {icon: siteStatusIcon} = useStatusIcon(siteData.available)
    const {icon: botStatusIcon} = useStatusIcon(botData.available)

    return <Flex vertical style={{ height: '100%', marginBottom: 75 }}>
            <Typography.Title style={{
            margin: '108px 0 35px 0  ',
            color: '#9579F0',
            alignSelf: 'flex-start',
        }}>
       API Status
        </Typography.Title>
        <Flex gap='large' align="center" vertical>
            <Flex align="start" vertical gap='middle' style={{width: '100%'}}>
            
            <Flex style={{width: '100%'}} justify='space-between'>
                <Flex vertical align='start'>
                    <Typography.Title level={isMobile ? 3 : 2} style={{color: '#5AC8FA', margin: 0}}>Dton.io</Typography.Title>
                    <Typography.Title level={isMobile ? 4 : 3} style={{margin: 0}}>Status metrics</Typography.Title>
                </Flex>
                <Flex vertical align='flex-end' gap={14} justify='flex-end'>
                    {isMobile ? null : <GoToStatusPage/>}
                {siteStatusIcon}
                </Flex>
            </Flex>
            <StatusCard
            data={siteData}/>
             </Flex>
             <Flex align="start" vertical gap='middle' style={{width: '100%'}}>
            
            <Flex style={{width: '100%'}} justify='space-between'>
                <Flex vertical align='start'>
                    <Typography.Title level={isMobile ? 3 : 2} style={{color: '#5AC8FA', margin: 0}}>@liteserver.bot</Typography.Title>
                    <Typography.Title level={isMobile ? 4 : 3} style={{margin: 0}}>Status metrics</Typography.Title>
                </Flex>
                <Flex vertical align='flex-end' gap={14} justify='flex-end'>
                    {isMobile ? null : <GoToStatusPage/>}
                {botStatusIcon}
                </Flex>
            </Flex>
            <StatusCard 
            data={botData}/>
            {isMobile && <GoToStatusPage style={{width: '100%'}}/>}
            </Flex>
        </Flex>
    </Flex>
}
