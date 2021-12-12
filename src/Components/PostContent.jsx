import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getPost, deletePost } from '../Service/Api';

const PostContent = () => {
    const [post, setpost] = useState({});
    const { id } = useParams();
    const url = post.url || "https://bit.ly/3CAvVx8";
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost({id}.id);
            console.log(data);
            setpost(data);
        };
        fetchData();
    }, []);

    const deleteBlog = async () => {
        await deletePost({id}.id);
        history.push("/");
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
                    <Link to={`/update/${post._id}`}>
                        <i className="fas fa-edit"></i>
                    </Link>
                    <i onClick={deleteBlog} className="fas fa-trash"></i>
                </div>
                <h1>{post.title}</h1>
                <div className="author-date">
                    {/* <p><Link to={`/?username=${post.username}`}>Author: {post.username}</Link></p> */}
                    <p><Link to={`/?username=${post.username}`}>Author: {post.username}</Link></p>
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
