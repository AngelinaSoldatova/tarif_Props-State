import logo from './logo.svg';
import './App.css';
import './components/tarif.css';
import Tarif from './components/Tarif';
import React from 'react';

const tarif = [
  { bezlimit: "Безлимитный 300", ryb: "руб 300/мес", doc: "до 10 Мбит/сек" },
  { bezlimit: "Безлимитный 450", ryb: "руб 450/мес", doc: "до 50 Мбит/сек" },
  { bezlimit: "Безлимитный 550", ryb: "руб 550/мес", doc: "до 100 Мбит/сек" },
  { bezlimit: "Безлимитный 1000", ryb: "руб 1000/мес", doc: "до 200 Мбит/сек" }
];

class App extends React.Component {
  render() {
  return (
    <div className="App">
      {
        tarif.map((tarif) =>
          <Tarif bezlimit={tarif.bezlimit} ryb={tarif.ryb} doc={tarif.doc} key={tarif.bezlimit} />
        )
      }
    </div>
  );
  }
}

export default App;