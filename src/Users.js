import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';

// https://dummy.restapiexample.com/api/v1/employees

function Users() {
    const [user, setUser] = useState([]);

    useEffect(() => {
            fetch("https://dummy.restapiexample.com/api/v1/employees").then(data=>{
                data.json().then(result =>{
                    console.warn("result", result);
                    setUser(result.data)
                })
            })
        
    }, [])

    return (
        <Fragment>
            <h1>This list is fetched from dummy api web site (refresh page if....)</h1>
            <table class="table table-striped">
                <thead>
                    <tr >
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                {
                    
                    user.map((item, index)=>
                    <tr key={index}>
                        <td scope="row">{index+1}</td>
                        <td>{item.employee_name}</td>
                        <td>{item.employee_age}</td>
                        <td>{item.employee_salary}</td>
                    </tr>
                    )
}
                </tbody>
            </table>
        </Fragment>
    )
}
export default Users;