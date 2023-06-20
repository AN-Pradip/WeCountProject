function UserTick() {
    return (
      <div className="UserTickContainer">
        <span className="Tick" data-testid="TickTest"> &#10003;</span>
        <span className="CheckCount" data-testid="CountTest">0/20</span>
      </div>
    );
  }
  
  export default UserTick;
  