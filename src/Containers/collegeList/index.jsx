import {useState} from 'react';
import './collegelist.css';
import { TextField} from '@material-ui/core';
import * as services from '../../services';
import CollegeTable from '../../Components/collegeTable'

function CollegeList(props) {
    const [collegeList, setCollegeList] = useState([])
    const [searchText, setSearch] = useState("")

    const callSearchCollege = () => {
        
        if(searchText) {
            services.getCollegesAPI(searchText, "")
                .then(response => {
                    setCollegeList(response.data)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }

    return (
        <div style={{padding:"30px 50px 0 50px"}}>
            <div className="clg-header">College List</div>

            <div style={{marginBottom: "40px"}}>
                <TextField variant="outlined" label="Search College" 
                    onChange={(e)=>{setSearch(e.target.value)}} 
                    style={{width: "500px"}}
                    onKeyDown={(e)=> {
                        if(e.key === "Enter") {
                            callSearchCollege()
                        }                        
                    }}
                />
            </div>

            {collegeList.length ? <CollegeTable collegeList={collegeList} />
                : <h2>There is no colleges yet...!!!</h2>}

            
        </div>
    )
}

export default CollegeList;