import React from "react";
import BlogCard from "./BlogCard";
import blogs from "../data/blogs.json";

function BlogList() {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
}

export default BlogList;