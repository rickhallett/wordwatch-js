import { useState } from 'react';
import './css/components/component.app.css';
import './css/generic/generic.resets.css';
import { Header } from './components/Header';
import { WordCloud } from './components/WordCloud';
import { MetaCloud } from './components/MetaCloud';
import data from './topics.json';

function App() {
  const [activeTopic, setActiveTopic] = useState(data.topics[0]);

  const onWordSelectHandler = (topic) => {
    console.log(topic);
    setActiveTopic(topic);
  };

  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <div className="app__wordcloud-container">
          <WordCloud onWordSelect={(topic) => onWordSelectHandler(topic)} />
        </div>
        <div className="app_metaclouud-container">
          <MetaCloud activeTopic={activeTopic} />
        </div>
      </div>
    </div>
  );
}

export default App;
