// import logo from './logo.svg';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';

import './App.css';
import Examples from './components/Examples';

function App() {
  
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
