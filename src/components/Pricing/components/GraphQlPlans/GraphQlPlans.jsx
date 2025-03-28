import { Tooltip } from "antd";
import PlanCard from "../PlanCard/PlanCard";
import { InfoCircleOutlined } from "@ant-design/icons";

const plans = [
  {
    title: 'Default',
    price: 'Free',
    monthlyPrice: '',
    features: [
      '5 RPS',
      '2 Servers',
      'Basic custom requests to blockchain',
      '1 filter subscriptions to webhook',
      'Mempool',
    ],
    packages: [],
    mainActionLabel: 'Choose Free',
  },
  {
    title: 'Merkle',
    price: '145 USD',
    monthlyPrice: '20 TON monthly',
    features: [
      '60 RPS',
      '2 Servers',
      'Basic custom requests to blockchain',
      'Aggregation requests to blockchain',
      '2 filter subscriptions to webhook',
      'Mempool',
      'Page size limit: 150',
    ],
    packages: [
      { label: '1 month', isActive: true },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Merkle 145 USD',
  },
  {
    title: 'Miner',
    price: '30 USD',
    monthlyPrice: '4 TON monthly',
    features: [
      '10 RPS',
      '2 Servers',
      'Basic custom requests to blockchain',
      'Aggregation requests to blockchain',
      '2 filter subscriptions to webhook',
      'Mempool',
      'Page size limit: 100',
    ],
    packages: [
      { label: '1 month', isActive: true },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Miner 30 USD',
  },
  {
    title: 'Fift',
    price: '710 USD',
    monthlyPrice: '20 TON monthly',
    features: [
      '400 RPS',
      '2 Servers',
      'Basic custom requests to blockchain',
      'Aggregation requests to blockchain',
      '2 filter subscriptions to webhook',
      'Mempool',
      'Page size limit: 200',
    ],
    packages: [
      { label: '1 month', isActive: true },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Fift 710 USD',
  },
  {
    title: 'Archive',
    price: '105 USD',
    monthlyPrice: '16 TON monthly',
    features: [
      '20 RPS',
      'Archive Servers',
      'No send_message',
      'Basic custom requests to blockchain',
      'Aggregation requests to blockchain',
      '2 filter subscriptions to webhook',
      'Mempool',
      'Page size limit: 250',
    ],
    packages: [
      { label: '1 month', isActive: true },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Miner 30 USD',
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