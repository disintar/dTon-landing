import {  Flex, Typography } from "antd"
import TogglePricingSegment from "./components/Checkbox/checkbox"
import LightServerPlans from "./components/LightServerPlans/LightServerPlans"
import { useState } from "react";
import GraphQlPlans from "./components/GraphQlPlans/GraphQlPlans";

export const Pricing = () => {
  const [checkBoxValue, setCheckBoxValue] = useState('liteclient');

  return <Flex vertical style={{ height: '100%', marginBottom: 75 }}>
          <Typography.Title style={{
          margin: '108px 0 35px 0  ',
          color: '#9579F0',
          alignSelf: 'flex-start',
      }}>
      Pricing
      </Typography.Title>
      <Flex gap='large' align="left" vertical>
        <TogglePricingSegment
          checkBoxValue={checkBoxValue}
          setCheckBoxValue={setCheckBoxValue}
        />
        {checkBoxValue === 'liteclient' ? <LightServerPlans /> : null}
        {checkBoxValue === 'graphql' ? <GraphQlPlans /> : null}
      </Flex>
  </Flex>
}
