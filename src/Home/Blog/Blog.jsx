import './Blog.css';
import AnimatedComponent from '../../AnimatedComponent';

const Blog = () => {

    const cards = [
        { title: "Title 1", description: "Description 1", img: "https://via.placeholder.com/300x250" },
        { title: "Title 2", description: "Description 2", img: "https://via.placeholder.com/300x250" },
        { title: "Title 3", description: "Description 3", img: "https://via.placeholder.com/300x250" }
    ];

    return (
        <div className="container p-5">
            <h1 className='mb-5'>Noticias</h1>
            <div className="card-deck d-flex justify-content-around gap-5">
                {cards.map((card, index) => (
                    <AnimatedComponent animationType={''} key={index} className="card">
                        <img className="card-img-top" src={card.img} alt="Card cap" />
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-text">{card.description}</p>
                        </div>
                    </AnimatedComponent>
                ))}
            </div>
        </div>
    );
}

export default Blog;
