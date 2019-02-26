import React, { Component } from 'react';
import axios from 'axios';


const Context = React.createContext();

const reducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_CONTACT':
        return{
            ...state,
            contacts: state.contacts.filter((contact) => 
            contact.id !== action.payload)
        };
        case 'ADD_CONTACT':
        return{
            ...state,
            contacts: [action.payload, ...state.contacts]
        };
        case 'UPDATE_CONTACT':
        return{
            ...state,
            contacts: state.contacts.map(contact =>
                contact.id === action.payload.id 
                //if/else
                ?(contact = action.payload) :contact
                )
        };
        default:
           return state;
    }
}

export class Provider extends Component {
    state={
        contacts:[
            // {
            //     id:1,
            //     name:'Sean Don',
            //     email: 'seandon@gmail.com',
            //     phone:'555-555-555'
            // },
            // {
            //     id:2,
            //     name:'Bukun Josep',
            //     email: 'bukun@gmail.com',
            //     phone:'222-222-222'
            // },
            // {
            //     id:3,
            //     name:'Henry Ianu',
            //     email: 'HIanu@gmail.com',
            //     phone:'333-333-333'
            // }
        ],

        dispatch: action =>{
            this.setState(state => reducer(state, action))
        },    
    };

//   componentDidMount(){
//       axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(res => this.setState({
//           contacts: res.data
//       }));
//    }

//USING ASYN AWAIT 
   async componentDidMount(){
    const res = await axios
    .get('https://jsonplaceholder.typicode.com/users');
    this.setState({contacts: res.data});
 }

    

  render() {
    return (
        <Context.Provider value ={this.state}>
            {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;


