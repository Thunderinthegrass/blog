import classes from "./BlogContent.module.scss";
import { Post } from "./Post/Post";

export const BlogContent = (props) => {
  

  const postItem = props.posts.map(post => <Post id={post.id} title={post.title} content={post.content} key={post.id} />)

  return (
    <>
      <div className="container">
        <h1 className="main-title">Блог</h1>
        <div className={classes.posts}>
          {postItem}
          <button className="count-btn" onClick={() => {props.postsAmount(props.posts)}}>Получить количество постов</button>
        </div>
      </div>
    </>
  );
};
