import React from 'react';
import '../css/footercarousal.css'

// Array of images (you can replace these with your own image URLs)
const images = [
  'https://imgs.search.brave.com/Eai0t3Z9pRFOSJcNtnJg6N45IDPzLOcMj9Fl-drxQsU/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5h/cHBzdG9yZS5rZXJh/bGEuZ292LmluL21v/YmlsZWFwcHMvaW1n/L212ZCUyMGltLmpw/Zw',
  'https://imgs.search.brave.com/48VUcbh4fsX-fWFvTPvd_q9AKtIFLc1rdFrdlNTpUaU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0IvYnJlYWst/dGhlLWNoYWluLWNv/cm9uYS1rZXJhbGEt/bG9nby0zRjhENDA0/M0IyLXNlZWtsb2dv/LmNvbS5wbmc',
  'https://imgs.search.brave.com/pQnxCCuW2w2k21dKGQIthxk_iWBsCkVealcepMqey1E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0sva2VyYWxh/LXBvbGljZS1sb2dv/LUM2MTU5OTdBQTct/c2Vla2xvZ28uY29t/LnBuZw',
  'https://imgs.search.brave.com/g7XeTgz2Ps7fql3R0jY0CIAddysnrd28EjSxjpplqEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MjdiYzRlYzkwOWQ5/NWY3MzRkMjhmNTEu/cG5n',
  'https://imgs.search.brave.com/X8gr8OMvf03quowe8U0WFa2LkRCyRzUv8Fdtz8pkaeM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFmL0RpZ2lMb2Nr/ZXIuc3Zn',
  'https://imgs.search.brave.com/uXN3nqJ-7zRsThwbDFn5BUXE357xduDDrIZoYffMzLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U2L0hpZ2hfQ291/cnRfb2ZfS2VyYWxh/X0J1aWxkaW5nLmpw/Zw',
  'https://imgs.search.brave.com/1GVGkr3TJb6TNDzD-rHtY7KHlLx620a0y3rLMmpv6Bw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc3L0dvdmVybm1l/bnRfb2ZfS2VyYWxh/X0xvZ28ucG5n',
  'https://imgs.search.brave.com/48VUcbh4fsX-fWFvTPvd_q9AKtIFLc1rdFrdlNTpUaU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0IvYnJlYWst/dGhlLWNoYWluLWNv/cm9uYS1rZXJhbGEt/bG9nby0zRjhENDA0/M0IyLXNlZWtsb2dv/LmNvbS5wbmc',
];

const ImageCarousel = () => {
    
  return (
    
    <div className="scrolling-cards-container">
      <div className="scrolling-cards-track">
        {images.map((src, index) => (
          <div className="card-f" key={index}>
            <img src={src} alt={`Card ${index}`} className="card-image-f" />
          </div>
        ))}
        {images.map((src, index) => (
          <div className="card-f" key={`second-${index}`}>
            <img src={src} alt={`Card ${index}`} className="card-image-f" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
