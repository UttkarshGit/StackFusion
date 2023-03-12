import { useEffect, useState } from "react";

function Alldata()
{
    const[data,setdata]=useState([{
        'name':"",
        "dob":"",
        "email":"",
        "phone":""
    }])

    async function get_data()
    {
        let all_data=await fetch("http://localhost:5000/get_data");
        let fin_data=await all_data.json();
        setdata(fin_data)
    }
    get_data();

    return(
        <>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">DOb</th>
      <th scope="col">email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
        {
            data.map((e)=>{
                return <tr>
                <td scope="row">{e.name}</td>
                <td>{e.dob}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
              </tr>
            })
        }
         </tbody>
</table>
        </>
    )
}


export default Alldata;