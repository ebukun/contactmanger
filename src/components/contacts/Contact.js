import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import './contact.css';
import {Consumer} from '../../context';
import axios from 'axios'
import {Link} from 'react-router-dom';


class Contact extends Component {
  constructor(){
    super();
    this.state = {
      showContactInfo: false,
    };

    // this.onShowClick =this.onShowClick.bind(this);
  };

  //Another way to access this from our methods
  //this method below wouldn't need the .bind(this) setup

  //Keeping the setState in the Click method
  // onShowClick = () =>{
  //   this.setState({ showContactInfo: !this.state.showContactInfo});
  // };


  // onShowClick(){
  //   console.log(this.state)
  // }

  // //Receiving the paramter passed from the event
  // onShowClick = (namee, e) =>{
  //   console.log(namee)
  // }

  /*onDeleteClick =( id, dispatch) =>{
    // this.props.deleteClickHandler();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(() => dispatch({type: 'DELETE_CONTACT', payload: id})) ; 
  }; */

  //USING ASYN AWAIT 
  onDeleteClick = async ( id, dispatch) =>{
    try {
      await axios
   .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({type: 'DELETE_CONTACT', payload: id})
    } catch (error) {
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }  
  };


  render() {
      // const{name, email, phone} =this.props
      const{name, email, phone, id } =this.props.contact;
      const {showContactInfo} = this.state;

    return (

      <Consumer>
        {value =>{
          const {dispatch} = value;
          return (
                <div className="card card-body mb-3">
                <h4>
                {name} 
                {/* <i onClick={this.onShowClick.bind(this)} */}
                {/* Passing a paramter throug h the event
                <i onClick={this.onShowClick.bind(this, name)} */}
                {/* <i onClick={this.onShowClick} */}
                <i onClick={()=>{
                  this.setState({ showContactInfo: !showContactInfo});
                }}
                className="fas fa-sort-down" style={{cursor:'pointer'}}>
                </i>
                <i className="fas fa-times" style={{cursor:'pointer', 
                float:'right', color:'red'}}
                onClick ={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i 
                  className="fas fa-pencil-alt" style ={{
                    cursor:'pointer',
                    float: 'right',
                    color:'black',
                    marginRight: '1rem'
                  }}>
                  </i>
                </Link>
                </h4>
                {showContactInfo ? (<ul className="list-group">
                  <li className="list-group-item"> Email: {email}</li>
                  <li className="list-group-item"> Phone: {phone}</li>
                </ul>) :null}
                          
                {/* <h4>{this.props.name}</h4>
                <ul>
                  <li>{this.props.email}</li>
                  <li>{this.props.phone}</li>
                </ul> */}
            </div>
          )
        }}
      </Consumer>
      
    );
  }
}

//Protypes is used to validate the 
//data coming in wheter its a string, 
//object, interger, boolean
Contact.propTypes ={
    // name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired,
    //number: PropTypes.number.isRequired,
    //array: PropTypes.array.isRequired,
    //boolean: PropTypes.bool.isRequired
    contact: PropTypes.object.isRequired,
    // deleteClickHandler: PropTypes.func.isRequired,  
};


export default Contact;
