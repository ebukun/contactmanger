import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {

    state ={
        name: '',
        email: '',
        phone: '',
        errors: {},
        
    };

    //fetching the data of the ID and updating the state
    componentDidMount(){
        const {id} = this.props.match.params
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => this.setState({
            name: res.data.name,
            email:res.data.email,
            phone: res.data.email,
        }))
    }

    // onNameChange =(e)=>this.setState({name: e.target.value});
    // onEmailChange =(e)=>this.setState({email: e.target.value});
    // onPhoneChange =(e)=>this.setState({phone: e.target.value});

    onChange =(e)=>this.setState({[e.target.name]: e.target.value});
    //target.name = to the name values in eact input

    onSubmit =  async(dispatch, e) =>{
        e.preventDefault();
        // console.log(this.state);

        let {name, email, phone} = this.state;

        //Check for Errors
        if(name === ''){
            this.setState({errors : {name: 'Name is required'}});
            return;
        }
        if(email === ''){
            this.setState({errors : {email: 'Email is required'}});
            return;
        }
        if(phone === ''){
            this.setState({errors : {phone: 'Phone is required'}});
            return;
        }

        let updContact ={
            name,
            email,
            phone,
        }

        //Put request updating the 
        let {id} = this.props.match.params;

        const res = await axios
            .put(`https://jsonplaceholder.typicode.com/users/${id}`,
            updContact);

            dispatch({type:'UPDATE_CONTACT', payload: res.data});


 
            //Clear State
            this.setState({
                name:'',
                email:'',
                phone:'',
                errors:{}
            });
            //Redirect: Redirecting to the HomePage
            this.props.history.push('/');
        
    };


  render() {
      const {name, email, phone, errors} = this.state;

      return(
          <Consumer>
              {value =>{
                  const {dispatch} = value;
                  return(
                  <div className="card mb-3">
        <div className="card-header">Edit Contact</div> 
        <div className="card-body">
            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup 
                        label='Name'
                        name = 'name'
                        placeholder = "Enter Name..."
                        value= {name}
                        onChange = {this.onChange}
                        error = {errors.name}
                    />
                    <TextInputGroup 
                        label='Email'
                        name = 'email'
                        type = 'email'
                        placeholder = "Enter Email..."
                        value= {email}
                        onChange = {this.onChange}
                        error = {errors.email}
                    />
                <TextInputGroup 
                        label='Phone'
                        name = 'phone' 
                        placeholder = "Enter Phone..."
                        value= {phone}
                        onChange = {this.onChange}
                        error = {errors.phone}
                    />
                <input type="submit" value="Update Contact" 
                className="btn btn-light btn-block"/>
                
            </form>
            

        </div>
      </div>  
                  );
              }}

          </Consumer>
      );
  }
}

export default EditContact;