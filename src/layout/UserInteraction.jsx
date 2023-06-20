import UserInvite from "../components/UserInvite/UserInvite";
import UserTick from "../components/UserTick/UserTick";

function UserInteraction() {
    return (
      <div className="UserInteractionContainer">
        <UserTick />
        <UserInvite />
      </div>
    );
  }
  
  export default UserInteraction;
  