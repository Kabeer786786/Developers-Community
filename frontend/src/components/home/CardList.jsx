import { useEffect, useState } from "react";
import CommunityCard from "./CommunityCard";

const CardList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/users");
                if (!response.ok) throw new Error("Failed to fetch users");

                const data = await response.json();
                setMembers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="flex flex-wrap ml-[300px] gap-4 p-3 justify-center items-center w-4/5 rounded-xl h-full bg-gray-100">
            {members.map((member) => (
                <CommunityCard
                    key={member._id}
                    image={member.image}
                    name={member.name}
                    skills={member.skills}
                />
            ))}
        </div>
    );
};

export default CardList;
