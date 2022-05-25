import Header from './features/Header/Header';
import Home from './features/Home/Home';
import Subreddits from './features/Subreddits/Subreddits';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Subreddits />
    </div>
  );
}

export default App;
