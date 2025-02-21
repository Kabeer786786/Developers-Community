import { FaUser, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import Streak from "./Streak";
import UpcomingEvents from "./UpcomingEvents";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", description: "", url: "" });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const handlePostClick = () => {
    setShowModal(true);
  };

  const handleSubmit = async () => {
    if (!newPost.title || !newPost.description) {
      alert("Title and description are required!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (res.ok) {
        const savedPost = await res.json();
        setPosts([savedPost, ...posts]); // Add new post to UI
        setShowModal(false);
        setNewPost({ title: "", description: "", url: "" });
      }
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  return (
    <div className="container bg-gray-50 w-screen pt-20">
      <div className="flex relative flex-col max-w-[1400px] m-auto lg:flex-row">

        {/* Upcoming Events */}
        <div>
          <UpcomingEvents />
          <h1 className="text-xl flex items-center gap-2 text-gray-700 font-bold text-gray-700 mb-4"> <FaUsers /> Community Discussions</h1>
          <div>
            {posts.map((post, index) => (
              <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <div className="bg-gray-300 p-3 mr-2 rounded-full">
                    <FaUser color="white" />
                  </div>
                  <span className="text-gray-500">{new Date(post.datePosted).toDateString()}</span>
                </div>
                <a href={post.url} className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
                <p className="text-gray-700 mt-2">{post.description}</p>
              </div>
            ))}
          </div>

          {/* Post a Query or Post */}
          <div className="flex justify-center mt-4 mb-4">
            <button
              onClick={handlePostClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Post a Query or Post
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="relative w-full lg:w-1/4 lg:pl-4 mt-4 lg:mt-0">
          <div className="fixed w-[300px]">
            <Streak />

            <div className="mt-2 p-4 bg-green-600 rounded-lg shadow-lg text-white">
              <h2 className="font-semibold">Want to contribute?</h2>
              <p className="">Help the community, Get the Awesome Goodies!
              
              </p>
              <button className="mt-2 bg-white text-gray-800 font-semibold py-1 px-4 rounded">
                Contribute
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Adding Post */}
      {
        showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Create a Post</h2>
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 mb-2 border rounded"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 mb-2 border rounded"
                rows="3"
                value={newPost.description}
                onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Optional URL"
                className="w-full p-2 mb-2 border rounded"
                value={newPost.url}
                onChange={(e) => setNewPost({ ...newPost, url: e.target.value })}
              />
              <div className="flex justify-between mt-4">
                <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="bg-blue-600 text-white py-2 px-4 rounded" onClick={handleSubmit}>
                  Post
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}
