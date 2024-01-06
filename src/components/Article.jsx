import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Article = () => {
    const { articleId } = useParams();
    // const article = articles.find((article) => article.id === parseInt(articleId));
    const article = articles.find((article) => article.id === articleId);

  const renderContent = () => {
    return article.content.map((paragraph, index) => {
      if (!isNaN(paragraph)) {
        // Assuming you have image URLs in the `images` array of the article
        const imageUrl = article.images[parseInt(paragraph)-1]
        // const imageUrl = article.images[index / 2]; // Divide by 2 to get the corresponding image index

        return <img key={index} src={imageUrl} alt={`Image ${index / 2 + 1}`} className="mb-4" />;
      } else {
        return <p key={index} className="mb-4">{paragraph}</p>;
      }
    });
  };

    return (
      <div className='bg-gray-700'>
        <div className='w-4/5 mx-auto pt-10'>
          <article className='p-8 rounded-md'> 
            <h2 className='text-3xl font-bold mb-4 text-[#227fe3]'>{article.title}</h2>
            <p className='text-gray-400 mb-4'>{article.date}</p>
            <div className='prose max-w-none text-[#fafadc]'>{renderContent()}</div>
              <div className="mt-6 flex flex-wrap text-gray-300 ">
                <div className="text-sm hover:text-red-700 flex mr-4">
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
                  </span>
                  <p>{article.place}</p>
                </div>
                {article.tags.map((tag, index) => (
                  <div key={index} className="text-sm hover:text-yellow-700 flex mr-4">
                    <span>
                      <FontAwesomeIcon icon={faTag} className="mr-1" />
                    </span>
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
          </article>
        </div>
      </div>
    );
};

export default Article;
