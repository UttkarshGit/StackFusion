import './ind.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
function Sign() {
  const [name, setaname] = useState("");
  const [dob, setdob] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

 async function validate() {
    let date = new Date(dob);
    let year = date.getFullYear();

    let currentdate = new Date();
    let currentyear = currentdate.getFullYear();

    let valid_year = currentyear - year;
    var mailFormat = /\S+@\S+\.\S+/;

  
    if (name != "" && name.length >= 2) {
      if (dob != "") {
         if(valid_year>=18)
         {
          if (email != "" && email.match(mailFormat)) {
            if (phone != "") {
              let all_data= await fetch("http://localhost:5000/send_data",{
                method:'post',
                body:JSON.stringify({name,dob,email,phone}),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            let c_data= await all_data.json();
            if(c_data.error)
            {
                alert("please enter correct mobile no");
            }
            else{
                alert("Successfully submitted");
                window.location.href="/alldata";
            }

            }
            else {
              alert("Please Enter the phone no.")
            }
          }
          else {
            alert("Please Enter the email or your email is not valid")
          }
         }
         else{
          alert("Your age is less than 18")
         }
      }
      else {
        alert("Please Enter the Date Of Birth")
      }
    }
    else {
      alert("Please Enter the Name or your name length is short")
    }
  
  }
  return (
    <div className="App">
      <section class="vh-100" style={{ "backgroundColor": "black" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style={{ "border-radius": "1rem;" }}>
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Sign in</h3>
                  <div class="form-outline mb-4">
                    <input type="text" id="typeEmailX-2" class="form-control form-control-lg" placeholder='Name' onChange={(e) => { setaname(e.target.value) }} />
                  </div>


                  <div class="form-outline mb-4">
                    <input type="date" id="typeEmailX-2" class="form-control form-control-lg" placeholder='date of birth' onChange={(e) => { setdob(e.target.value) }} />
                  </div>

                  <div class="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder='Email' onChange={(e) => { setemail(e.target.value) }} />
                  </div>

                  <div class="form-outline mb-4">

                    <input type="text" id="typePasswordX-2" class="form-control form-control-lg" placeholder='Phone no' onChange={(e) => { setphone(e.target.value) }} />
                  </div>
                  <button class="btn btn-primary btn-lg btn-block" onClick={validate}>Send</button>
                  <hr class="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sign;
