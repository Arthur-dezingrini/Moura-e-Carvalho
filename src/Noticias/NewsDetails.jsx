import React from 'react';
import newsData from './NewsData';
import { useParams } from 'react-router-dom';

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
      <iframe
              width={newsItem.video.width}
              height={newsItem.video.height}
              src={newsItem.video.src}
              title={newsItem.video.title}
              frameborder={newsItem.video.frameborder}
              allow={newsItem.video.allow}
        ></iframe>
    </div>
  );
};

export default NewsDetails;
