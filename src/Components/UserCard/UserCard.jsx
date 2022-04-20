import React from "react";
import { Card, CardContent, Typography,Button} from "@mui/material";
import "./UserCard.css";
import { useNavigate } from "react-router-dom";

const UserCard = ({name, birthday,college,gender,country, address, short_bio, long_bio, hobbies}) => { 
  
  let navigate = useNavigate();
  const handleOnClear = () =>{

    window.localStorage.setItem("data",JSON.stringify([]));
    navigate('/');
  }

  return (
<div>

<Button 
            variant="contained" 
            color="error" 
            sx={{height:"3rem",width:"20rem"}}
            onClick={()=>{
              handleOnClear();

            }}
          >
              Clear User List
          </Button> 
    <Card
      className="user-card"
      style={{
        backgroundColor: "#",
        
      }}
    >
      <CardContent className="card-content">
        <div className="name content">
          <Typography className="content-key">Name:</Typography>
          <Typography>{name}</Typography>
        </div>
        <div className="birth-date content">
          <Typography className="content-key"> Birthday: </Typography>
          <Typography>{birthday}</Typography>
        </div>
        <div className="gender content">
          <Typography className="content-key">Gender:</Typography>
          <Typography>{gender}</Typography>
        </div>
        <div className="name content">
          <Typography className="content-key">country:</Typography>
          <Typography>{country}</Typography>
        </div>
        <div className="address content">
          <Typography className="content-key">Address:</Typography>
          <Typography>{address}</Typography>
        </div>
        <div className="short-bio content">
          <Typography className="content-key">Short Intro :</Typography>
          <Typography>
            {short_bio}
          </Typography>
        </div>
        <div className="long-bio content">
          <Typography className="content-key">About :</Typography>
          <Typography>
            {long_bio}
          </Typography>
        </div>
        <div className="college content">
          <Typography className="content-key">College :</Typography>
          <Typography>
            {college}
          </Typography>
        </div>
        <div className="long-bio content">
          <Typography className="content-key"> Hobbies:</Typography>
          <Typography>
            {hobbies}
          </Typography>
        </div>
      </CardContent>
    
    </Card>
    </div>
  );
};

export default UserCard;
