

function Dashboard() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg">
                <div className="h-16 flex items-center justify-center font-bold text-2xl">
                    Dashboard
                </div>
                <nav className="mt-10">
                    <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200" href="#">
                        Home
                    </a>
                    <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200" href="#">
                        Profile
                    </a>
                    <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200" href="#">
                        Settings
                    </a>
                    <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200" href="#">
                        Logout
                    </a>
                </nav>
            </div>
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between h-16 bg-white shadow px-4">
                    <div className="font-bold text-lg">Dashboard</div>
                    <div className="relative">
                        <input
                            type="text"
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            placeholder="Search..."
                        />
                        <svg
                            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.9 14.32a8 8 0 111.42-1.42l4.49 4.49-1.42 1.42-4.49-4.49zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </header>
                {/* Main */}
                <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Example Card */}
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <h2 className="font-bold text-lg mb-2">Card Title</h2>
                            <p className="text-gray-700">Card content goes here. This is a placeholder text.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <h2 className="font-bold text-lg mb-2">Card Title</h2>
                            <p className="text-gray-700">Card content goes here. This is a placeholder text.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <h2 className="font-bold text-lg mb-2">Card Title</h2>
                            <p className="text-gray-700">Card content goes here. This is a placeholder text.</p>
                        </div>
                        {/* Add more cards as needed */}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;

