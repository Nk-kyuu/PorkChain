import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../sidebar/sidebar.css';


function sidebarSlaughterhouse() {
    const navigate = useNavigate();

    return (
      <div className='sidebar'>
        <Menu 
          onClick={({ key }) => {
            navigate(key);
          }}
        >
          <Menu.Item key="/slaughterDashboard">Dashboard</Menu.Item>
          <Menu.Item key="/slaughterhousePork">Pork</Menu.Item>
        </Menu>
      </div>
    );
}

export default sidebarSlaughterhouse