import React from "react";
import "./BlogCard.css";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p><strong>Author:</strong> {blog.author}</p>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogCard;