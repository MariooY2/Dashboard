import CardItem from "./CardItem"
import data from "../Data/data"
function Cards() {
    return (
        <div className="flex flex-wrap justify-between">
            {data.map((item, index) => (
                <CardItem 
                    key={index}
                    title={item.title}
                    link={item.news_url}
                    image={item.image_url}
                    description={item.text}
                    source={item.source_name}
                    date={item.date}
                    sentiment={item.sentiment}
                />
            ))}
        </div>
    )
}

export default Cards
