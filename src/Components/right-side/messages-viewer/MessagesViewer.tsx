import messageInterface from "../../../Models/message.interface";
import "./MessagesViewer.css";

function MessagesViewer(props: any) {
  const loggedInId = "63c3f49d2b6614fad6a64127";

  const messages: messageInterface[] = props.messages;

  return (
    <div className="messages-container">
      {messages.map((msg, index) => {
        return (
          <div
            key={index}
            style={{
              textAlign: msg.sender_id === loggedInId ? "right" : "left",
            }}
          >
            <div
              className={msg.sender_id === loggedInId ? "receiver" : "sender"}
            >
              {msg.message}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessagesViewer;
