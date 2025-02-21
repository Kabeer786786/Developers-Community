
export default function PricingPlans() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">What We Provide.</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Basic Plan */}
                <div className="bg-black border border-purple-500 rounded-lg p-6 w-full md:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">Basic</h2>
                    <p className="text-3xl font-bold mb-2">€750 + €50<span className="text-lg">/mo</span></p>
                    <hr className="border-t-2 border-orange-500 mb-4" />
                    <ul className="mb-6">
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Showcase Responsive Website</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>3 Design Revisions</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Digital Branding Assets</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Setup Social Accounts</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Basic Support</li>
                    </ul>
                    <button className="bg-purple-500 text-black font-semibold py-2 px-4 rounded">Select Plan</button>
                </div>
                {/* Pro Plan */}
                <div className="bg-black border border-purple-500 rounded-lg p-6 w-full md:w-1/3 relative">
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-purple-500 text-black font-semibold py-1 px-3 rounded-bl-lg">Recommended</div>
                    <h2 className="text-xl font-semibold mb-4">Pro</h2>
                    <p className="text-3xl font-bold mb-2">€1600 + €120<span className="text-lg">/mo</span></p>
                    <hr className="border-t-2 border-orange-500 mb-4" />
                    <ul className="mb-6">
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Full-Stack Responsive Website</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>SEO Optimization</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>10 Design Revisions</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Digital & Physical Branding Assets</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Social Media Marketing</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Priority Maintenance & Support</li>
                    </ul>
                    <button className="bg-purple-500 text-black font-semibold py-2 px-4 rounded">Select Plan</button>
                </div>
                {/* Enterprise Plan */}
                <div className="bg-black border border-purple-500 rounded-lg p-6 w-full md:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
                    <p className="text-3xl font-bold mb-2">€4800 + €320<span className="text-lg">/mo</span></p>
                    <hr className="border-t-2 border-orange-500 mb-4" />
                    <ul className="mb-6">
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Everything in Pro</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Mobile App Development</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Admin Panel & Tools</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Unlimited Design Revisions</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>VIP Maintenance & Support</li>
                    </ul>
                    <button className="bg-purple-500 text-black font-semibold py-2 px-4 rounded">Select Plan</button>
                </div>
            </div>
            <button className="mt-8 bg-black border border-purple-500 text-white font-semibold py-2 px-4 rounded">Or Get a Custom Quote</button>
        </div>
    );
};
