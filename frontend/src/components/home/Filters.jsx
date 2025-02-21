import { FaSearch } from "react-icons/fa";

const Filters = () => {
    return (
      <div className="flex flex-wrap gap-3 my-4 mx-auto items-center justify-center">
        <div className="flex gap-2 items-center justify-center  rounded-lg  border w-full bg-gray-300 md:w-1/3">
        <input type="text" placeholder="Search projects..." className="p-1.5  focus:outline-none w-full bg-white rounded-l-lg px-4" />
        <FaSearch className="mr-4 ml-2" />
        </div>
        <select className="p-2 border rounded-lg">
          <option>All Categories</option>
          <option>Web Development</option>
          <option>AI/ML</option>
          <option>Blockchain</option>
        </select>
        <select className="p-2 border rounded-lg">
          <option>All Tech Stacks</option>
          <option>React</option>
          <option>Python</option>
          <option>Node.js</option>
        </select>
      </div>
    );
  };
export default Filters;  