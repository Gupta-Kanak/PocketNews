import React, { Component } from "react";


export class NewsItem extends Component {
  render() {
    let { imageURL,title, desc, toURL, date } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text my-3"><small className="text-body-secondary">Last updated on {new Date(date).toGMTString()}</small></p>
            <a href={toURL} className="btn btn-sm btn-dark">
              Read More...
            </a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;