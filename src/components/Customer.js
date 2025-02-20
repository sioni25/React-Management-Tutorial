import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile name={this.props.name} id={this.props.id} image={this.props.image} />
                <CustomerInfo name={this.props.name} age={this.props.age}/>

            </div>
        );
    }
}

class CustomerProfile extends React.Component {  // 사용자 ID, Image 출력
    render() {
        return (
            <div>
                <h2>{this.props.name}({this.props.id})</h2>
                <img src ={this.props.image} alt="profile"/>
            </div>
        );
    }
}
class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.age}</h2>
            </div>
        );
    }
}

export default Customer;