import React from 'react';
import {  Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../sidebar/sidebar.css'
function sidebar() {
  const navigate = useNavigate()
  return (
    <div className='sidebar'>
      <Menu
      onClick={({key})=>{
        navigate(key);
      }}
        items={[
          { label: "Dashboard",key:"/farmerDashboard" },
          { label: "Pork",key:"/farmerPork" }
        ]}>
     </Menu>
        
    </div>
  );
}
export default sidebar