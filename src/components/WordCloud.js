import '../css/components/component.wordcloud.css';
import { TopicElement } from './TopicElement';
import data from '../topics.json';

export const WordCloud = () => {
  console.log(data.topics);
  return (
    <div className="wordcloud">
      {data.topics.map((topic, i) => (
        <TopicElement key={topic.id} topic={topic} />
      ))}
    </div>
  );
};
