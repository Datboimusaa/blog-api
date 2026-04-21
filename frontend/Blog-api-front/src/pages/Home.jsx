import axios from "axios";
import Post from "../components/ui/Post.jsx";
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function Home() {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = function () {
            window.history.pushState(null, "", window.location.href);
        };
    }, []);

    const getPosts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/posts", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    const handleDeletePost = async (postId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPosts(posts.filter(post => post._id !== postId));
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <section className="h-screen px-5">
            <div className="flex flex-col py-2">
                {posts.map((post) => (
                    <Post key={post._id} user={post.author.name} title={post.title} content={post.content} handleEdit={() => handleEditPost(post._id)} handleDelete={()=> {
                        if(post.author._id === JSON.parse(atob(token.split(".")[1])).id) {
                            const response = axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            });
                            setPosts(posts.filter(p => p._id !== post._id));
                        }else {
                            alert("Vous pouvez seulement supprimer vos propres posts");
                        }
                    }} />
                ))}
            </div>

        </section>
    )
}

export default Home