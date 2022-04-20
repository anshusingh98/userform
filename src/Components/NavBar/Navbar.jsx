import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  let navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        // elevation={"0px"}
        style={{ backgroundColor: "#d38fac" }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#035397" }}
            
          >
            
          </Typography> 

          <Button
            variant="text"
            style={{
              backgroundColor: "#d38fac",
              marginRight: "10px",
              color: "#035397",
            }}
            onClick={()=>{
              navigate('/userlist')
            }}

          >
            Home
          </Button>
          <Button
            variant="text"
            style={{
              backgroundColor: "#d38fac",
              marginRight: "10px",
              color: "#035397", 
            
            }}
            onClick={()=>{ 
              
              navigate('/userform')
            }}
          >
            Add New User
          </Button>
          <Button
            variant="text"
            style={{
              backgroundColor: "#d38fac",
              marginRight: "10px",
              color: "#035397",
            }}
            onClick={()=>{
              window.localStorage.setItem("data",JSON.stringify([]));
            props.userDataArray=[];
              localStorage.clear(); 
              navigate('/userlist')
            }}
          >
            Clear List
          </Button> 
          
          <Button
            variant="text"
            style={{
              backgroundColor: "#d38fac",
              marginRight: "10px",
              color: "#035397",
            }}
            onClick={()=>{
              localStorage.clear(); 
              navigate('/colleges')
            }}
          >
            Colleges
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
