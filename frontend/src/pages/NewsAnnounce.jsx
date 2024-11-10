import React from 'react';
import AutoScrollingBox from '../components/NewsScroll';

const newsItems1 = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation.',
  'Duis aute irure dolor in reprehenderit in voluptate velit.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
];

const newsItems2 = [
  'Pellentesque habitant morbi tristique senectus et netus.',
  'Nullam non nisi est, sit amet facilisis magna.',
  'Quisque non tellus orci ac auctor augue mauris.',
  'Aenean euismod elementum nisi quis eleifend quam.',
  'Vestibulum rhoncus est pellentesque elit ullamcorper.',
];

const newsItems3 = [
  'Vivamus at augue eget arcu dictum varius.',
  'Mauris in aliquam sem fringilla ut morbi tincidunt.',
  'Consectetur libero id faucibus nisl tincidunt eget.',
  'Id cursus metus aliquam eleifend mi.',
  'Tincidunt lobortis feugiat vivamus at augue eget arcu.',
];

const NewsAndAnnouncements = () => {
  return (
    <>
    <div>
    
    <div className="section-header text-center" style={{marginTop:'2%'}}>
        <h5>Spotlight and Announcements</h5>
        <h2>Excise News and Events</h2>
      </div>
    <div style={{display:'flex', gap: '2%'}}>
      <AutoScrollingBox title="Spotlight" items={newsItems1} bgColor="#007bff" />
      <AutoScrollingBox title="Announcements" items={newsItems2} bgColor="#9b59b6" />
      <AutoScrollingBox title="Latest News" items={newsItems3} bgColor="#e74c3c" />
    </div>
    </div>
   </>
  );
};

export default NewsAndAnnouncements;
