import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../layout/Header";
import "../farmer/FarmerAddProduct.css"
function FarmerAddProduct() {
  function back() {
    window.location = '/farmerPork'
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Header />
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <Sidebar />
        <div className="container" style={{ flex: 1 }}>
          <h1>Add Information</h1>
          <form className="content" action="">
            <div >
              <label className=".col-25" htmlFor="lotID">Lot ID</label>
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
              <label className=".col-25" htmlFor="weight">Weight</label>
              <input className="inputPork" type="number" id="weight" name="weight" />
              <br />
              <br />
            </div>
            <div>
              <label className=".col-25" htmlFor="quantity">Quantity</label>
              <input className="inputPork" type="number" id="quantity" name="quantity" />
              <br />
              <br />
            </div>
            <div>
              <label className=".col-25" htmlFor="origin">Origin Source</label>
              <input className="inputPork" type="text" id="origin" name="origin" />
              <br />
              <br />
            </div>
            <div>
              <label className=".col-25" htmlFor="location">Location</label>
              <input className="inputPork" type="text" id="location" name="location" />
              <br />
              <br />
            </div>
            <div>
              <label className=".col-25" htmlFor="startDate">Start Date</label>
              <input className="inputPork" type="date" id="startDate" name="startDate" />
              <br />
              <br />
            </div>
            <div>
              <label className=".col-25" htmlFor="endDate">End Date</label>
              <input className="inputPork" type="date" id="endDate" name="endDate" />
              <br />
              <br />
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
