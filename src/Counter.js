import {Switch, Badge} from 'antd';

export default function Counter({count, setShowCount, showCount}) {
  return (
    <div className="counter-container">
      <Switch checked={showCount} onChange={() => setShowCount(!showCount)} />
      <span>Total tasks:</span>
      <Badge count={showCount ? count : null} />
    </div>
  );
}
