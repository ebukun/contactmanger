import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {

    state ={
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    // onNameChange =(e)=>this.setState({name: e.target.value});
    // onEmailChange =(e)=>this.setState({email: e.target.value});
    // onPhoneChange =(e)=>this.setState({phone: e.target.value});

    onChange =(e)=>this.setState({[e.target.name]: e.target.value});
    //target.name = to the name values in eact input

    onSubmit = (dispatch, e) =>{
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

            let newContact ={
                // name: name, if the key value is the same, we don't need to put both
                name,
                email,
                phone,
                // To grab a unique id import uuid "npm i uuid"
                // id: uuid(),
                //wouldn't need this because Jsonplaceholder already 
                //created id for each data
            };

            // dispatch({type:'ADD_CONTACT', payload: newContact})
           
            axios.post('https://jsonplaceholder.typicode.com/users', 
            newContact)
            .then(res => dispatch({type:'ADD_CONTACT', payload: res.data }))
            

            //USING ASYN AWAIT: async should be added before the 
            // paramter above onSubmit = async (dispatch, e) =>{}
            /*
            const res = await axios
            .post('https://jsonplaceholder.typicode.com/users', 
            newContact);
            dispatch({type:'ADD_CONTACT', payload: res.data });
            */
        
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
        <div className="card-header">Add Contact</div> 
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

                {/* <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    name ="name"
                    className="form-control 
                    form-control-lg"
                    placeholder="Enter Name...."
                    value={name}
                    // onChange ={this.onNameChange}
                    onChange ={this.onChange}
                    />
                </div> */}

                    <TextInputGroup 
                        label='Email'
                        name = 'email'
                        type = 'email'
                        placeholder = "Enter Email..."
                        value= {email}
                        onChange = {this.onChange}
                        error = {errors.email}
                    />
                {/* <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    name ="email"
                    className="form-control 
                    form-control-lg"
                    placeholder="Enter Email...."
                    value ={email}
                    // onChange ={this.onEmailChange}
                    onChange ={this.onChange}
                    />
                </div> */}
                <TextInputGroup 
                        label='Phone'
                        name = 'phone' 
                        placeholder = "Enter Phone..."
                        value= {phone}
                        onChange = {this.onChange}
                        error = {errors.phone}
                    />
                {/* <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" 
                    name ="phone"
                    className="form-control 
                    form-control-lg"
                    placeholder="Enter Phone...."
                    value={phone}
                    // onChange ={this.onPhoneChange}
                    onChange ={this.onChange}
                    />
                </div> */}
                <input type="submit" value="Add Contact" 
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

export default AddContact;