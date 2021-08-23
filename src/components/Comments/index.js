import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onChangeNameInput = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeCommentInput = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  onClickAddBtn = () => {
    const {name, comment} = this.state
    console.log(name, comment)
    console.log(new Date())
    const colorListIndex = Math.floor(Math.random() * 7)
    const colorClassName = initialContainerBackgroundClassNames[colorListIndex]
    const newCommentObj = {
      id: uuidv4(),
      name,
      comment,
      colorClassName,
      isLike: false,
      time: new Date(),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newCommentObj],
      name: '',
      comment: '',
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState({
      commentsList: filteredList,
    })
  }

  clickOnLikeBtn = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    console.log(name, comment)
    const listLength = commentsList.length
    return (
      <div className="app-container">
        <h1 className="heading">Comments</h1>
        <div className="comment-writing-section">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <div className="inputs-container-along-para">
            <p className="caption-to-write">
              Say something about 4.0 Technologies
            </p>
            <div className="inputs-container">
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeNameInput}
              />
              <textarea
                rows="8"
                cols="40"
                className="textarea-input"
                placeholder="Your Comment"
                value={comment}
                onChange={this.onChangeCommentInput}
              />
            </div>
            <div className="btn-container">
              <button
                type="button"
                className="btn-style"
                onClick={this.onClickAddBtn}
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
        <hr className="horrizontal-line" />
        <div className="comments-count-container">
          <p className="comments-count">{listLength}</p>
          <p className="comment">Comment</p>
        </div>
        <ul className="comments-display-section">
          {commentsList.map(eachObj => (
            <CommentItem
              key={eachObj.id}
              commentObj={eachObj}
              onDeleteComment={this.onDeleteComment}
              clickOnLikeBtn={this.clickOnLikeBtn}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
