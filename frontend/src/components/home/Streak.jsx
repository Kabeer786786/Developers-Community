export default function Streak() {
    return (
        <div className="bg-white p-4 max-w-[300px] rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Day 8</h2>
                {/* <span></span> */}
            </div>
            <div className="grid grid-cols-7 gap-2 mb-4">
                <span className="text-center font-bold">S</span>
                <span className="text-center font-bold">M</span>
                <span className="text-center font-bold">T</span>
                <span className="text-center font-bold">W</span>
                <span className="text-center font-bold">T</span>
                <span className="text-center font-bold">F</span>
                <span className="text-center font-bold">S</span>
                <span className="text-center bg-green-600 text-white rounded-full">1</span>
                <span className="text-center bg-green-600 text-white rounded-full">2</span>
                <span className="text-center bg-green-600 text-white rounded-full">3</span>
                <span className="text-center bg-green-600 text-white rounded-full">4</span>
                <span className="text-center bg-green-600 text-white rounded-full">5</span>
                <span className="text-center bg-green-600 text-white rounded-full">7</span>
                <span className="text-center bg-green-600 text-white rounded-full">6</span>
                <span className="text-center bg-green-600 text-white rounded-full">8</span>
                <span className="text-center bg-green-600 text-white rounded-full">9</span>
                <span className="text-center bg-green-600 text-white rounded-full">10</span>
                <span className="text-center bg-green-600 text-white rounded-full">11</span>
                <span className="text-center">12</span>
                <span className="text-center">13</span>
                <span className="text-center">14</span>
                <span className="text-center">15</span>
                <span className="text-center">16</span>
                <span className="text-center">17</span>
                <span className="text-center">18</span>
                <span className="text-center">19</span>
                <span className="text-center">20</span>
                <span className="text-center">21</span>
                <span className="text-center">22</span>
                <span className="text-center">23</span>
                <span className="text-center">24</span>
                <span className="text-center">25</span>
                <span className="text-center">26</span>
                <span className="text-center">27</span>
                <span className="text-center">28</span>
            </div>
            <div className="bg-blue-200 p-2 rounded-lg mb-4">
                <h3 className="font-bold">Recent Projects</h3>
                <div className="flex items-center mt-2">
                    <img src="chrome.png" alt="" className="mr-4 w-10 rounded-full" />
                    <div>
                        <h3 className="font-bold">Interactive Doodle Recogniser</h3>
                        <p className="text-indigo-600 cursor-pointer">Read More</p>
                        <div className="bg-gray-400 h-2 rounded-full mt-1">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 p-2.5 rounded-lg">
                <h3 className="font-bold">Active Forums</h3>
                <div className="flex items-center mt-2">
                    <img src="reactjs.png" alt="" className="w-12 mr-4" />
                    <div>
                        <h4 className="font-bold">Web Development</h4>
                        <p>Full Stack Development</p>
                        {/* <div className="bg-gray-400 h-2 rounded-full mt-1">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}