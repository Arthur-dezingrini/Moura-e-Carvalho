import React from 'react';
import newsData from './NewsData';
import { useParams } from 'react-router-dom';
import './Noticias.css'

const NewsDetails = () => {
  const { id } = useParams();
  const newsId = parseInt(id);
  const newsItem = newsData.find(news => news.id === newsId);

  if (!newsItem) {  
    return <div>Notícia não encontrada</div>;
  }

  return (
    <div className='container p-5 gap-4 d-flex flex-column'>
      <h2>{newsItem.title}</h2>
      <p>{newsItem.contentReading}</p>
      {newsItem.video && (
        <div className="video-container">
          <iframe
            src={newsItem.video.src}
            title={newsItem.video.title}
            allow={newsItem.video.allow}
            width={newsItem.video.width}
            height={newsItem.video.height}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default NewsDetails;