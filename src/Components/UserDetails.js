import React,{useContext} from "react";
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

const UserDetails = () => {
  const classes = useStyles();

  const context = useContext(FormDataContext);
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
                USER DETAILS
              </h2>

              <TextField
                id="standard-basic"
                label="First Name"
                style={{ display: "block", margin: "auto", marginTop: "50px" }}
                defaultValue={context.firstName}
              onChange={(e)=>{
                context.setFirstName(e.target.value)
              }}
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                style={{ display: "block", margin: "auto" }}
                defaultValue={context.lastName}
                onChange={(e)=>{
                  context.setLastName(e.target.value)
                }}
              />
              <TextField
                id="standard-basic"
                label="Email"
                style={{ display: "block", margin: "auto" }}
                defaultValue={context.email}
                onChange={(e)=>{
                  context.setEmail(e.target.value)
                }}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ display: "block", margin: "auto", marginTop: "50px" }}
                onClick={context.nextStep}
              >
                CONTINUE
              </Button>
            </form>
          </Typography>
        </Container>
      </React.Fragment>
      );
    </div>
  );
};

export default UserDetails;
