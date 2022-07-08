import React, { useState, useEffect } from 'react'  
  
function Dashboard() {  
    const [user, setuser] = useState({ Email: '', Password: '' });  
    useEffect(() => {  
        var a = localStorage.getItem('myData');  
        var b = JSON.parse(a);  
        console.log(b.EmployeeName);  
        setuser(b)  
        console.log(user.EmployeeName)  
  
    }, []);  
    return (  
        <div>  
            
            <h2>Welcome : {user.EmployeeName}</h2>  
        </div>  
    )  
}  
  
export default Dashboard  