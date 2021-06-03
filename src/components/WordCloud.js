import '../css/components/component.wordcloud.css';
import { TopicElement } from './TopicElement';
import data from '../topics.json';

export const WordCloud = () => {
  return (
    <div className="wordcloud" data-testid="wordcloud">
      {data.topics.map((topic, i) => (
        <TopicElement key={topic.id} topic={topic} />
      ))}
    </div>
  );
};
