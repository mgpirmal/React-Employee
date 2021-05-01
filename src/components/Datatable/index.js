import Axios from "axios";
import React from "react";

class Datatable extends React.Component {
  state = {

    empRes: [],
    employeesList: [],
    
    
  };
  componentDidMount = () => {

    Axios.get("https://randomuser.me/api/?results=100")
    .then(
      (response) => {
        console.log(response);
        let employeeDB = response.data.results;

        let employee = [];

        for (let i = 0; i < employeeDB.length; i++) {
          employee.push({
            name: employeeDB[i].name.first + "  " + employeeDB[i].name.last,
            email: employeeDB[i].email,
            phone: employeeDB[i].phone,
            age: employeeDB[i].dob.age,
            picture: employeeDB[i].picture.large,
          });
        }

        this.setState({
          employeesList: employee,
          empRes: employee,


        });
      }
    );
  };
 


  render() {
    return (
      <div>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              
            </tr>
          </thead>
          <tbody>
              {this.state.employeesList.map((emp,key) => (
                  <tr>
                      <td><img src={emp.picture} alt={emp.name}/></td>
                      <td>{emp.name}</td>
                      <td>{emp.age}</td>
                      <td>{emp.email}</td>
                      <td>{emp.phone}</td>
                      
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Datatable;