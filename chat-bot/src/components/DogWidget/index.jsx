// new file called DogPicture.jsx
import React, { useEffect, useState } from 'react';

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt='a dog' style={{maxWidth: 200}}/>
    </div>
  );
};

export default DogPicture;