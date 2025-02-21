/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaTwitter, FaUserEdit, FaSave, FaCog, FaLock, FaCamera } from "react-icons/fa";

export default function Profile({ userId, handleLogout }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log(userId)
    setLoading(true);
    axios.get(`http://localhost:5000/api/users/${userId}`)
      .then(response => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching profile:", error);
        setLoading(false);
      });
  }, [userId]); // Add userId as a dependency


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    axios.put(`http://localhost:5000/api/users/${userId}`, profile)
      .then(response => {
        setProfile(response.data);
        setIsEditing(false);
      })
      .catch(error => console.error("Error updating profile:", error));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      uploadImage(file);
    }
  };

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("image", file);

    axios.post(`http://localhost:5000/api/users/${userId}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(response => {
        setProfile((prev) => ({ ...prev, image: response.data.imageUrl }));
        alert('Uploaded the Image Successfully!')
      })
      .catch(error => console.error("Error uploading image:", error));
  };


  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>User not found</p>;

  return (
    <div className="pt-16">
      <div className="relative flex w-[1400px] mt-0.5 overflow-y-huserIdden p-2 m-auto bg-white">

        {/* SuserIdebar */}
        <div className="w-[300px] h-[50vh] fixed bg-gray-100 text-gray-800 p-6 flex flex-col rounded-xl items-center">
          <div className="relative">
            <img
              src={profile.image ? `http://localhost:5000${profile.image}` : "user.png"}
              alt="Profile"
              className="profile-image w-24 h-24 rounded-full border-4 border-white mb-4"
            />
            <label htmlFor="imageUpload" className="absolute bottom-1 right-1 bg-gray-200 p-2 rounded-full cursor-pointer">
              <FaCamera />
            </label>
            <input
              type="file"
              id="imageUpload"  // Corrected from userId="imageUpload"
              accept="image/*"
              className="hidden"  // Corrected from huserIdden
              onChange={handleImageChange}
            />

          </div>

          <h2 className="text-xl font-semibold">{profile?.name}</h2>
          <p className="text-sm text-gray-400 mb-4">{profile?.bio}</p>

          <div className="flex space-x-4">
            <a href={profile?.socialMedia?.github || "#"} className="text-gray-500 hover:text-black text-xl"><FaGithub /></a>
            <a href={profile?.socialMedia?.linkedin || "#"} className="text-gray-500 hover:text-blue-500 text-xl"><FaLinkedin /></a>
            <a href={profile?.socialMedia?.twitter || "#"} className="text-gray-500 hover:text-blue-400 text-xl"><FaTwitter /></a>
          </div>
          <div className="logout mt-4">
            <button className="bg-red-500 text-white font-semibold px-4 py-1 rounded-md" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="max-w-[45.1em] ml-[311px] p-8 overflow-y-auto flex-grow bg-white shadow-md rounded-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">User Profile</h2>
            <button
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
            >
              {isEditing ? <><FaSave className="mr-2" /> Save</> : <><FaUserEdit className="mr-2" /> Edit Profile</>}
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {["name", "rollno", "email", "phoneno", "year", "branch", "semester", "bio"].map((field) => (
              <div key={field} className="mb-3">
                <label className="font-semibold capitalize text-gray-700">{field}</label>
                {isEditing ? (
                  <input
                    type="text"
                    name={field}
                    value={profile?.[field] || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full border rounded-md p-2 border-gray-300"
                  />
                ) : (
                  <p className="mt-1 text-gray-700 p-2 bg-gray-100 rounded-md">{profile?.[field] || "N/A"}</p>
                )}
              </div>
            ))}

            {/* Skills */}
            <div className="mb-3">
              <label className="font-semibold capitalize text-gray-700">Skills</label>
              {isEditing ? (
                <input
                  type="text"
                  name="skills"
                  value={profile.skills ? profile.skills.join(", ") : ""}
                  onChange={(e) =>
                    setProfile({ ...profile, skills: e.target.value ? e.target.value.split(", ") : [] })
                  }
                  className="mt-1 block w-full border rounded-md p-2 border-gray-300"
                />
              ) : (
                <p className="mt-1 text-gray-700 p-2 bg-gray-100 rounded-md">{profile.skills?.join(", ") || "No skills added"}</p>
              )}
            </div>

            {/* Projects */}
            <div className="mb-3">
              <label className="font-semibold capitalize text-gray-700">Projects</label>
              <ul className="mt-1 space-y-2">
                {(profile.projects || []).map((project, index) => (
                  <li key={index} className="bg-gray-100 p-2 rounded-md shadow">
                    <strong>{project.title}</strong>: {project.description} | <a href={project.github} className="text-blue-500">GitHub</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="w-[340px] fixed ml-[65.4em] overflow-huserIdden h-[88vh] bg-gray-100 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="text-sm space-y-2">
            <li className="p-2 bg-white rounded-md shadow">✔️ Contributed to Open Source</li>
            <li className="p-2 bg-white rounded-md shadow">🚀 Started a new project: AI Chatbot</li>
            <li className="p-2 bg-white rounded-md shadow">📌 Updated portfolio website</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6">Settings</h2>
          <ul className="text-sm mt-2 space-y-2">
            <li className="p-2 bg-white rounded-md shadow flex items-center"><FaCog className="mr-2" /> Account Settings</li>
            <li className="p-2 bg-white rounded-md shadow flex items-center"><FaLock className="mr-2" /> Privacy Settings</li>
          </ul>
        </div>



      </div>
    </div>
  );
}
