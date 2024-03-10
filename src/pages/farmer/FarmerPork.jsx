
import SidebarTest from '../../components/sidebar/sidebarTest'
import Header from '../../layout/Header'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../farmer/FarmerPork.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
 
function FarmerPork() {
  function createData(lotID, weight, quantity, origin, startDate, endDate, location) {
    return { lotID, weight, quantity, origin, startDate, endDate, location };
  }
  const rows = [
    createData(
      1,

      '12',
      '2',
      'farmChonti',
      '16 Mar 2019',
      '17 Mar 2019',
      'BKK'
    ),
    createData(
      2,
      '12',
      '2',
      'farmChonti',
      '16 Mar 2019',
      '17 Mar 2019',
      'BKK'
    ),
    createData(
      3,
      '12',
      '2',
      'farmChonti',
      '16 Mar 2019',
      '17 Mar 2019',
      'BKK'
    ),
    createData(
      4,
      '12',
      '2',
      'farmChonti',
      '16 Mar 2019',
      '17 Mar 2019',
      'BKK'
    ),
  ];

  const [addPork, setaddPork] = useState(true);

  function Changebutton() {
    setaddPork(!addPork)
  }

  return (
    
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
         <Header />
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
          <SidebarTest />
          <div >
          <Link to="/farmerAddProduct">
              <button  className='addPork' onClick={Changebutton}>AddProduct</button>
          </Link>
          <h1 className='h1'>Pork Information</h1>
          <Table size="small"   style={{ width: '80%', marginLeft:'50px' }}>
            <TableHead >
              <TableRow>
                <TableCell style={{color:'white',textAlign:'center',padding:'10px'}} >LotID</TableCell>
                <TableCell style={{color:'white',textAlign:'center'}}>Weight</TableCell>
                <TableCell style={{color:'white',textAlign:'center'}} >Quantity</TableCell>
                <TableCell style={{color:'white',textAlign:'center'}}>Origin</TableCell>
                <TableCell style={{color:'white',textAlign:'center'}}>StartDate</TableCell>
                <TableCell style={{color:'white',textAlign:'center'}}>EndDate</TableCell>
                <TableCell style={{color:'white',textAlign:'center'}}>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.lotID}>
                  <TableCell style={{textAlign:'center',padding:'10px'}}>{row.lotID}</TableCell>
                  <TableCell style={{textAlign:'center'}}>{row.weight}</TableCell>
                  <TableCell style={{textAlign:'center'}}>{row.quantity}</TableCell>
                  <TableCell style={{textAlign:'center'}}>{row.origin}</TableCell>
                  <TableCell style={{textAlign:'center'}}>{row.startDate}</TableCell>
                  <TableCell style={{textAlign:'center'}}>{row.endDate}</TableCell>
                  <TableCell style={{textAlign:'center'}}>{row.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
            
          </div>
          
        </div>
      </div>
   

  )
}

export default FarmerPork