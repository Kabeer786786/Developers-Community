/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaArrowLeft, FaUserFriends } from "react-icons/fa";
import { MdForum } from "react-icons/md";

const Forums = ( {userId} ) => {
  const [forumsList, setForumsList] = useState([]);
  const [joinedForums, setJoinedForums] = useState([]);
  const [showMyForums, setShowMyForums] = useState(false); 

  useEffect(() => {
    fetch("http://localhost:5000/api/forums")
      .then((res) => res.json())
      .then((data) => {
        setForumsList(data);
        const joined = data.filter((forum) => forum.joinedUsers.includes(userId));
        setJoinedForums(joined);
      })
      .catch((err) => console.error("Error fetching forums:", err));
  }, []);

  const toggleForum = async (forumId, isJoined) => {
    const url = `http://localhost:5000/api/forums/${forumId}/${isJoined ? "leave" : "join"}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        const updatedForum = await response.json();
        setForumsList((prev) =>
          prev.map((f) => (f._id === forumId ? updatedForum.forum : f))
        );
        setJoinedForums((prev) =>
          isJoined
            ? prev.filter((f) => f._id !== forumId)
            : [...prev, updatedForum.forum]
        );
      }
    } catch (error) {
      console.error("Error toggling forum:", error);
    }
  };

  return (
    <div className="min-h-screen max-w-[1400px] bg-white pt-20 pb-10 px-6 relative">
      <div className="flex justify-between lg:w-[1350px] items-center mb-6">
        <h1 className="text-4xl text-gray-800 font-bold">Explore Our Forums</h1>
        <button
          className="relative bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
          onClick={() => setShowMyForums(!showMyForums)}
        >
          <div className="duration-200 transition-opacity">
            {showMyForums ? <FaArrowLeft color="gray" size={24} /> : <MdForum color="gray" size={24} />}
          </div>
        </button>
      </div>

      {showMyForums ? (
        <div>
          <h2 className="text-2xl text-gray-700 font-semibold mb-4">Joined Forums</h2>
          {joinedForums.length === 0 ? (
            <p>No forums joined yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {joinedForums.map((forum) => (
                <div
                  key={forum._id}
                  className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
                >
                  <div>
                    <h2 className="text-xl text-gray-700 font-semibold mb-2">{forum.name}</h2>
                    <p className="text-gray-600 mb-4">{forum.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600">
                      <FaUserFriends className="mr-1" />
                      <span>{forum.followers} Followers</span>
                    </div>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                      onClick={() => toggleForum(forum._id, true)}
                    >
                      Leave
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {forumsList.map((forum) => (
            <div
              key={forum._id}
              className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <h2 className="text-xl text-gray-700 font-semibold mb-2">{forum.name}</h2>
                <p className="text-gray-600 mb-4">{forum.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                  <FaUserFriends className="mr-1" />
                  <span>{forum.followers} Followers</span>
                </div>
                <button
                  className={`px-3 py-1 rounded-md transition ${joinedForums.some((f) => f._id === forum._id)
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  onClick={() =>
                    toggleForum(forum._id, joinedForums.some((f) => f._id === forum._id))
                  }
                >
                  {joinedForums.some((f) => f._id === forum._id) ? "Leave" : "Join"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Forums;
