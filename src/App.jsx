import Label from "./components/Label/Label";
import TextContainer from "./components/TextContainer/TextContainer";
import UserInteraction from "./layout/UserInteraction";
import Post from "./layout/Post";

function App() {
  return (
    <div className="MainContainer">
      <Label />
      <TextContainer />
      <UserInteraction />
      <Post />
    </div>
  );
}

export default App;
