import PropTypes from 'prop-types';
import { Segmented } from 'antd';
import './checkbox.css';

export default function TogglePricingSegment({
  checkBoxValue,
  setCheckBoxValue
}) {
  return (
    <Segmented
      options={[
        { label: 'LiteClient API', value: 'liteclient' },
        { label: 'GraphQL', value: 'graphql' },
      ]}
      value={checkBoxValue}
      onChange={setCheckBoxValue}
      className="custom-segmented"
    />
  );
}

TogglePricingSegment.propTypes = {
  checkBoxValue: PropTypes.string.isRequired,
  setCheckBoxValue: PropTypes.func.isRequired,
};
