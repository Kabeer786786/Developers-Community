
export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-5xl font-bold mb-4">
          About Us
          <span className="text-purple-500">.</span>
        </h1>
        <p className="text-lg leading-relaxed">
          A one-man show, a passionate designer, developer and marketer dedicated to helping businesses of all sizes grow their online presence and reach their full potential.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="border-4 border-purple-500 p-2">
          <img
            src="https://storage.googleapis.com/a1aa/image/12cPWUXkg2WQbjzyd1jrFG18yFYfRzxC4N26qaLjH4o.jpg"
            alt="A cartoon character of a man in a suit and tie, waving and smiling"
            className="w-full h-auto"
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};
