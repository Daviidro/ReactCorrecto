
import { useState } from "react";
// import { create as createUser } from "../../../services/users";
import { create as createUser} from "../../../services/users.js"
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CSS
import "./Create.css";

import Input from "../../../components/Input/index.jsx";

export default function ProfileCreate() {
  // Local state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const cleanForm = () => {
    setFirstName("");
    setLastName("");
    setPhotoURL("");
    setEmail("");
    setBirthdate("");
  };

  const isEmpty = (value) => !value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isEmpty(firstName) ||
      isEmpty(lastName) ||
      isEmpty(photoURL) ||
      isEmpty(email) ||
      isEmpty(birthdate)
    ) {
      toast.error("Llena el form!!!!");
      return;
    }

    const data = {
      firstName,
      lastName,
      photoURL,
      email,
      birthdate,
    };

    try {
      await createUser(data);
      toast.success("Todo fine!!");
      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <Input
            placeholder="LastName"
            value={firstName}
            callback={(e) => setFirstName(e.target.value)}          
          />
          <Input
            placeholder="LastName"
            value={lastName}
            callback={(e) => setLastName(e.target.value)}          
          />
        </div>
        <div className="form-container">
          <Input
            placeholder="Photo URL"
            type="url"
            value={photoURL}
            callback={(e) => setPhotoURL(e.target.value)}          
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            callback={(e) => setEmail(e.target.value)}          
          />
        </div>
        <div className="form-container">
          <Input
            placeholder="Birthday"
            type="date"
            value={birthdate}
            callback={(e) => setBirthdate(e.target.value)}          
          />
        </div>
        <button type="submit" className="btn">
          Create User
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}