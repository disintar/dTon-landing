import PropTypes from 'prop-types';
import { Card, Button, Space } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import './PlanCard.css';

export default function PlanCard({
  title,
  price,
  monthlyPrice,
  features = [],
  packages = [],
  onPackageSelect,
  mainActionLabel,
  onMainAction,
}) {
  return (
    <Card className="plan-card">
      <div className="plan-title">{title}</div>
      <div className="plan-price">{price}</div>
      <div className="plan-subprice">{monthlyPrice}</div>

      <Space direction="vertical" size={10} style={{ marginTop: 20, flexGrow: 1 }}>
        {features.map((feature, index) => (
          <div key={index} className="plan-feature">
            <CheckCircleFilled className="plan-check-icon" />
            {feature}
          </div>
        ))}
      </Space>

      {!!packages.length && (
        <div className="plan-packages">
          <div className="plan-package-row">
            {packages.slice(0, 2).map((pkg, index) => (
              <Button
                key={index}
                onClick={() => onPackageSelect && onPackageSelect(pkg)}
                className="plan-package-btn half"
                style={{
                  backgroundColor: pkg.isActive ? '#CACACA' : '#8F8F8F33',
                  color: pkg.isActive ? 'white' : '#1E1E1E'
                }}
                type="default"
              >
                {pkg.label}
              </Button>
            ))}
          </div>
          <Button
            onClick={() => onPackageSelect && onPackageSelect(packages[2])}
            className="plan-package-btn full"
            type="default"
          >
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <span style={{
                marginRight: 5,
                fontSize: 12,
                fontWeight: 400
              }}>{packages[2].label}</span>
              {packages[2].discount && (
                <span style={{ color: '#40C3FF', fontSize: 12, fontWeight: 400 }}>{packages[2].discount}</span>
              )}
            </div>
          </Button>
        </div>
      )}

      <Button
        type="primary"
        className="plan-main-action"
        block
        onClick={onMainAction}
      >
        {mainActionLabel}
      </Button>
    </Card>
  );
}

PlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  monthlyPrice: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      discount: PropTypes.string,
    })
  ),
  onPackageSelect: PropTypes.func,
  mainActionLabel: PropTypes.string.isRequired,
  onMainAction: PropTypes.func.isRequired,
};
