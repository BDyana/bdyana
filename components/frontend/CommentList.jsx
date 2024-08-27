const CommentList = ({ comments }) => {
    return (
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h4>{comment.userName} (Rating: {comment.rating})</h4>
            <p>{comment.comment}</p>
            <small>{new Date(comment.createdAt).toLocaleString()}</small>
            <hr />
          </div>
        ))}
      </div>
    );
  };
  
  export default CommentList;
  