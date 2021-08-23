import './index.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CommentItem = props => {
  const {commentObj, onDeleteComment, clickOnLikeBtn} = props
  const {name, comment, id, colorClassName, isLike, time} = commentObj
  const nameCap = name[0].toUpperCase()

  const postedTime = formatDistanceToNow(time)

  const likeImg = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const lIKETextColor = isLike ? 'like-text-new' : 'like-text'

  const onCLickDelete = () => {
    onDeleteComment(id)
  }

  const onClickLikeBtn = () => {
    clickOnLikeBtn(id)
  }

  const getLikeButton = () => (
    <button type="button" className="like-container" onClick={onClickLikeBtn}>
      <img src={likeImg} alt="like" className="like-img" />
      <p className={lIKETextColor}>Like</p>
    </button>
  )

  return (
    <li className="comment-item">
      <div className="name-container">
        <p className={`name-cap ${colorClassName}`}>{nameCap}</p>
        <p className="name">{name}</p>
        <p className="time-display">{`${postedTime} ago`}</p>
      </div>
      <p className="comment-para">{comment}</p>
      <div className="like-and-delete-container">
        {getLikeButton()}
        <div className="delete-icon-container">
          <button
            type="button"
            className="like-btn-style"
            onClick={onCLickDelete}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default CommentItem
