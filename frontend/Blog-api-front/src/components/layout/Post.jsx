import { HiDotsVertical } from "react-icons/hi";

function Post({ user, title, content }) {

    return (
        <div className="border-t border-b border-gray-500 p-4 cursor-pointer hover:bg-slate-950">
            <div className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="User Profile picture"  className="w-10 rounded-full"/>
                <span className="font-bold">{user}</span>
            </div>
            <h4 className="font-bold text-lg py-2">{title}</h4>
            <p className="py-4">{content}</p>
        </div>
    )
}

export default Post