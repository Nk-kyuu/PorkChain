import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Header from '../../layout/Header'
import '../farmer/FarmerPork.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
 
function FarmerPork() {

  const [addPork, setaddPork] = useState(true);

  function Changebutton() {
    setaddPork(!addPork)
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div className='role'>Farmer</div>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
          <Sidebar />
          <div >
          <h1>Pork Transaction</h1>
            <table >
              <tr>
                <th>lotid</th>
                <th>action</th>
                <th>location</th>
                <th>log DateTime</th>
                <th>event DateTime</th>
                <th>startDate</th>
              </tr>
              <tr>
                <td>01</td>
                <td>delivery</td>
                <td>farmChonti</td>
                <td>02-02-67</td>
                <td>12-02-67</td>
                <td>20-02-67</td>
              </tr>
              <tr>
                <td>02</td>
                <td>delivery</td>
                <td>farmChonti</td>
                <td>02-02-67</td>
                <td>12-02-67</td>
                <td>20-02-67</td>
              </tr>
            </table>
            <Link to="/farmerAddProduct">
              <button className='addPork' onClick={Changebutton}>AddProduct</button>
            </Link>
          </div>
          
        </div>
      </div>
    </>

  )
}

export default FarmerPork