import { CodeOutlined } from "@ant-design/icons"
import { Flex, Space, Typography } from "antd"
import starIcon from '../../assets/icons/star.svg'

export const Lib = ({title, link, stars, color}) => {
   return <Flex align="center"
            justify='space-between' style={{
            backgroundColor: color,
            color: '#141127',
            borderRadius: 16,
            padding: 20,
            width: 350, 
            height: 60}}
            onClick={()=>console.log(link)}>
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
