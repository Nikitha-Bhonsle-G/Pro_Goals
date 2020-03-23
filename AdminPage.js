import React from 'react';
import './AdminPage.css';
import person from '/reactapp/pro_goals/src/images/person.png';
import pro from '/reactapp/pro_goals/src/images/pro.png';
import {NavLink} from 'react-router-dom';

class AdminPage extends React.Component{

//   state={
//             EmployeeName:[],
//             EmployeeEmail:[],
//             EmployeePassword:[]
//         }
  

    PopupForm()
    {
        document.getElementById('bg-modal').style.display='flex';
    }

    closePopUp()
    {
        document.getElementById('bg-modal').style.display='none';
    }

    // AddEmployee=(evt)=>{
        
    //     this.setState({
    //         EmployeeName:evt.target.value
    //     });
    //    console.log(this.state.EmployeeName)
    // }

    render(){
        return(

            <div className="Admin">
                <div className="AdminHeader">
                    <div className="left">
                    <h1><img id ="logo"src={pro}height="55px"width="55px"alt="*"></img>PRO_GOALS</h1>
                    </div>
                    <div className="right">
                    <button id="AddButton" onClick={this.PopupForm}>Add Employee</button>
                    <NavLink to='/'><button id="adminlogout">LOG OUT</button></NavLink>
                    </div>
                </div>

                <div className="Adminbody">

                        <div className="cart">
                            <div className="empdetails">
                            <div id="empname">📛Nikitha Bhonsle G</div>
                            <div id="email">📧nikithabhonsleg@gmail.com</div>
                            <div id="empid">🆔1Aicumen14</div>
                            <div id="password">🔑nikitha@1Aic</div>
                            </div>
                            <div className="empokr">
                            <div id="empname">OKR</div>
                                <div id="email"><p>i will complete OKR application by the end of this week</p></div>
                                <div id="password">Duration: 23-03-2020  TO :28-03-2020</div>
                            </div>
                        </div>


                        <div className="cart">
                            <div className="empdetails">
                            <div id="empname">📛Sunitha T</div>
                            <div id="email">📧sunithaT@gmail.com</div>
                            <div id="empid">🆔1Aicumen15</div>
                            <div id="password">🔑sunitha@1Aic</div>
                            </div>
                            <div className="empokr">
                            <div id="empname">OKR</div>
                                <div id="email"><p>i will complete OKR application by the end of this week</p></div>
                                <div id="password">Duration: 23-03-2020  TO :28-03-2020</div>
                            </div>
                        </div>

                        <div className="cart">
                            <div className="empdetails">
                            <div id="empname">📛Rakshitha L</div>
                            <div id="email">📧rakshitha@gmail.com</div>
                            <div id="empid">🆔1Aicumen16</div>
                            <div id="password">🔑rakshitha@1Aic</div>
                            </div>
                            <div className="empokr">
                            <div id="empname">OKR</div>
                                <div id="email"><p>i will complete OKR application by the end of this week</p></div>
                                <div id="password">Duration: 23-03-2020  TO :28-03-2020</div>

                            </div>
                        </div>

                        <div className="cart">
                            <div className="empdetails">
                            <div id="empname">📛Sheethal</div>
                            <div id="email">📧sheethal@gmail.com</div>
                            <div id="empid">🆔1Aicumen17</div>
                            <div id="password">🔑sheethal@1Aic</div>
                            </div>
                            <div className="empokr">
                                <div id="empname">OKR</div>
                                <div id="email"><p>i will complete OKR application by the end of this week</p></div>
                                <div id="password">Duration: 23-03-2020  TO :28-03-2020</div>

                            </div>
                        </div>

                        <div className="cart">
                            <div className="empdetails">
                            <div id="empname">📛Priyanka</div>
                            <div id="email">📧priyanka@gmail.com</div>
                            <div id="empid">🆔1Aicumen18</div>
                            <div id="password">🔑priyanka@1Aic</div>
                            </div>
                            <div className="empokr">
                            <div id="empname">OKR</div>
                                <div id="email"><p>i will complete OKR application by the end of this week</p></div>
                                <div id="password">Duration: 23-03-2020  TO :28-03-2020</div>

                            </div>
                        </div>



                </div>



                <div id="bg-modal">
                       
                        {/* popup */}
                        <div className="modal-content">
                                <div className="close" onClick={this.closePopUp}>+</div>
                                <img src={person} height="50px" width="50px"alt="Employee"></img>
                        {/* addemployee from */}
                                <form>

                                     {/* employeename */}
                                     <div className="employeename">
                                        <label>Employee Name:</label><br/>
                                        <input className="name" type="text"placeholder="Full Name" required></input>
                                    </div>

                                    {/* employeeemail*/}
                                    <div className="employeeemail">
                                        <label>Employee Email:</label><br/>
                                        <input className="empemail" type="email"placeholder="example@gmail.com" required></input> 
                                    </div>
            
                                    {/* employeepassword */}
                                    <div className="employeepassword">
                                        <label>Password:</label><br/>
                                        <input className="pwd" type="password"placeholder="Set password" required></input>
                                    </div>

                                     {/* addbutton */}
                                    <button className="addemp" >Add</button>

                                </form>
                        </div>

                </div>
            </div>
        );
    }
}
export default AdminPage;