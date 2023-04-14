import "./ContactHeader.css";
import { MdOutlineSearch, MdMoreVert } from "react-icons/md";

function ContactHeader(props: any) {
  return (
    <div className="container-contact-header">
      <img className="small-profile" src={props.pictureSrc.toLowerCase()}></img>
      <div className="name">{`${props.firstName} ${props.lastName}`}</div>
      <MdOutlineSearch size={24} color={"#54656f"}></MdOutlineSearch>
      <MdMoreVert size={24} color={"#54656f"}></MdMoreVert>
    </div>
  );
}

export default ContactHeader;
