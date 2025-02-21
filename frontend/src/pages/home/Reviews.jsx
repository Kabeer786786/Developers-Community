import ReviewCard from "./ReviewCard";


export default function Reviews() {
  return (
    <div className="w-1/2 m-auto flex flex-col justify-start mt-14  pl-8 pr-8 text-gray-700 ">
        <h2 className="text-2xl sm:text-3xl text-gray-700  font-semibold mb-6 border-b-2  pb-3">Reviews</h2>
        <div className="flex flex-col gap-3 mt-6">
            <ReviewCard />  
            <ReviewCard />  
            <ReviewCard />  
            <ReviewCard />   
        </div>
    </div>
  )
}
