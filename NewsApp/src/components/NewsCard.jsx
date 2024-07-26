import React, { useEffect, useState } from 'react';
import { getNews, getNewsbyQuery } from '../scripts/getNews';

const NewsCard = () => {
  const [news, setNews] = useState([]);
  const [query,setQuery] = useState('')

  useEffect(() => {
    getNews().then(newsData => {
      if (newsData && newsData.articles) {
        setNews(newsData.articles);
      }
    }).catch(error => {
      console.error('Error fetching news:', error);
    });
  }, []);

  const handleClick = () => {
    getNewsbyQuery(query.replace(' ','+')).then(newsData => {
      if (newsData && newsData.articles) {
        setNews(newsData.articles);
      }
    }).catch(error => {
      console.error('Error fetching news:', error);
    });
  }

  return (
    <>

    <div className='searchbar'>
      <input 
        type="text" 
        placeholder='Search for Something .....' 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleClick}>Search</button>
    </div><br /><br /><br />

    <div className='Latest-News'>
      {news.map((article, index) => (
        <div key={index} className="news">
          <img src={article.urlToImage} alt="" />
          <div className="more-info">
            <h2>{article.title}</h2>
            <p><span>{article.publishedAt}:<br/></span>{article.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default NewsCard;
