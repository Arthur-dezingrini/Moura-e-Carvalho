import { Link } from 'react-router-dom';
import newsData from './NewsData';
import './Noticias.css'

const NewsList = () => {
  return (
    <div className='container p-5 d-flex flex-column gap-5'>
      <h2 className='title'>Ultimas Noticias</h2>
      <ul className='d-flex flex-wrap gap-5'>
        {newsData.map(newsItem => (
          <li key={newsItem.id} className='card d-flex flex-column w-25 notice-mobile'>
            <img src={newsItem.img} alt="" />
            <div className='p-2'>
              <h3>{newsItem.title}</h3>
              <p>{newsItem.content}</p>
              <Link to={`/Noticias/${newsItem.id}`}>Continue lendo</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
