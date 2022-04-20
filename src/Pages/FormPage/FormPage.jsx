import React from "react";
import NavBar from "../../Components/NavBar/Navbar";
import FormPageSection from "../../Containers/FormSection/FormPageSection";
import '../FormPage/FormPage.css';

const FormPage = () => {
    return(
       <div className="form-page">
           <NavBar/>
           <div className="form">
           <FormPageSection/>
           </div>
           
       </div>

    )   
}

export default FormPage;