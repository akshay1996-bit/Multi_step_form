import React,{useContext} from 'react';
import Button from "@material-ui/core/Button";
import FormDataContext from '../context/FormContext'

const SuccessPage = () => {
    const {resetForm} = useContext(FormDataContext)
    return ( <div>
        <div style={{textAlign: "center",marginTop: "50px"}}>
            <h2>Thank You For Your Submission</h2>
            <p>You will recieve an email from us shortyly</p>
            <Button
                variant="contained"
                color="primary"
                style={{ display: "inline-block",  marginTop: "50px",padding: "10px",left: "10px"}}
                onClick={resetForm}
              >
               MAKE ANOTHER SUBMISSION
              </Button>

        </div>
    </div> );
}
 
export default SuccessPage;