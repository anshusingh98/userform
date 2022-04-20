import {Dialog} from '@material-ui/core'
import {useState} from 'react';
import React from "react";

function CollegeTable(props) {
    const [dialogOpen, setOpen] = useState(false)
    const [college, setCollege] = useState({})

    return (
        <div>
            <table>
                
                {props.collegeList.map((ele, index)=>{
                    return (
                        <tr onClick={() => { 
                                setCollege(ele); 
                                setOpen(true)
                            }}
                            className="row-click"
                        >
                            <p>{index+1}</p>
                            <p>{ele.name}</p>
                            <p>{ele.country}</p>
                        </tr>
                    )  
                })}
                
            </table>

            <Dialog open={dialogOpen} onClose={()=>{setOpen(false)}}>
                <div style={{padding:"80px", width: "400px"}}>
                    <div><h2>College Details</h2></div>
                    <div><h3>{college.name}</h3></div>
                    <div><h3>{college.country}</h3></div>
                </div>
            </Dialog>



           
        </div>
    )
}

export default CollegeTable;