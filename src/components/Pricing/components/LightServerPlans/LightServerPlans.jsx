import DedicatedPlan from "../DedicatedPlan/DedicatedPlan";
import PlanCard from "../PlanCard/PlanCard";

const plans = [
  {
    title: 'Miner',
    price: '30 USD',
    monthlyPrice: '4 TON monthly',
    features: ['10 RPS', '2 Servers'],
    packages: [
      { label: '1 month', isActive: true },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Miner 30 USD',
  },
  {
    title: 'Merkle',
    price: '145 USD',
    monthlyPrice: '20 TON monthly',
    features: ['60 RPS', '2 Servers'],
    packages: [
      { label: '1 month' },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Merkle 145 USD',
  },
  {
    title: 'Fift',
    price: '710 USD',
    monthlyPrice: '4 TON monthly',
    features: ['400 RPS', '2 Servers'],
    packages: [
      { label: '1 month' },
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
    ],
    packages: [
      { label: '1 month' },
      { label: '6 months' },
      { label: '12 months', discount: '-5% discount' },
    ],
    mainActionLabel: 'Choose Archive 342 USD',
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