function UserInvite() {
    return (
      <div className="UserInviteContainer">
        <div className="UserProfileContainer">
            <span className="User" id="pinkUser" data-testid="UserTest"></span>
            <span className="User" id="blueUser" data-testid="UserTest"></span>
            <span className="User" id="redUser" data-testid="UserTest"></span>
        </div>
        <button className="InviteButton" data-testid="UserInviteButton"> Invite </button>
      </div>
    );
  }
  
  export default UserInvite;
  