import './css/components/component.app.css';
import './css/generic/generic.resets.css';
import { Header } from './components/Header';
import { WordCloud } from './components/WordCloud';
import { MetaCloud } from './components/MetaCloud';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <div className="app__wordcloud-container">
          <WordCloud />
        </div>
        <div className="app_metaclouud-container">
          <MetaCloud />
        </div>
      </div>
    </div>
  );
}

export default App;
