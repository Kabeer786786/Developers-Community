import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function CommunityFilter() {
    const [branch, setBranch] = useState(false);
    const categories = ["Web Development", "Machine Learning", "UI/UX Design", "Cybersecurity"];
    const branchs = ['CSE', 'CST', 'CSM', 'CSD', 'CSBS', 'ECE', 'EEE', 'CIV', 'ME'];
    const departments = ['CSE', 'ECS', 'ECE', 'EEE', 'CIV', 'ME'];
    const levels = ['Beginner', 'Intermediate', 'Expert'];
    const sections = ['A', 'B', 'C', 'D', 'E'];
    const years = ['I', 'II', 'III', 'IV'];
    const domains = ["Web Development", "Machine Learning", "UI/UX Design", "Cybersecurity"];

    const handleBranch = () => {
        setBranch((prev) => !prev)
    }

    return (
        <div className="fixed bg-white p-4 rounded-xl h-fit shadow-md w-[290px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <a href="#" className="text-blue-600 text-xs">RESET</a>
            </div>

            <div className="relative mb-3">
                <label className="text-base font-medium">
                    Domain
                </label>
                <select className="w-full appearance-none mt-1 px-4 py-1.5 text-sm border border-gray-300 rounded-full focus:outline-none" >
                    <option value="">All</option>
                    {domains.map((domain) => (
                        <option key={domain} value={domain}>{domain}</option>
                    ))}
                </select>
                <div className="absolute right-3  transform mt-2 top-1/2 pointer-events-none">
                    <IoIosArrowDown />
                </div>
            </div>
            <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-semibold">Skills</h2>
                <a href="#" className="text-blue-600 text-xs">Clear All</a>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
                {
                    categories.map((skill) => (
                        <button key={skill}>
                            <span className="flex text-xs items-center border border-gray-500 px-3 py-1 rounded-full">
                                <span>{skill}</span>
                            </span>
                        </button>
                    ))
                }
            </div>
            <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-semibold">Level</h2>
                <a href="#" className="text-blue-600 text-xs">Clear All</a>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                {
                    levels.map((level) => (
                        <button key={level}>
                            <span className="flex text-xs items-center border border-gray-500 px-3 py-1 rounded-full">
                                <span>{level}</span>
                            </span>
                        </button>
                    ))
                }
            </div>

            <div className="bg-gray-100 border border-gray-500 mb-3 rounded-lg">
                <div className="grid grid-cols-2 text-center  w-full h-fit mb-4">
                    <button onClick={handleBranch} className={`py-1.5 ${branch ? "bg-white border-b shadow border-r rounded-br-lg rounded-tl-lg border-gray-500" : ""}`} >Department</button>
                    <button onClick={handleBranch} className={`py-1.5 ${branch ? "" : " bg-white border-b shadow border-l rounded-bl-lg rounded-tr-lg border-gray-500"}`}>Branch</button>
                </div>

                {
                    branch ?
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {
                                branchs.map((branch) => (
                                    <button key={branch}>
                                        <span className="flex text-xs bg-white items-center border border-gray-500 px-3 py-1 rounded-full">
                                            <span>{branch}</span>
                                        </span>
                                    </button>
                                ))
                            }
                        </div>
                        : ""
                }

                {
                    !branch ?
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {
                                departments.map((department) => (
                                    <button key={department}>
                                        <span className="flex text-xs bg-white items-center border border-gray-500 px-3 py-1 rounded-full">
                                            <span>{department}</span>
                                        </span>
                                    </button>
                                ))
                            }
                        </div>
                        : ""
                }
            </div>


            <div>

                <div className="flex justify-between items-center mb-0.5">
                    <h2 className="text-base font-semibold">Year</h2>
                    <a href="#" className="text-blue-600 text-xs">Clear All</a>
                </div>
                <ul className="flex gap-4 mb-1.5">
                    {
                        years.map((year) => (
                            <li className="mb-1" key={year}>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    {year}
                                </label>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex justify-between items-center mb-0.5">
                    <h2 className="text-base font-semibold">Sections</h2>
                    <a href="#" className="text-blue-600 text-xs">Clear All</a>
                </div>
                <ul className="flex gap-3 mb-1.5">
                    {
                        sections.map((section) => (
                            <li className="mb-1" key={section}>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    {section}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

