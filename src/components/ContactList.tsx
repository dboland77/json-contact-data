import React from 'react';
import ContactData from "../data/contacts.json"
import ContactCard from "./ContactCard"

const ContactList = () => {
  return (
    <h1>
      {ContactData.map((contact,index)=>{
       return (
        <ContactCard 
        name={contact.name}
        street={contact.street}
        email={contact.email}
        phone={contact.phone}
        age={contact.age}
        key={index}>
        </ContactCard>
      )
      })}
    </h1>
  )
}

export default ContactList
