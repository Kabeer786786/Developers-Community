import { MdEvent } from "react-icons/md";

const events = [
  {
    date: "April 4 - 13, 2025",
    title: "HACKHAZARDS '25: Build in India, for the World",
    url: "https://hackhazards25.devfolio.co/overview",
    description:
      "One of India's largest community-run hackathons, celebrating Indian developers with a prize pool exceeding $100,000. Open to participants from all corners of the country.",
  },
  {
    date: "March 21 - 23, 2025",
    title: "Hack This Fall 2025: 36-Hour In-Person Hackathon",
    url: "https://hackthisfall.devfolio.co/",
    description:
      "A welcoming and inclusive hackathon inviting hackers and builders from around the globe to collaborate and innovate.",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl flex items-center gap-2 text-gray-700 font-semibold mb-4"> <MdEvent /> Upcoming Events</h2>
      {events.map((event, index) => (
        <div key={index} className="mb-4 p-4 bg-purple-500/10 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <i className="fas fa-calendar-alt text-yellow-500 mr-2"></i>
            <span className="text-gray-500">{event.date}</span>
          </div>
          <a
            href={event.url}
            className="text-blue-600 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {event.title}
          </a>
          <p className="text-gray-700 mt-2">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
