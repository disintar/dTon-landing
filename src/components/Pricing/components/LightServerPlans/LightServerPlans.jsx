import DedicatedPlan from "../DedicatedPlan/DedicatedPlan";
import PlanCard from "../PlanCard/PlanCard";

const plans = [
  {
    title: 'TestNet',
    price: '15 USD',
    monthlyPrice: '3.79 TON monthly',
    features: ['10 RPS', 'Testnet Server'],
    packages: [
      { label: '1 month', isActive: true },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose TestNet 15 USD',
  },
  {
    title: 'Miner',
    price: '32 USD',
    monthlyPrice: '8.08 TON monthly',
    features: ['10 RPS', '2 Servers'],
    packages: [
      { label: '1 month', isActive: true },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Miner 32 USD',
  },
  {
    title: 'Merkle',
    price: '160 USD',
    monthlyPrice: '40.4 TON monthly',
    features: ['60 RPS', '2 Servers'],
    packages: [
      { label: '1 month' },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Merkle 160 USD',
  },
  {
    title: 'Fift',
    price: '800 USD',
    monthlyPrice: '202.02 TON monthly',
    features: ['400 RPS', '2 Servers'],
    packages: [
      { label: '1 month' },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Fift 800 USD',
  },
  {
    title: 'Archive',
    price: '128 USD',
    monthlyPrice: '32.32 TON monthly',
    features: [
      '20 RPS',
      'Archive Servers',
    ],
    packages: [
      { label: '1 month' },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Archive 128 USD',
  },
];

function LightServerPlans() {
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
      <DedicatedPlan />
    </div>
  );
}

export default LightServerPlans;