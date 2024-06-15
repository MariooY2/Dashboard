function DashboardHome() {
    return (
        <div>
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
    )
}

export default DashboardHome
