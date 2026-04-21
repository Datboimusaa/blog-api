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

    return (
        <section className="h-screen px-5">
            <div className="flex flex-col py-2">
                {posts.map((post) => (
                    <Post key={post._id} user={post.author.name} title={post.title} content={post.content} />
                ))}
            </div>

        </section>
    )
}

export default Home