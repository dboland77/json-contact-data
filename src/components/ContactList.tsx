import React, { Fragment } from "react";
import ContactData from "../data/contacts.json";
import ContactCard from "./ContactCard";

const ContactList = () => {
  return (
    <Fragment>
      <div className="main">
        <h1>Contact Cards - Please click the field to edit</h1>
        <ul className="cards">
          {ContactData.map((contact, index) => (
              <ContactCard
                key = {index}
                name={contact.name}
                street={contact.street}
                email={contact.email}
                phone={contact.phone}
                age={contact.age}
              ></ContactCard>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default ContactList;
