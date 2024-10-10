import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import alt_img from "../news_image.jpeg";


export default function NewsComp(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalAv, setTotalAv] = useState(0);
  let title = `---Top ${props.category} headlines---`;

  const api_key = process.env.REACT_APP_API_KEY;
  

  const update = async () => {
    console.log("fetching....");
    let URL = `https://newsapi.org/v2/top-headlines?apiKey=${api_key}&category=${props.category}&page=${page}`;
    console.log(URL);
    let data = await fetch(URL);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalAv(parsedData.totalResults);
    setPage(2);
  };

  useEffect(() => {
    update();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let URL = `https://newsapi.org/v2/top-headlines?apiKey=${api_key}&category=${props.category}&page=${page}`;
    let data = await fetch(URL);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setPage(page + 1);
  };

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <h1 className="my-4" style={{ textAlign: "center" }}>
          {title}
        </h1>
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalAv}
      >
        <div className="container">
          <div className="row my-5">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem
                    imageURL={element.urlToImage ? element.urlToImage : alt_img}
                    title={element.title}
                    desc={element.description}
                    toURL={element.url}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
