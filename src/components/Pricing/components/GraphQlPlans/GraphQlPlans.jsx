import { Tooltip } from "antd";
import PlanCard from "../PlanCard/PlanCard";
import { InfoCircleOutlined } from "@ant-design/icons";

const plans = [
  {
    title: 'Default',
    price: 'Free',
    monthlyPrice: '',
    features: [
      '1 RPS',
      'Basic custom requests to blockchain',
      'Max records returned by one request: 150',
      '2 sec time limit per query',
    ],
    packages: [],
    mainActionLabel: 'Choose Free',
  },
  {
    title: 'Omega',
    price: '5 USD',
    monthlyPrice: '1.26 TON monthly',
    features: [
      '10 RPS',
      'Basic custom requests to blockchain',
      'Aggregation requests to blockchain',
      'Max records returned by one request: 150',
      '1 webhook with 5 filters and 5 fields (max 1 account per hook)',
      '2 sec time limit per query',
    ],
    packages: [
      { label: '1 month' },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Omega 5 USD',
  },
  {
    title: 'Gamma',
    price: '90 USD',
    monthlyPrice: '1.26 TON monthly',
    features: [
      '100 RPS',
      'Basic custom requests to blockchain',
      'Aggregation requests to blockchain',
      'Max records returned by one request: 500',
      '50 webhook with 10 filters and 10 fields (max 50 account per hook)',
      '5 sec time limit per query',
    ],
    packages: [
      { label: '1 month' },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Gamma 90 USD',
  },
  {
    title: 'Beta',
    price: '290 USD',
    monthlyPrice: '73.23 TON monthly',
    features: [
      '300 RPS',
      'Basic custom requests to blockchain',
      'Aggregation requests to blockchain',
      'Max records returned by one request: 1k',
      '500 webhook with 20 filters and 20 fields (max 1k account per hook)',
      '10 sec time limit per query',
    ],
    packages: [
      { label: '1 month' },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Omega 290 USD',
  },
  {
    title: 'Alpha',
    price: '888 USD',
    monthlyPrice: '224.24 TON monthly',
    features: [
      '1k RPS',
      'Basic custom requests to blockchain',
      'Aggregation requests to blockchain',
      'Max records returned by one request: 10k',
      '500 webhook with 50 filters and 50 fields (max 10k account per hook)',
      '15 sec time limit per query',
    ],
    packages: [
      { label: '1 month' },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Alpha 888 USD',
  },

];

function GraphQlPlans() {
  return (
    <div style={{
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }}>
      {plans.map((plan, index) => (
        <PlanCard
          key={index}
          {...plan}
          onPackageSelect={() =>
            window.open('https://t.me/dtontech_bot', '_blank')
          }
          onMainAction={() =>
            window.open('https://t.me/dtontech_bot', '_blank')
          }
          />
      ))}
    </div>
  );
}

export default GraphQlPlans;