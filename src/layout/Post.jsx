import PostAttachment from "../components/PostAttachment/PostAttachment";
import PostComment from "../components/PostComment/PostComment";

function Post() {
    return (
      <div className="PostContainer">
        <PostAttachment />
        <PostComment />
      </div>
    );
  }
  
  export default Post;
  