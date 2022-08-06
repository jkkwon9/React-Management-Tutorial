
import React from 'react';

class Customer extends React.Component{
    render(){
        return (
            <div>
                <h2> {this.props.name}({this.props.id}) </h2>
            
                {/* <CustomerProfile name={this.props.name} id={this.props.id} />
                <Customerinfo birthday={this.props.birthday} gendor={this.props.gendor} job={this.props.job} />
             */}
            
            </div>
        )        
    }
}
class CustomerProfile extends React.Component{
    rendor(){ 
        return (
            <div>
                <h2> {this.props.name}({this.props.id}) </h2>
            </div>
        )
    }
}
class Customerinfo extends React.Component{
    rendor(){
        return (
            <div>
                <p> {this.props.birthday} </p>
                <p> {this.props.gendor} </p>
                <p> {this.props.job} </p>
            </div>
        )
    }
}
export default Customer;