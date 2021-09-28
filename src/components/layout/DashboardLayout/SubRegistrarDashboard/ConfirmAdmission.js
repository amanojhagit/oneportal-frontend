import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Student_card from './components/Student_card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import EditStudentInfo from './editStudentInfo';

const ConfirmAdmission = (data) => {
	const [stu_data,setStu_data]=useState([]);
	const [refresh,setRefresh]=useState(true);



	  useEffect(()=>{
		  (async()=>{
			  let StuData;
			  try{
				  get_student();
			  } catch(error){
				  console.log("useEffect Error")
				  console.log(error)
			  }
		  })();
	  },[refresh])
	const get_student=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
		  Axios.get("http://oneportal.pythonanywhere.com/sub_registrar/sub_get_student",
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setStu_data(response.data)
				console.log(stu_data)
			}).catch(error=>{
				console.log(error)
			})
	  }

	  const re_fresh=()=>{
		  setRefresh(!refresh)
	  }


    return (
        <div>	
			<Navbar></Navbar>
			<ToastContainer position="bottom-right"/>
    <section>
		
        <div className="container-fluid">
			<div className="col-xl-10 col-lg-10 col-md-8 ml-auto">
				<div className="row justify-content-center">
					<div className="col-xl-12 col-lg-12 col-md-12 ml-auto">
						<div className="card p-4">
							<div class="card card-common"> 
								<h3 class="text-white text-center pt-2">Pending Admission</h3>
								<button type="button" class="btn btn-outline-primary ml-auto" onClick={re_fresh}>
									<i class="fas fa-redo"></i></button>
								<div className="row justify-content-center p-1">
								
								{
									stu_data.map((student,index)=>(
										<Student_card studentData={student} key={index} refresh={refresh} setRefresh={setRefresh}/>
									))
								}
								</div>	
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
export default ConfirmAdmission;