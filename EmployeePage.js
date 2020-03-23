import React from 'react';
import './EmployeePage.css';
import pro from '/reactapp/pro_goals/src/images/pro.png';
import {NavLink} from 'react-router-dom';


class EmployeePage extends React.Component{

    render(){
        return(
            <div className="employeehome">
                <div className="EmpHeader">
                    <div className="left">
                    <h1><img id ="logo"src={pro}height="55px"width="55px"alt="*"></img>PRO_GOALS</h1>
                    </div>
                    <div className="right">
                    <NavLink to='/'><button id="Emplogout">LOG OUT</button></NavLink>
                    </div>
                </div>


                <div className="add_goals">
                    <div className="add_week_goal">
                        This week objective...
                    </div>
                    <div className="objectiveform">

                        <div className="startdate1">
                            <lable>Start date:</lable><br/>
                            <input type="date"placeholder="Set start date" required></input>
                        </div>

                        
                        <div className="enddate1">
                            <lable>End date:</lable><br/>
                            <input type="date"placeholder="Set start date" required></input>
                        </div>


                        <div className="textarea1">
                            <lable>Objective detials:</lable><br/>
                            <textarea></textarea><br/><br/>
                            <button id="btn">
                                Add
                            </button>
                        </div>

                    </div>
                </div>
                
            </div>
        );
    }
}
export default EmployeePage;