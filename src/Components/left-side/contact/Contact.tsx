import "./Contact.css";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

function Contact(props: any) {
  const user = props.user;
  const updateSelectedContact = props.onContactClick;
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleClick() {
    updateSelectedContact(user);
    console.log("contact clicked!");
  }

  function handleMouseEnter() {
    setIsMouseOver(true);
  }

  function handleMouseLeave() {
    setIsMouseOver(false);
  }

  return (
    <div
      className="container-contact"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="picture-container">
        <img
          className="medium-profile"
          src={`./images/${user.firstName.toLowerCase()}_${user.lastName.toLowerCase()}.jpg`}
        ></img>
      </div>
      <div className="child-container">
        <div className="top-container">
          <div className="name">{`${user.firstName} ${user.lastName}`}</div>
          <div className="time">6:53 PM</div>
        </div>
        <div className="message-preview">
          <p>Jejeje como dije, siempre tengo puesto el white hat</p>
          {isMouseOver && <FaChevronDown size={15}></FaChevronDown>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
