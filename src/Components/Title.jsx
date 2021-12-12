import React, { useState } from 'react';
import { useHistory } from 'react-router';
import CreatePost from '../Service/Api';

const initialState = {
    title: "",
    description: "",
    picture: "",
    username: "helloworld",
    categories: "Music",
    createDate: new Date()
}

const Title = () => {
    const [Post, setPost] = useState(initialState);
    const history = useHistory();

    const handleChange = (e) => {
        setPost({ ...Post, [e.target.name]: e.target.value });
    };

    const savePost = async () => {
        await CreatePost(Post);
        history.push("/");
    }


    return (
        <div>
            <div className="image-container">
                <img src="https://bit.ly/3CAvVx8" alt="poster" />
            </div>
            <div className="title-container">
                <h3>Title</h3>
                <div>
                    <i className="fas fa-plus"></i>
                    <input onChange={(e) => handleChange(e)} type="text" name="title" id="title" placeholder="Title" />
                </div>
                <button onClick={savePost}>Publish</button>
            </div>
            <div className="text-container">
                <textarea onChange={(e) => handleChange(e)} name="description" id="content" cols="30" rows="10" placeholder="Type here..."></textarea>
            </div>
        </div>
    )
}

export default Title;