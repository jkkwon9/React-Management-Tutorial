
import React from 'react';

class Customer extends React.Component{
    render(){
        return (
            <div>
                <h2> {this.props.name}({this.props.id}) </h2>
                <p> {this.props.birthday} </p>
                <p> {this.props.gendor} </p>
                <p> {this.props.job} </p>           
                
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