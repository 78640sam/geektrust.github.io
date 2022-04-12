import { useEffect, useState } from "react";
import './Admin.css';
import React from "react";



function Admin() {
    const [data, setData] = useState([]);
   

    useEffect(() => {
      const admindata = async () => {
        const res = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
           
        setData(await res.json());
 
 console.log(data);
     }
 
        
          admindata();
      }, [data]);

      


    return (
      <>
      
       {
           data.map((item)=>{
               return (<div key={item.id}>
            
               <div className="main-container">
               <input type="checkbox"/> 
                   <p>{item.name}</p>
             <p>{item.email}</p>
             <p>{item.role}</p>
             <p> &#9997;</p>
             <p> &#x274C;</p>
             
                 </div>
                 <hr/>

        
                 </div>


               )

               
           })
           
       }
<div className="button-div">
<button
        id="page-00"
       
      >{`<<`}</button>
      <button
         id="page-0"
       
      >{`<`}</button>
      <button id="page-1">1 </button>
      <button id="page-2">2 </button>
      <button id="page-3">3 </button>
      <button id="page-4">4 </button>
      <button id="page-5">5 </button>
      <button
         id="page-06"
       
      >{`>`}</button>
      <button
      
      id="page-6"
      >{`>>`}</button>
      </div>
      </>
    );
  }
  
  export default Admin;