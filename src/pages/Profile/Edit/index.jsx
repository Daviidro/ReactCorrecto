import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  retrieve as retrieveUser,
  update as updateUser,
} from "../../../services/users";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfileEdit() {
  // Local state
  const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  // RRD
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const data = await retrieveUser(id);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPhotoURL(data.photoURL);
      setEmail(data.email);
      setBirthdate(data.birthdate);
      setIsLoading(false);
    };

    getUser();
  }, [id]);

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
      await updateUser(id, data);
      toast.success("Todo fine!!");
      navigate(`/app/profiles/${id}`);
    } catch (error) {
      toast.error("Algo salió mal");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit</h2>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-child">
              <input
                className="input"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-child">
              <input
                className="input"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-container">
            <div className="form-child">
              <input
                className="input"
                placeholder="Photo URL"
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>
            <div className="form-child">
              <input
                className="input"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-container">
            <input
              className="input"
              placeholder="Birthdate"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Edit User
          </button>
        </form>
      )}
      <ToastContainer />
    </div>
  );
}