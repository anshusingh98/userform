    import { React, useEffect, useState } from "react";
    import { Typography } from "@mui/material";
    import { TextField, Button,createFilterOptions  } from "@mui/material";
    import { useNavigate } from "react-router-dom";
    import Autocomplete from '@mui/material/Autocomplete';
    import "../FormSection/FormPageSection.css";

    const FormPageSection = () => {
        let navigate = useNavigate();
        // const userData = [];
    // const [userDataArray, setUserDataArray] = useState([]);
    const[country,setCountry]= useState("")
    const [myOptionsc, setMyOptionsc] = useState([])
    const [myOptions, setMyOptions] = useState([])
    const [userFormData, setUserFormData] = useState({
        name: "",
        birthday: "",
        gender: "",
        address: "",
        country: "",
        college: "",
        hobbies: "",
        short_Bio: "",
        long_bio: "",
    });
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: option => option,
      });



      
    const handleChange = (e) => {
        const {name, value} = e.target; 
        setUserFormData(userFormData =>({
            ...userFormData,
            [name]: value
        }))
    }; 


    



   

    const getDataFromAPI = (e) => {
        console.log("Options Fetched from API")
        let optionArr = []
        fetch('https://restcountries.com/v3.1/all').then((response) => {
        return response.json()
        
        }).then((res) => {
       for (var i = 0; i < res.length; i++) {
        optionArr.push(res[i].name.common)
       }
       setMyOptions(optionArr)
       console.log(country)

       const userInput = e.target.value;
       userFormData.country = userInput;


       
        })
    }
   /* const callSearchCollegel = () => {
        
        if(searchText) {
            services.getCollegesAPIL(searchText, "")
                .then(response => {
        return response.json()

                }).then((response) => {
                    for (var i = 0; i < response.length; i++) {
                       // if(res[i].country===userFormData.country)
                       // {
                      myOptionsc.push(response[i].name)}
                   // }
                   setSearch(searchText)
                    setMyOptionsc(myOptionsc)
                    console.log(myOptionsc)
                     })
                .catch(e => {
                    console.log(e)
                })
        }
        
    }*/
    useEffect(()=>{
        console.log('hello')
    },[])


    const getDataFromAPIs = (e) => {
        console.log("Options Fetched from API")
        fetch('http://universities.hipolabs.com/search?name=').then((response) => {
        return response.json()
        }).then((res) => {
       for (var i = 0; i < res.length; i++) {
         myOptionsc.push(res[i].name)
        }
       setMyOptionsc(myOptionsc)
       const userInputs = e.target.value;
       userFormData.college = userInputs;
       console.log(myOptionsc)
        })
    }


    const onSubmit = () =>{
        var userDataArray = JSON.parse(localStorage.getItem('data') || "[]"); 

        userDataArray.push(userFormData);
        localStorage.setItem('data', JSON.stringify(userDataArray)); 
        
        navigate('/userlist')

    }

    return (
        <div className="form-section">
        <Typography variant="h3">New User</Typography>
        <div className="name form-content">
            <Typography className="form-key">Name: </Typography>
            <TextField
            id="outlined-search"
            label="Name"
            type="text"
            name="name"
            value={userFormData.name}
            onChange={handleChange}
            />
        </div>
        <div className="birth-date form-content">
            <Typography className="form-key">Birthday: </Typography>
            <TextField
            id="outlined-search"
            type="date"
            name="birthday"
            value={userFormData.birthday}
            onChange={handleChange}
            />
        </div>
        <div className="gender form-content">
            <Typography className="form-key">Gender:</Typography>
            <TextField
            id="outlined-search"
            label="Gender"
            type="text"
            name="gender"
            value={userFormData.gender}
            onChange={handleChange}
            />
        </div>
        <div className="address form-content">
            <Typography className="form-key">Address: </Typography>
            <TextField
            id="outlined-search"
            label="address"
            type="text"
            name="address"
            value={userFormData.address}
            onChange={handleChange}
            />
        </div>

        <div className="country form-content">
            <Typography className="form-key"> Country: </Typography>
          <Autocomplete
                style={{ width: 500 }}
                freeSolo
                autoComplete
                autoHighlight
                filterOptions={filterOptions}
                options={myOptions}
                renderInput={(params) => (
                <TextField {...params}
                    onChange={(e)=>{
                        setCountry(e.target.value)
                        getDataFromAPI()
                    }}
                    variant="outlined"
                    label="Country"
                    value={userFormData.Country}
                /> 
                )}
            />
        
        </div>
        <div className="college form-content">
            <Typography className="form-key">College:</Typography>
            <Autocomplete
                style={{ width: 500 }}
                freeSolo
                autoComplete
                autoHighlight
                filterOptions={filterOptions}
                options={myOptionsc}
                renderInput={(params) => (
                <TextField {...params}
                    onChange={getDataFromAPIs}
                    variant="outlined"
                    label="college"
                    value={userFormData.college}
                /> 
                )}
            />
        </div>
        <div className="hobbies form-content">
            <Typography className="form-key">Hobbies:</Typography>
            <TextField
            id="outlined-search"
            label="Hobbies"
            type="text"
            name="hobbies"
            value={userFormData.hobbies}
            onChange={handleChange}
            />
        </div> 
        <div className="short-bio form-content">
            <Typography className="form-key">Short Bio:</Typography>
            <TextField
            id="outlined-search"
            label="Short bio"
            type="text"
            name="short_bio"
            value={userFormData.short_bio}
            onChange={handleChange}
            />
        </div>

        
        <div className="long-bio form-content">
            <Typography className="form-key">Long Bio:</Typography>
            <TextField
            id="outlined-search"
            label="Bio"
            type="text"
            name="long_bio"
            value={userFormData.long_bio}
            onChange={handleChange}
            />
        </div>
        <Button
            style={{
            marginTop: "20px",
            }}
            variant="contained" 
            onClick={()=>{onSubmit()}}
        >
            Submit
        </Button>
        </div>
    );
    };

    export default FormPageSection;
