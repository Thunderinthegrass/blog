import classes from "./Post.module.scss";

export const Post = (props) => {
  return (
    <div className={classes.post}>
      <h2 className={classes.postTitle}>{props.title}</h2>
      <p className={classes.postContent}>
        {props.content}
      </p>
    </div>
  );
};
