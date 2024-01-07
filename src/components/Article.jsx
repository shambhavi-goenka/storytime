import React, {useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faLocationDot, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

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

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleTogglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

    return (
      <div className='bg-gray-700'>
        <div className='w-4/5 mx-auto pt-10'>
          <article className='p-8 rounded-md'> 
            <h2 className='text-3xl font-bold mb-4 text-[#227fe3]'>{article.title}</h2>
            <div className='flex items-center mb-5'>
              <p className='text-gray-400 mr-5'>{article.date}</p>
              <audio ref={audioRef} src={article.audio} />
              <button
                className="bg-emerald-800 w-10 h-10 text-white rounded-full p-2"
                onClick={handleTogglePlay}
              >
                {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
              </button>
            </div>
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
