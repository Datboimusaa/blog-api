import axios from "axios";
import Post from "../components/layout/Post"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Home() {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

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

    return (
        <section className="flex justify-center h-screen">
            <div className="w-3xl border border-gray-500 py-4 h-full rounded">
                <div className="border border-gray-500 p-4 px-8 flex items-center justify-between">
                    <h2 className="font-bold text-lg">Posts</h2>
                    <button className="bg-white text-black rounded-xl px-4 py-2 font-bold cursor-pointer" onClick={() => navigate('/create')}>Creer +</button>
                </div>
                <div className="pt-10">
                    {posts.map((post) => (
                        <Post key={post._id} user={post.user} title={post.title} content={post.content} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home