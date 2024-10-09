import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';
import { useSession } from 'next-auth/react';

const CommentBox = ({ onCommentAdded }) => {
  const { data: session } = useSession();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      setError('Please fill in all fields');
      return;
    }

    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: session?.user?.name || 'Anonymous',
        rating,
        comment,
      }),
    });

    if (response.ok) {
      onCommentAdded(); // Trigger a re-fetch of comments
      setComment('');
      setRating(0);
      setError('');
    } else {
      setError('Failed to submit comment');
    }
  };

  return (
    <div>
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating: </label>
          <Rating
            count={5}
            value={rating}
            onChange={handleRatingChange}
            size={30}
            activeColor="#ffd700"
          />
        </div>
        <div>
          <label>Comment: </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            cols="50"
            placeholder="Write your comment here"
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentBox;
