import SidebarTest from "../../components/sidebar/sidebarTest";
import Header from '../../layout/Header'
import "../farmer/FarmerAddProduct.css"
function FarmerAddProduct() {
  function back() {
    window.location = '/farmerPork'
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <SidebarTest />
        <div className="container">
          <h1 className="product">Add Information</h1>
          <form action="">
            <div className="input-grid">
              <div  >
                <label className="labelAdd" htmlFor="lotID">Lot ID</label>
                <input
                  className="inputPork"
                  type="text" id="lotID" name="lotID"
                  pattern="[0-9]{10}"
                  placeholder="0123456789"
                />
                <br />
                <br />
              </div>
              <div>
                <label  className="labelAdd" htmlFor="weight">Weight</label>
                <input className="inputPork" type="number" id="weight" name="weight" />
                <br />
                <br />
              </div>
              <div>
                <label  className="labelAdd" htmlFor="quantity">Quantity</label>
                <input className="inputPork" type="number" id="quantity" name="quantity" />
                <br />
                <br />
              </div>
              <div>
                <label  className="labelAdd" htmlFor="location">Location</label>
                <input className="inputPork" type="text" id="location" name="location" />
                <br />
                <br />
              </div>
              <div>
                <label  className="labelAdd" htmlFor="startDate">Start Date</label>
                <input className="inputPork" type="date" id="startDate" name="startDate" />
                <br />
                <br />
              </div>
              <div>
                <label  className="labelAdd" htmlFor="origin">Origin </label>
                <input className="inputPork" type="text" id="origin" name="origin" />
                <br />
                <br />
              </div>
              <div>
                <label  className="labelAdd" htmlFor="endDate">End Date</label>
                <input className="inputPork" type="date" id="endDate" name="endDate" />
                <br />
                <br />
              </div>
              
            </div>

            <div>
              <input className="inputButton" type="button" value="Add" onClick={back} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FarmerAddProduct;
