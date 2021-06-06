import React, { useState, useRef } from "react";
import { ContactDetails } from "../interfaces/ContactInterface";
import Editable from "./Editable";

const ContactCard: React.FC<ContactDetails> = ({
  name,
  street,
  email,
  phone,
  age,
}) => {
  const inputRef = useRef(null);
  const [newName, setName] = useState(name);
  const [newStreet, setStreet] = useState(street);
  const [newEmail, setEmail] = useState(email);
  const [newPhone, setPhone] = useState(phone);
  const [newAge, setAge] = useState(age?.toString())

  return (
    <li className="card_item">
      <div className="card">
        <div className="card__text">
          <Editable
            text={`Name: ${newName}`}
            placeholder={newName}
            childRef={inputRef}
            type="input"
          >
            <input
              className="card_content"
              ref={inputRef}
              type="text"
              name="Name"
              placeholder={newName}
              value={newName}
              onChange={(e) => setName(e.target.value)}
            />
          </Editable>
        </div>

        <div className="card__text">
          <Editable
            text={`Street: ${newStreet}`}
            placeholder={newStreet}
            childRef={inputRef}
            type="input"
          >
            <input
              ref={inputRef}
              type="text"
              name="Street"
              placeholder={newStreet}
              value={newStreet}
              onChange={(e) => setStreet(e.target.value)}
            />
          </Editable>
        </div>

        <div className="card__text">
          <Editable
            text={`Email: ${newEmail}`}
            placeholder={newEmail}
            childRef={inputRef}
            type="input"
          >
            <input
              ref={inputRef}
              type="text"
              name="Email"
              placeholder={newEmail}
              value={newEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Editable>
        </div>

        <div className="card__text">
          <Editable
            text={`Phone: ${newPhone}`}
            placeholder={newPhone}
            childRef={inputRef}
            type="input"
          >
            <input
              ref={inputRef}
              type="text"
              name="Phone"
              placeholder={newPhone}
              value={newPhone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Editable>
        </div>

        <div className="card__text">
          <Editable
            text={`Age: ${newAge}`}
            placeholder={newAge}
            childRef={inputRef}
            type="input"
          >
            <input
              ref={inputRef}
              type="text"
              name="Age"
              placeholder={newAge}
              value={newAge}
              onChange={(e) => setAge(e.target.value)}
            />
          </Editable>
        </div>
      </div>
    </li>
  );
};

export default ContactCard;
