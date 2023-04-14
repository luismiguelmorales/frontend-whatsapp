import { BaseSyntheticEvent, SyntheticEvent, useState } from "react";
import { MdSend, MdOutlineMic, MdAttachFile, MdTagFaces } from "react-icons/md";
import "./InputBox.css";

function InputBox(props: any) {
  const [textEntered, setTextEntered] = useState("");

  function inputChangeHandler(e: BaseSyntheticEvent): void {
    setTextEntered(e.target.value.trim());
  }

  const sendMessage = props.sendMessage;
  function sendMessageHandler() {
    sendMessage(textEntered);
    setTextEntered("");
  }

  return (
    <div className="input-container">
      <button className="input-button">
        <MdTagFaces size={26} color={"#54656f"}></MdTagFaces>
      </button>

      <button className="input-button">
        <MdAttachFile size={24} color={"#54656f"}></MdAttachFile>
      </button>

      <input
        className="send-input"
        onChange={inputChangeHandler}
        value={textEntered}
        placeholder="Type a message"
      ></input>

      <button className="input-button" onClick={sendMessageHandler}>
        {textEntered.trim() !== "" ? (
          <MdSend size={24} color={"#54656f"}></MdSend>
        ) : (
          <MdOutlineMic size={24} color={"#54656f"}></MdOutlineMic>
        )}
      </button>
    </div>
  );
}

export default InputBox;
