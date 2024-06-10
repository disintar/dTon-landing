import { CodeOutlined } from "@ant-design/icons"
import { Flex, Space, Typography } from "antd"
import starIcon from '../../assets/icons/star.svg'
import { useWindowSize } from "../../helpers/useWindowSize"

export const Lib = ({title, href, stars, color}) => {
    const {isMobile} = useWindowSize()
   return <Flex flex={1} align="center"
            justify='space-between' style={{
            backgroundColor: color,
            color: '#141127',
            borderRadius: 16,
            padding: 20,
            cursor: 'pointer',
            width: isMobile ? '100%' : 350,
            height: 60}}
            onClick={()=>window.open(href, '_blank')}>
        <Space>
            <CodeOutlined />
            <Typography>
                {'<'} {title} {'>'}
            </Typography>
        </Space>
        <Space>
            <img src={starIcon}/>
            {stars}
        </Space>
    </Flex>
}
