import { getLocation } from "./getArea.js";


export const getNews = async() => {
  const data = await getLocation()
  const country = data[1]

  const news_API=`https://newsapi.org/v2/everything?q=${country}&apiKey=4cb86bd1af074d758a21a801c3f6f83e`
  const promise = await fetch(news_API)
  const news = await promise.json()

  return news
}

export const getNewsbyQuery = async(query) => {
  const news_API=`https://newsapi.org/v2/everything?q=${query}&apiKey=4cb86bd1af074d758a21a801c3f6f83e`
  const promise = await fetch(news_API)
  const news = await promise.json()

  return news
}