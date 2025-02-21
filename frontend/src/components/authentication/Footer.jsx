{/* <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The NXT</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        body {
            background: linear-gradient(135deg, #6B73FF 0%, #000DFF 50%, #FF8C00 100%);
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel"> */}
export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <div className="flex flex-col items-center justify-center space-y-8 md:space-y-0 md:flex-row md:space-x-16">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Don&apos;t miss anything!</h1>
                    <div className="mt-4 flex items-center justify-center md:justify-start">
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-4 py-2 text-black rounded-l-md focus:outline-none"
                        />
                        <button className="px-4 py-2 bg-white text-black rounded-r-md">Sign Up</button>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://placehold.co/100x100"
                        alt="Logo of The NXT"
                        className="w-24 h-24"
                    />
                    <p className="mt-2 text-2xl font-semibold">The NXT</p>
                </div>
                <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-16">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-semibold">Follow Us</h2>
                        <ul className="mt-2 space-y-1">
                            <li>Instagram</li>
                            <li>Tik Tok</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-semibold">Explore</h2>
                        <ul className="mt-2 space-y-1">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Startup</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
