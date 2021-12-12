import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getAllPosts } from '../Service/Api';
import { useLocation } from 'react-router-dom';

const Right = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    console.log(search);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPosts(search);
            setPosts(data);
        }
        fetchData();
    }, [search]);

    return (
        posts.map((element, index) => {
            return <Card element={element} key={index} />
        })
    )
}

export default Right;