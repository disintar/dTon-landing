import { CheckCircleFilled } from '@ant-design/icons'
import { Button, Card, Space } from 'antd'
import '../PlanCard/PlanCard.css';

export default function DedicatedPlan() {
  return (
    <Card className="plan-card" style={{ height: 334 }}>
      <div style={{ fontSize: 14, marginBottom: 12 }}>
        If you need a dedicated aun lite server for your project,<br />you can contact us
      </div>
      <Space direction="vertical" size={10}>
        <div className="plan-feature">
          <CheckCircleFilled className="plan-check-icon" />Custom</div>
        <div className="plan-feature">
          <CheckCircleFilled className="plan-check-icon" />Dedicated</div>
        <div className="plan-feature">
          <CheckCircleFilled className="plan-check-icon" />Solution</div>
      </Space>
      <Button 
        type="primary"
        block 
        onClick={() =>
          window.open('https://t.me/tvorogme', '_blank')
        }
        style={{ 
          backgroundColor: '#40C3FF', 
          borderColor: '#FFFFFF', 
          borderRadius: 10, 
          marginTop: 115
        }}
      >
        Contact
      </Button>
    </Card>
  )
}
