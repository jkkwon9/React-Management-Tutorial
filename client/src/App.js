import React, {Component} from 'react';
import './App.css';
// import Customer from './components/Customer'

// const customer  = {
//     'id'   : '1',
//     'name' : '홍길동',
//     'birthday' : '12322',
//     'gendor' : '남자',
//     'job' : '회사원',
// }
// function App() {
//   return (    
//         <Customer
//            id={customer.id}
//            name={customer.name}
//            birthday={customer.birthday}
//           gendor={customer.gendor}
//           job={customer.job}
//         />
   
//   );
// }


class App extends Component {
  state = {
    customer: ""
    }     
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customer: res}))
      .catch(err => console.log(err));      
  }
  
  callApi = async () => {
    const response = await fetch('api/customer');
    const body = await response.json();
    console.log('test9999999'); 
    console.log(body);
    return body;
   }

   render() {
    return(
      <h2>{this.state.customer ? this.state.customer.id : "test"}</h2>
    )
   }
}

export default App;
