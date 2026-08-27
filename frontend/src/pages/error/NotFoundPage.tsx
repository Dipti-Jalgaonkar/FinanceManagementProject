import React from "react";

const NotFoundPage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200 px-4">
                <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center max-w-md w-full">
                    <div className="text-7xl font-extrabold text-blue-500 mb-4">404</div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
                    <p className="text-gray-500 mb-6 text-center">Sorry, the page you are looking for does not exist or has been moved.</p>
                    <a href="/" className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors font-semibold">
                        Go Home
                    </a>
                </div>
                <div className="mt-8 text-gray-400 text-sm">&copy; {new Date().getFullYear()} FinanceOS</div>
            </div>
        </div>
    );
};

export default NotFoundPage;
