import { MdGroups, MdChat, MdMoreVert } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import "./OptionBar.css";

function OptionBar() {
  return (
    <div className="option-bar">
      <div className="profile-container">
        <img
          className="small-profile"
          src={`./images/luismi_morales.jpg`}
        ></img>
      </div>
      <div className="four-icons">
        <MdGroups size={28} color={"#54656f"}></MdGroups>
        <TbCircleDashed size={24} color={"#54656f"}></TbCircleDashed>
        <MdChat size={24} color={"#54656f"}></MdChat>
        <MdMoreVert size={24} color={"#54656f"}></MdMoreVert>
      </div>
    </div>
  );
}

export default OptionBar;
