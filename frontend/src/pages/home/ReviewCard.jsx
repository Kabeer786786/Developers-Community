import { FaStar } from "react-icons/fa";


export default function ReviewCard() {
  return (
    <div className="flex justify-start items-start border m-auto rounded-lg p-4 gap-4 hover:bg-gray-100 transition-background duration-200">
        <div className="image">
            <img src="https://picsum.photos/200" loading="lazy" alt="User" className="w-20 rounded-full mt-1 bg-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
            <p className="leading-tight">&quot;The printed book looks like original book. Kudos guys, loved you work, will use only prinster going forward for any printing requirements&quot;</p>
            <p className="flex items-center gap-0.5"><FaStar color="#fcc200 " /> <FaStar  color="#fcc200  "/> <FaStar color="#fcc200 " /> <FaStar color="#fcc200 " /> <FaStar /> </p>
        </div>
    </div>
  )
}
