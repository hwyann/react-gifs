import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchForm from './components/SearchForm';
import SelectedGif from './components/SelectedGif';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

const Content = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchForm />
        <SelectedGif />
      </div>
      <div className="right-scene">
          <GifList />
      </div>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  // ReactDOM.render(<Hello name="World" />, root);
  ReactDOM.render(<Content />, root);
}
