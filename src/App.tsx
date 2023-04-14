import LeftSide from "./Components/left-side/LeftSide";
import RightSide from "./Components/right-side/RightSide";
import "./App.css";
import { useState, useEffect } from "react";
import openSocket from "socket.io-client";

function App() {
  const [contactSelected, setContactSelected]: [any, any] = useState(null);
  const [messages, setMessages] = useState([]);

  const socket: any = openSocket("http://localhost:3000");
  socket.on("messages", (data: any) => {
    console.log("socket -> " + JSON.stringify(data));
    getMessages();
  });

  useEffect(() => {
    getMessages();
  }, [contactSelected]);

  function getMessages() {
    if (contactSelected !== null) {
      fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId: "63c3f49d2b6614fad6a64127",
          receiverId: contactSelected?._id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setMessages(data);
        })
        .catch((error) => console.error(error));
    }
  }

  function selectContact(contact: any) {
    setContactSelected(contact);
  }

  return (
    <>
      <div className="top-back-bar"></div>
      <div className="back-side"></div>
      <div className="parent">
        <LeftSide selectContact={selectContact}></LeftSide>
        <RightSide
          contactSelected={contactSelected}
          messages={messages}
        ></RightSide>
      </div>
    </>
  );
}

export default App;
