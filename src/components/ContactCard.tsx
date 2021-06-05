import React from "react";
import {ContactDetails} from "../interfaces/ContactDetails"

const ContactCard:React.FC<ContactDetails> = ({name,street,email,phone,age}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{street}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{age}</p>
    </div>
  );
};

export default ContactCard;
