import './Blog.css';

const Blog = () => {

    const cards = [
        { title: "Title 1", description: "Description 1", img: "./src/assets/Logo.jpg" },
        { title: "Title 2", description: "Description 2", img: "./src/assets/Logo.jpg" },
        { title: "Title 3", description: "Description 3", img: "./src/assets/Logo.jpg" }
    ];

    return (
        <div className="container d-flex p-5">
            <div className="card-deck d-flex justify-content-around gap-5">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <img className="card-img-top" src={card.img} alt="Card cap" />
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-text">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
