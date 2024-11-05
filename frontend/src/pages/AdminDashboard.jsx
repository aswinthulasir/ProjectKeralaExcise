import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null); // Store the image file
  const [caption, setCaption] = useState('');

  useEffect(() => {
    // Fetch existing images on mount
    axios.get('/api/images').then((res) => setImages(res.data));
  }, []);

  const handleFileChange = (e) => {
    setNewImage(e.target.files[0]); // Set the selected file
  };

  const addImage = async () => {
    if (!newImage) return alert('Please select an image file');

    const formData = new FormData();
    formData.append('image', newImage);
    formData.append('caption', caption);

    try {
      const response = await axios.post('/api/images/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setImages([...images, { url: response.data.url, caption }]);
      setNewImage(null); // Clear the file input
      setCaption(''); // Clear the caption input
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const deleteImage = async (id) => {
    await axios.delete(`/api/images/${id}`);
    setImages(images.filter((image) => image._id !== id));
  };

  return (
    <div>
      <h2>Manage Carousel Images</h2>
      {/* Form to add new images */}
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <input
        type="text"
        placeholder="Image caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button onClick={addImage}>Add Image</button>
      <div>
        {images.map((image) => (
          <div key={image._id}>
            <img src={image.url} alt={image.caption} style={{ maxHeight: '200px' }} />
            <p>{image.caption}</p>
            <button onClick={() => deleteImage(image._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
