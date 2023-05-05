import React from 'react';

const GifList = ({ gifs }) => {
  return (
    <div>
    <ul style={{listStyleType:'none'}}>
      {gifs.map(gif => (
        <li><img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} /></li>

      ))}
     </ul>
    </div>
  );
};

export default GifList;