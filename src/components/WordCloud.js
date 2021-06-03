import '../css/components/component.wordcloud.css';
import { TopicElement } from './TopicElement';
import data from '../topics.json';

export const WordCloud = ({ onWordSelect, willShuffle }) => {
  const onWordSelectHandler = (topic) => {
    onWordSelect(topic);
  };

  if (willShuffle) {
    data.topics.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="wordcloud" data-testid="wordcloud">
      {data.topics.map((topic, i) => (
        <TopicElement
          key={topic.id}
          topic={topic}
          onWordSelect={() => onWordSelectHandler(topic)}
        />
      ))}
    </div>
  );
};
