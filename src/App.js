import React from "react";
// import BodyBarComponents from "./Components/BodyBarComponents";
// import FooterBarComponents from "./Components/FooterBarComponents";
import FormComponent from "./Components/FormComponent";
// import HeaderBarComponents from "./Components/HeaderBarComponents";

function App() {
  const isLogins = true;
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-item-center">
        <div className="col-12 col-lg-4">
          <FormComponent isLogin="isLogin" />
        </div>
      </div>
    </div>
  );
}

export default App;
