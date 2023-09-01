// Write your JS code here
import Loader from 'react-loader-spinner'
import './index.css'
import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedDate = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogItemData: updatedDate, isLoading: false})
    console.log(updatedDate)
  }

  render() {
    const {blogItemData, isLoading} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogItemData
    return (
      <div className="bid-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="bid-title">{title}</h1>
            <div className="bid-author-details-container">
              <img
                src={avatarUrl}
                alt="avatar-img"
                className="bid-author-avatar"
              />
              <p className="bid-author-name">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="bid-title-image-style" />
            <div className="bid-content-container">
              <p className="bid-content">{content}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
