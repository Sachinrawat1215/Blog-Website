import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getAllPosts } from '../Service/Api';

const Right = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPosts();
            setPosts(data);
        }
        fetchData();
    }, []);

    return (
        posts.map((element, index) => {
            return <Card element={element} key={index} />
        })
    )
}

export default Right;
