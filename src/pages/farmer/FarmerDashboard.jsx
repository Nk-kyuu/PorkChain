
import Header from '../../layout/Header'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "../farmer/FarmerPork.css"

import SidebarTest from '../../components/sidebar/sidebarTest';


function FarmerDashboard() {
  function createData(lotID, action, location, logDateTime, eventDateTime) {
    return { lotID, action, location, logDateTime, eventDateTime };
  }
  const rows = [
    createData(
      1,
      'add',
      'farm',
      '16 Mar 2019: 10:20',
      '17 Mar 2019: 10:20',
    ),
    createData(
      2,
      'add',
      'farm',
      '20 Mar 2019: 10:20',
      '21 Mar 2019: 10:20',
    ),
    createData(
      3,
      'add',
      'farm',
      '26 Mar 2019: 10:20',
      '27 Mar 2019: 10:20',
    ),
    createData(
      4,
      'add',
      'farm',
      '30 Mar 2019: 10:20',
      '31 Mar 2019: 10:20',
    ),
  ];
  return (

    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <SidebarTest />
        <div >
        <h1 className='h1'>Transaction</h1>
          <Table  size="small"  style={{ width: '80%', margin: '0 auto', flexGrow: 1,marginLeft:'50px'}}>
            <TableHead >
              <TableRow>
                <TableCell style={{ color: 'white', textAlign: 'center',padding:'10px' }}>LotID</TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center' }}>Action</TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center' }}>Location</TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center' }}>LogDateTime</TableCell>
                <TableCell style={{ color: 'white', textAlign: 'center' }}>EventDateTime</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.lotID}>
                  <TableCell style={{ textAlign: 'center',padding:'10px' }}>{row.lotID}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{row.action}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{row.location}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{row.logDateTime}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{row.eventDateTime}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>


  )
}

export default FarmerDashboard