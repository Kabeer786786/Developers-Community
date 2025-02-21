import { useState } from 'react';
import { FiBell, FiClock, FiAlertCircle, FiInfo, FiCheckCircle } from 'react-icons/fi';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'System Update Available',
      message: 'Version 2.3.1 is now available for download',
      type: 'info',
      timestamp: '10 mins ago',
      read: false
    },
    {
      id: 2,
      title: 'Security Alert',
      message: 'Unusual login attempt detected from new device',
      type: 'alert',
      timestamp: '25 mins ago',
      read: false
    },
    {
      id: 3,
      title: 'Payment Received',
      message: 'You have received $1500 from Client Corp',
      type: 'success',
      timestamp: '2 hours ago',
      read: true
    },
    {
      id: 1,
      title: 'System Update Available',
      message: 'Version 2.3.1 is now available for download',
      type: 'info',
      timestamp: '10 mins ago',
      read: false
    },
    {
      id: 2,
      title: 'Security Alert',
      message: 'Unusual login attempt detected from new device',
      type: 'alert',
      timestamp: '25 mins ago',
      read: false
    },
    {
      id: 3,
      title: 'Payment Received',
      message: 'You have received $1500 from Client Corp',
      type: 'success',
      timestamp: '2 hours ago',
      read: true
    },
  ]);

  const newsItems = [
    {
      title: 'New Feature Launch',
      excerpt: 'Introducing advanced analytics dashboard',
      date: 'Mar 15, 2024'
    },
    {
      title: 'Mobile App Update',
      excerpt: 'iOS version 3.2 now available on App Store',
      date: 'Mar 14, 2024'
    },
    {
      title: 'Maintenance Schedule',
      excerpt: 'Planned system maintenance on March 20th',
      date: 'Mar 13, 2024'
    },
  ];

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  return (
    <div className="pt-16">
      <div className="relative flex w-[1400px] mt-0.5 overflow-y-hidden  p-2 m-auto bg-white">
        {/* Left Section - What's New */}
        <div className="w-1/4 mr-2 bg-gray-100 rounded-xl fixed">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold flex items-center">
              <FiInfo className="mr-2 text-blue-500" />
              What&apos;s New
            </h2>
          </div>
          <div className="overflow-y-auto h-[78vh] p-4">
            {newsItems.map((news, index) => (
              <div
                key={index}
                className="p-4 mb-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="font-semibold text-gray-800 mb-2">{news.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{news.excerpt}</p>
                <div className="flex items-center text-xs text-gray-400">
                  <FiClock className="mr-1" />
                  {news.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Notifications */}
        <div className="ml-auto w-[61.9em] bg-gray-100 rounded-xl ">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center">
              <FiBell className="mr-2 text-purple-500" />
              Notifications
            </h2>
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
            >
              Mark All as Read
            </button>
          </div>
          <div className="overflow-y-auto p-4">
            {notifications.map(notification => (
              <div
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-200 ${notification.read ? 'bg-gray-50' : 'bg-blue-50 border-l-4 border-blue-500'
                  } hover:bg-blue-50`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {notification.type === 'alert' && (
                      <FiAlertCircle className="w-5 h-5 text-red-500 mt-1" />
                    )}
                    {notification.type === 'info' && (
                      <FiInfo className="w-5 h-5 text-blue-500 mt-1" />
                    )}
                    {notification.type === 'success' && (
                      <FiCheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800">
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                    <div className="mt-2 flex items-center text-xs text-gray-400">
                      <FiClock className="mr-1" />
                      {notification.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;