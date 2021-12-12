import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {getPost, updatePost } from '../Service/Api';

const initialState = {
    title: "",
    description: "",
    picture: "",
    username: "Sachin Rawat",
    categories: "All",
    createDate: new Date()
}

const UpdateContent = () => {
    const [post, setpost] = useState(initialState);
    const { id } = useParams();
    const url = "https://bit.ly/3CAvVx8";
    const history = useHistory();
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPost({ id }.id);
            console.log(data);
            setpost(data);
        }
        fetchData();
    }, [])

    const handleChange = (e) => {
        setpost({ ...post, [e.target.name]: e.target.value });
    }

    const updateBlog = async () => {
        await updatePost({ id }.id, post);
        history.push('/');
    }

    return (
        <div>
            <div className="image-container">
                <img src={url} alt="poster" />
            </div>
            <div className="title-container">
                <h3>Title</h3>
                <div>
                    <i className="fas fa-plus"></i>
                    <input type="text" name="title" id="title" placeholder="Title" value={post.title} onChange={(e) => handleChange(e)} />
                </div>
                <button onClick={updateBlog}>Update</button>
            </div>
            <div className="text-container">
                <textarea name="description" id="content" cols="30" rows="10" placeholder="Type here..." value={post.description} onChange={(e) => handleChange(e)}></textarea>
            </div>
        </div>
    )
}

export default UpdateContent;