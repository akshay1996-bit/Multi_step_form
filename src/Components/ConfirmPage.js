import React,{useContext} from "react";
import Button from "@material-ui/core/Button";
import FormDataContext from '../context/FormContext';

const ConfirmPage = () => {
  const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
      nextStep,
      prevStep

  } = useContext(FormDataContext)
  return (
    <div>
      <div style={{textAlign: "center",lineHeight: "5px",marginTop: "50px"}}>
          <h3 >First Name</h3>
          <p > {firstName} </p><br/>

          <h3>Last Name</h3>
          <p> {lastName} </p><br/>

          <h3>Email</h3>
          <p> {email} </p><br/>

          <h3>Occupation</h3>
          <p> {occupation} </p><br/>

          <h3>City</h3>
          <p> {city} </p><br/>

          <h3>Bio</h3>
          <p> {bio} </p><br/>

          <Button
                variant="contained"
                color="primary"
                style={{ display: "inline-block",  marginTop: "50px",padding: "10px",left: "30px"}}
                onClick={nextStep}
              >
               CONFIRM & CONTINUE
              </Button>

              <Button
                variant="contained"
                color="primary"
                style={{ display: "inline-block", marginTop: "50px",padding: "10px",left: "60px" }}
                onClick={prevStep}
              >
                BACK
              </Button>
      </div>
    </div>
  );
};

export default ConfirmPage;
