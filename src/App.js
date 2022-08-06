import './App.css';
import Customer from './components/Customer'

const customer  = {
    'id'   : '1',
    'name' : '홍동',
    'birthday' : '12322',
    'gendor' : '남자',
    'job' : '회사원',
}

function App() {
  return (
    <Customer
      id={customer.id}
      name={customer.name}
      birthday={customer.birthday}
      gendor={customer.gendor}
      job={customer.job}
      />
  );
}
export default App;
