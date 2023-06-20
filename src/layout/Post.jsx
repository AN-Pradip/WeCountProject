import PostAttachment from "../components/PostAttachment/PostAttachment";
import PostComment from "../components/PostComment/PostComment";

function Post() {
    return (
      <div className="PostContainer">
        <PostAttachment />
        <div className="Separator"></div>
        <PostComment />
      </div>
    );
  }
  
  export default Post;
  