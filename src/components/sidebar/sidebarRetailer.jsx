import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../sidebar/sidebar.css';

function sidebarRetailer() {
    const navigate = useNavigate();

    return (
      <div className='sidebar'>
        <Menu 
          onClick={({ key }) => {
            navigate(key);
          }}
        >
          <Menu.Item key="/retailerDashboard">Dashboard</Menu.Item>
          <Menu.Item key="/pork">pork</Menu.Item>
        </Menu>
      </div>
    );
}

export default sidebarRetailer