import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { toast,ToastContainer } from "react-toastify";
import './style.css';


const EditStudentInfo=(props)=>{
    // console.log("props",props.match.params.id)

    const [stu_data,setStu_data]=useState([]);
    const [dept,setDept]=useState([]);
    const [prg,setPrg]=useState([]);  
    const [data,setData]=useState([]);
    const [refresh,setRefresh]=useState(true);  
    useEffect(async ()=>{
        let result=await fetch("http://oneportal.pythonanywhere.com/sub_registrar/sub_get_single_student/"+props.match.params.id,
        {
            method:'GET',
            headers:{"Authorization" : "Token "+localStorage.getItem('Token')}
        });
        result=await result.json();
        console.log(result)
        setStu_data(result)
        setDept(result.department)
        setPrg(result.program)
    },[refresh])

    


    const save=()=>{
        toast("Saved",{type:"success"})
    }
    const save_and_exit=()=>{
        toast("Saved and exit",{type:"success"})
    }
    const exit=()=>{
        toast("Exit",{type:"error"})
    }
    

    return(
        <div>
            <Navbar></Navbar>
            <ToastContainer position="bottom-right"/>
            
    <section>
        <div className="container-fluid">
			<div className="col-xl-10 col-lg-10 col-md-8 ml-auto">
				<div className="row justify-content-center">
					<div className="col-xl-12 col-lg-12 col-md-12 ml-auto">
						<div className="card">
							<div className="card card-common"> 
								<h3 className="text-white justify-content-center text-center pt-2">Edit Student</h3>
								<div className="row justify-content-center p-1 ml-2 mt-5">
                                    
                                    <table className="w-75 tableStyle" type="submit">
                                        <tbody>
                                        <tr className="tablerow">
                                            <th className="font-weight-bold w-25 hello">Name :</th>
                                            <td><input className="w-75" type="text" id="name" defaultValue={stu_data.name}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">Enrollment Number :</th>
                                            <td><input className="w-75" type="text" id="enrollment_numbers" defaultValue={stu_data.enrollment_numbers}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">Program :</th>
                                            <td><input className="w-75" type="text" defaultValue={prg.name}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">Department :</th>
                                            <td><input className="w-75" type="text" defaultValue={dept.department_code}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">Batch Start :</th>
                                            <td><input className="w-75" type="date" defaultValue={stu_data.batch_start}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">Batch End</th>
                                            <td><input className="w-75" type="date" defaultValue={stu_data.batch_end}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">University E-Mail :</th>
                                            <td><input className="w-75" type="email" defaultValue={stu_data.university_email_id}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">Personal E-Mail :</th>
                                            <td><input className="w-75" type="email" defaultValue={stu_data.personal_email_id}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">Phone :</th>
                                            <td><input className="w-75" type="tel" maxLength="10" defaultValue={stu_data.phone}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">Last Qualification :</th>
                                            <td><input className="w-75" type="text" defaultValue="12"/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">Street Address :</th>
                                            <td><input className="w-75" type="text" defaultValue={stu_data.street_address}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">District :</th>
                                            <td><input className="w-75" type="text" defaultValue={stu_data.district}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">State :</th>
                                            <td><input className="w-75" type="text" defaultValue={stu_data.state}/></td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-bold w-25">Pincode :</th>
                                            <td><input className="w-75" type="tel" maxLength="8" defaultValue={stu_data.pincode}/></td>
                                        </tr>
                                        </tbody>
                                    </table>                                  
								</div>
							</div>
                            <div className="row justify-content-center p-1">
                            <button type="submit" className="btn btn-success" onClick={()=>save()}>Save</button>
                            <button type="button" className="btn btn-success ml-2 mr-2" onClick={()=>save_and_exit()}>Save & Confirm</button>
                            <button type="button" className="btn btn-danger" onClick={()=>exit()}>Exit</button>
                            </div>
						</div>
					</div>
				</div>
            </div>
        </div>
    </section>               
    </div>
);
}

export default EditStudentInfo;