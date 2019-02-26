import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../../context';

class Contacts extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         contacts:[
    //             {
    //                 id:1,
    //                 name:'Sean Don',
    //                 email: 'seandon@gmail.com',
    //                 phone:'555-555-555'
    //             },
    //             {
    //                 id:2,
    //                 name:'Bukun Josep',
    //                 email: 'bukun@gmail.com',
    //                 phone:'222-222-222'
    //             },
    //             {
    //                 id:3,
    //                 name:'Henry Ianu',
    //                 email: 'HIanu@gmail.com',
    //                 phone:'333-333-333'
    //             }
    //         ]
    //     }
    // }
    
    // state = {
    //     contacts:[
    //         {
    //             id:1,
    //             name:'Sean Don',
    //             email: 'seandon@gmail.com',
    //             phone:'555-555-555'
    //         },
    //         {
    //             id:2,
    //             name:'Bukun Josep',
    //             email: 'bukun@gmail.com',
    //             phone:'222-222-222'
    //         },
    //         {
    //             id:3,
    //             name:'Henry Ianu',
    //             email: 'HIanu@gmail.com',
    //             phone:'333-333-333'
    //         }
    //     ]
    // };
    // We actually don't need constructor in this case
    // constructor can be needed for other reasons like 
    // initialization then we can do it the way above! 
    // But if we only using constructor to create our state 
    // we don't have to do that. We can simply state out the state

    // deleteContact =id =>{
    //     const {contacts} = this.state;

    //     const newContacts = contacts.filter((contact) =>{
    //        return contact.id !== id;
    //     })

    //     this.setState({
    //         contacts: newContacts
    //     })
    // }
  render() {

    return(
        <Consumer>
            {value => {
                const{ contacts} =value;
                return (
                <React.Fragment>
                    <h1 className="display-4 mb-2">
                        <span className="text-danger">Contact</span> List
                    </h1>
                {contacts.map((contact) => (
                    // <h1>{contact.name}</h1>
                    <Contact   
                        key= {contact.id}
                        contact = {contact}
                        // deleteClickHandler ={this.deleteContact.bind(this, contact.id)}
                        // name = {contact.name} 
                        // email={contact.email} 
                        // phone={contact.phone} 
                    />
                ))}
                </React.Fragment>
                )
            }}
        </Consumer>
    )
    //   const {contacts} =this.state;
    // return (
    // //   <React.Fragment>
    // //     {contacts.map((contact) => (
    // //         // <h1>{contact.name}</h1>
    // //         <Contact   
    // //             key= {contact.id}
    // //             contact = {contact}
    // //             deleteClickHandler ={this.deleteContact.bind(this, contact.id)}
    // //             // name = {contact.name} 
    // //             // email={contact.email} 
    // //             // phone={contact.phone} 
    // //         />
    // //      ))}
    // //   </React.Fragment>
    // )
  }
}

export default Contacts;