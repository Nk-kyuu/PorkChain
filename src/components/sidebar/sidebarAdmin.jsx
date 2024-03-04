import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../sidebar/sidebar.css';

function SidebarAdmin() {
    const navigate = useNavigate();

    return (
        <div className='sidebar'>
            <Menu
                onClick={({ key }) => {
                    navigate(key);
                }}
            >
                <Menu.Item key="/AdminDashboard">Dashboard</Menu.Item>
                <Menu.Item key="/adminAddUser">Pork</Menu.Item>
            </Menu>
        </div>
    );
}

export default SidebarAdmin;
