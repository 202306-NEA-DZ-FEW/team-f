// components/ArticleCard.js

import React from "react";

const ArticleCard = ({ title, location, date, content, imageUrl }) => {
    return (
        <div className='article-card'>
            {imageUrl && <img src={imageUrl} alt={title} />}
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{date}</p>
            <p>{content}</p>
        </div>
    );
};

export default ArticleCard;
