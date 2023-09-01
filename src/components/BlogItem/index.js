// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="link-item-style">
      <li className="blog-item-bg-container">
        <img src={imageUrl} alt="img" className="blog-item-logo-image" />
        <div>
          <p className="blog-item-title">{topic}</p>
          <h1 className="blog-item-main-title">{title}</h1>
          <div className="blog-item-author-container">
            <img
              src={avatarUrl}
              alt="avatar"
              className="blog-item-avatar-image-style"
            />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
