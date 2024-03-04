import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../sidebar/sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className='sidebar'>
      <Menu
        onClick={({ key }) => {
          navigate(key);
        }}
      >
        <Menu.Item key="/farmerDashboard">Dashboard</Menu.Item>
        <Menu.Item key="/farmerPork">Pork</Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
