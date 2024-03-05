import Sidebar from '../../components/sidebar/sidebar'
import Header from '../../layout/Header'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "../farmer/FarmerPork.css"

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
      <div className='role'>Farmer</div>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <h1>Pork Information</h1>
          <Table size="small" border="1px"  style={{ width: '91%', margin: '0 auto' }}>
            <TableHead >
              <TableRow>
                <TableCell style={{color:'white',textAlign:'center'}}>LotID</TableCell>
                <TableCell style={{color:'white',textAlign:'center'}}>Action</TableCell>
                <TableCell style={{color:'white',textAlign:'center'}}>Location</TableCell>
                <TableCell style={{color:'white',textAlign:'center'}}>LogDateTime</TableCell>
                <TableCell style={{color:'white',textAlign:'center'}}>EventDateTime</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.lotID}>
                  <TableCell style={{textAlign:'center'}}>{row.lotID}</TableCell>
                  <TableCell style={{textAlign:'center'}}>{row.action}</TableCell>
                  <TableCell style={{textAlign:'center'}}>{row.location}</TableCell>
                  <TableCell style={{textAlign:'center'}}>{row.logDateTime}</TableCell>
                  <TableCell style={{textAlign:'center'}}>{row.eventDateTime}</TableCell>
                  
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