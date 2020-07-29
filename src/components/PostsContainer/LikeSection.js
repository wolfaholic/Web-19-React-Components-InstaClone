// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from 'react';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

 
  // 🔥 Make sure the parent of LikeSection is passing the right props!

const LikeSection = props => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className={faHeart} onClick={props.addLikes}/>
      </div>
      <div className="like-section-wrapper">
        <i className={faComment} />
      </div>
    </div>
      <p className="likes-number">
        Likes: {props.newLikes}
      </p> 
</div>
  )
};

export default LikeSection;
