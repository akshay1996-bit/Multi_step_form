import React, {useContext} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormDataContext from '../context/FormContext';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ProDetails = () => {

  const context = useContext(FormDataContext)
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{ height: "60vh", marginTop: "20px", padding: "10px" }}
          >
            <form className={classes.root} noValidate autoComplete="off">
              <h2
                style={{
                  display: "block",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                PERSONAL DETAILS
              </h2>

              <TextField
                id="standard-basic"
                label="Occupation"
                style={{ display: "block", margin: "auto", marginTop: "50px" }}
                defaultValue={context.occupation}
                onChange={(e)=>{
                  context.setOccupation(e.target.value)
                }}
              />
              <TextField
                id="standard-basic"
                label="City"
                style={{ display: "block", margin: "auto" }}
                defaultValue={context.city}
                onChange={(e)=>{
                  context.setCity(e.target.value)
                }}
              />
              <TextField
                id="standard-basic"
                label="Bio"
                style={{ display: "block", margin: "auto" }}
                defaultValue={context.bio}
                onChange={(e)=>{
                  context.setBio(e.target.value)
                }}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ display: "inline-block", marginRight: "10px", marginTop: "50px",width: "120px",left: "250px"}}
              onClick={context.nextStep}
              >
                CONTINUE
              </Button>

              <Button
                variant="contained"
                color="primary"
                style={{ display: "inline-block", marginRight: "10px", marginTop: "50px",width: "100px" }}
                onClick={context.prevStep}
              >
                BACK
              </Button>
            </form>
          </Typography>
        </Container>
      </React.Fragment>
      );
    </div>
  );
};

export default ProDetails;
