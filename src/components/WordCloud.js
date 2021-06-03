import '../css/components/component.wordcloud.css';
import { TopicElement } from './TopicElement';
import data from '../topics.json';
import { useState } from 'react';

export const WordCloud = ({ onWordSelect, willShuffle }) => {
  const onWordSelectHandler = (topic) => {
    onWordSelect(topic);
  };

  const shuffledData = willShuffle
    ? data.topics.sort(() => Math.random() - 0.5)
    : data.topics;

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
