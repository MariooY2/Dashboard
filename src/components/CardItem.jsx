import Loader from "../UI/Loader1";
import { useState } from "react";
function CardItem({ title, link, image, description, source, date, sentiment }) {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };
    return (
        <div className="w-72 m-4 rounded overflow-hidden shadow-lg flex flex-col">
        <div className="w-full h-48 relative">
            {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
                    <Loader />
                </div>
            )}
            <img
                className={`w-full h-48 object-cover ${isLoading ? 'hidden' : 'block'}`}
                src={image}
                alt={title}
                onLoad={handleImageLoad}
            />
        </div>
        <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base line-clamp-3">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{source}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{new Date(date).toLocaleDateString()}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{sentiment}</span>
        </div>
        <div className="px-6 py-4">
            <a href={link} className="text-blue-500 hover:text-blue-800">Read more</a>
        </div>
    </div>
    );
}

export default CardItem;
