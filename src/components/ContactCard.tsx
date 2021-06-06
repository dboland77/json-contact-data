import React, { useState, useRef,Fragment } from "react";
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
  const [newName, setName] = useState("");
  const [newStreet, setStreet] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newAge, setAge] = useState("");

  return (
    <Fragment>
      <Editable
        text={newName}
        placeholder={name}
        childRef={inputRef}
        type="input"
      >
        <input
          ref={inputRef}
          type="text"
          name="Name"
          placeholder={name}
          value={newName}
          onChange={(e) => setName(e.target.value)}
        />
      </Editable>

      {/* <Editable
        text={newStreet}
        placeholder={street}
        childRef={inputRef}
        type="input"
      >
        <input
          ref={inputRef}
          type="text"
          name="Street"
          placeholder={street}
          value={newStreet}
          onChange={(e) => setStreet(e.target.value)}
        />
      </Editable>

      <Editable
        text={newEmail}
        placeholder={email}
        childRef={inputRef}
        type="input"
      >
        <input
          ref={inputRef}
          type="text"
          name="Email"
          placeholder={email}
          value={newEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Editable>

      <Editable
        text={newPhone}
        placeholder={phone}
        childRef={inputRef}
        type="input"
      >
        <input
          ref={inputRef}
          type="text"
          name="Phone"
          placeholder={phone}
          value={newPhone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Editable>

      <Editable
        text={newAge}
        placeholder={age?.toString()}
        childRef={inputRef}
        type="input"
      >
        <input
          ref={inputRef}
          type="text"
          name="Age"
          placeholder={age?.toString()}
          value={newAge}
          onChange={(e) => setAge(e.target.value)}
        />
      </Editable> */}

    </Fragment>
  );
};

export default ContactCard;
