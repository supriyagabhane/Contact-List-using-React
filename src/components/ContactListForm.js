import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import Styles from "../Styles/Home.module.css";

// contact list from function
const ContactListForm = (props) => {
  // use state functions
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  // Create toast function
  const { addToast } = useToasts();

  // get the contact values from the form
  const getContactValues = (e) => {
    e.preventDefault();
    creatingContact(name, number, email);
    setName("");
    setEmail("");
    setNumber("");
  };

  // creating contact function its use to create contact items
  const creatingContact = (name, number, email, id = Date.now()) => {
    // checking that user not give empty inputs
    if (name?.trim() === "" || number?.trim() === "") {
      addToast(
        "You have to enter name and phone number both to create contact",
        {
          appearance: "warning",
        }
      );
      return;
    }
    props.contactTempData({
      name: name.trim(),
      phone: number.trim(),
      email: email.trim(),
      id,
    });
    // show toast funtion for for show notification
    addToast("Contact added successfully!", {
      appearance: "success",
    });
    // it handled the dummy post funtion
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => json);
  };
  return (
    <div className={Styles.contactListForm}>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone No."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className={Styles.contactListFormbtn}
          onClick={(e) => {
            getContactValues(e);
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1057/1057240.png"
            alt="Add Contact"
            className={Styles.contactIconsbtn}
          />
        </button>
      </form>
    </div>
  );
};

// export Contact list form function
export default ContactListForm;
