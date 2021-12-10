import axios from "axios";

const URL = "http://localhost:8000";

const CreatePost = async (post) => {
    try {
        return await axios.post(`${URL}/create`, post);
    } catch (error) {
        console.log(`your error is ${error}`);
    }
};

const getAllPosts = async () => {
    try {
        let response = await axios.get(`${URL}/posts`);
        return response.data;
    } catch (error) {
        console.log(`error while calling posts and the error is ${error}`);
    }
}

const getPost = async (id) => {
    try {
        let Post = await axios.get(`${URL}/post/${id}`);
        return Post.data;
    } catch (error) {
        console.log(`erorr while calling getPost and error is ${error}`);
    }
}

const updatePost = async (id, post) => {
    try {
        await axios.post(`${URL}/update/${id}`, post);
    } catch (error) {
        console.log(`error while calling updatePost and your error is ${error}`);
    }
}

const deletePost = async (id) => {
    try {
        await axios.delete(`${URL}/delete/${id}`);
    } catch (error) {
        console.log(`deletepost can't run due to ${error}`)
    }
}

export default CreatePost;
export { getAllPosts, getPost, updatePost, deletePost };