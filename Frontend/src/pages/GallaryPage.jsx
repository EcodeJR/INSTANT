import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';


const GallaryPage = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch images from your Node.js backend
    axios.get('http://localhost:5000/api/images')
      .then(response => {
        setImages(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, []);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };


    return ( 
        <>
            <div className="w-full h-fit flex flex-col items-center justify-center p-10 bg-primary">
                <motion.div
                initial={{ opacity:0, x: 50 }}
                animate={{ opacity:1, x:0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center py-10">
                  <div className='flex items-center justify-center w-full'>
                    <hr className="w-[10%] h-1 border-0 bg-secondary" />
                    <h1 className="text-4xl md:text-4xl font-bold text-white mx-5 text-center"> INSTANT GALLARY</h1>
                    <hr className="w-[10%] h-1 border-0 bg-secondary" />
                  </div>
                    
                    <blockquote className='text-xl text-white/70 text-center italic'>Capturing moments is like taking a fine wine – the best shots develop with time,<br /> and a good flash can make even the dullest subjects sparkle.</blockquote>
                </motion.div>
        </div>
        <div className='relative columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8 p-5 w-full'>
        {loading && <div className='w-full flex items-center justify-center'> <p className='text-xl font-semibold'>Loading...</p> </div>}
        {!loading &&
          images.map(image => (
            <img key={image.id} src={image.url} alt={image.alt} loading='lazy' onClick={() => openImageModal(image)} />
          ))
        }
        {/* Modal for displaying the larger image */}
      {selectedImage && (
        <div className="fixed top-0 left-0 bg-black/80 flex items-center justify-center w-screen h-screen p-20 z-40">
          <span className="absolute top-2 right-10 h-3 w-3 text-6xl font-bold text-red-600 cursor-pointer" onClick={closeImageModal}>&times;</span>
          <img src={selectedImage.url} alt={selectedImage.alt} className='block max-h-[70vh] max-w-[70vw]' />
        </div>
      )}
        </div>
        </>
     );
}
 
export default GallaryPage;