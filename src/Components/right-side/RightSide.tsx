import ContactHeader from "./contact-header/ContactHeader";
import InputBox from "./input-box/InputBox";
import MessagesViewer from "./messages-viewer/MessagesViewer";
import "./RightSide.css";

function RightSide(props: any) {
  const contactSelected = props.contactSelected;
  const messages = props.messages;

  function sendMessage(text: string) {
    fetch("http://localhost:3000/singlemessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        msg: text,
        senderId: "63c3f49d2b6614fad6a64127",
        receiverId: contactSelected._id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="right">
      {contactSelected ? (
        <>
          <ContactHeader
            firstName={contactSelected.firstName}
            lastName={contactSelected.lastName}
            pictureSrc={`./images/${contactSelected.firstName}_${contactSelected.lastName}.jpg`}
          ></ContactHeader>
          <MessagesViewer messages={messages}></MessagesViewer>
          <InputBox sendMessage={sendMessage}></InputBox>
        </>
      ) : (
        <div className="default-view">
          <img src={`./images/default.jpg`}></img>
        </div>
      )}
    </div>
  );
}

export default RightSide;
