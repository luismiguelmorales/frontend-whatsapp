import Contact from "./contact/Contact";
import { contactInterface } from "../../Models/contact.interface";
import "./LeftSide.css";
import { useState, useEffect } from "react";
import OptionBar from "./option-bar/OptionBar";
import SearchBar from "./search-bar/SearchBar";

function LeftSide(props: any) {
  const [users, setUsers] = useState<contactInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const backendUrl = "http://localhost:3000";

  const fetchUsersHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${backendUrl}/users`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedUsers: contactInterface[] = [];

      for (const key in data) {
        loadedUsers.push({
          _id: data[key]._id,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          pictureSrc: data[key].pictureSrc,
        });
      }
      setUsers(loadedUsers);
    } catch (error: any) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsersHandler();
  }, []);

  return (
    <div className="left">
      <OptionBar></OptionBar>
      <SearchBar></SearchBar>
      <div className="contact-list">
        {users.map((user, index) => (
          <Contact
            key={index}
            user={user}
            onContactClick={props.selectContact}
          ></Contact>
        ))}
      </div>
    </div>
  );
}

export default LeftSide;
