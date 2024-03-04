import Sidebar from '../../components/sidebar/sidebar'
import Header from '../../layout/Header'
import "../farmer/FarmerPork.css"

function FarmerDashboard() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div className='role'>Farmer</div>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <h1>Pork Information</h1>
          <table >
              <tr>
                <th>lotID</th>
                <th>weight</th>
                <th>quantity</th>
                <th>origin</th>
                <th>location</th>
                <th>startDate</th>
                <th>endDate</th>
              </tr>
              <tr>
                <td>01</td>
                <td>120 g</td>
                <td>2 pack</td>
                <td>farmChonti</td>
                <td>farmChonti</td>
                <td>12-02-67</td>
                <td>20-02-67</td>
              </tr>
              <tr>
                <td>01</td>
                <td>120 g</td>
                <td>2 pack</td>
                <td>farmChonti</td>
                <td>farmChonti</td>
                <td>12-02-67</td>
                <td>20-02-67</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>

  )
}

export default FarmerDashboard