/* eslint-disable react/prop-types */

export default function Card({ imageURL, title }) {
    return (
        <div className="relative w-72 rounded-lg overflow-hidden group border-[3px] border-gray-200 hover:border-purple-500 duration-300 p-1.5 cursor-pointer">
            <div className="flex items-center justify-center">
                <img src={imageURL} className="h-60 w-full rounded-md group-hover:scale-110 transition-scale duration-300" />
                <div className="absolute overflow-hidden duration-200 ml-[35%] duration-200 flex justify-end items-center w-full bottom-4 -mb-1 bg-gray-200 min-h-12 rounded-full border-[3px] group-hover:border-purple-500">
                    <div className="absolute w-full inset-0 bg-gray-600 translate-x-full transition-transform duration-300 ease-in-out group-hover:-translate-x-10 z-0 rounded-l-full"></div>
                    <p className=" font-semibold text-lg p-1 pr-20 z-10 group-hover:text-gray-200">{title}</p>
                </div>
            </div>
        </div>
    )
}
