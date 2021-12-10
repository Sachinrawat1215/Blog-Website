import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPost, deletePost } from '../Service/Api';

const PostContent = () => {
    const [post, setpost] = useState({});
    const { id } = useParams();
    const url = post.url || "https://bit.ly/3CAvVx8";
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost({ id }.id);
            console.log(data);
            setpost(data);
        };
        fetchData();
    }, []);

    const deleteBlog = async () => {
        await deletePost({id}.id);
        navigate("/");
    }

    return (
        <div>
            <div>
                <div className="image-container">
                    <img src={post.picture || url} alt="poster" />
                </div>
            </div>
            <div className="post-container">
                <div className="edit-delete">
                    <Link to={`/update/${post._id}`}><i className="fas fa-edit"></i></Link>
                    {/* <Link to={`/delete/${post._id}`} > */}
                        <i onClick={deleteBlog} className="fas fa-trash"></i>
                        {/* </Link> */}
                </div>
                <h1>{post.title}</h1>
                <div className="author-date">
                    <p>Author: {post.username}</p>
                    <p>Date: {new Date(post.createDate).toDateString()}</p>
                </div>
                <div className="post-content">
                    {post.description}
                </div>
            </div>
        </div>
    )
}

export default PostContent;
