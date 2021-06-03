import '../css/components/component.topicelement.css';

export const TopicElement = ({ topic, onWordSelect }) => {
  const onWordSelectHandler = (topic) => {
    onWordSelect(topic);
  };

  const h1 = (
    <h1
      data-testid="topic-element-h1"
      onClick={() => onWordSelectHandler(topic)}
    >
      {topic.label}
    </h1>
  );

  const h2 = (
    <h2
      data-testid="topic-element-h2"
      onClick={() => onWordSelectHandler(topic)}
    >
      {topic.label}
    </h2>
  );

  const h3 = (
    <h3
      data-testid="topic-element-h3"
      onClick={() => onWordSelectHandler(topic)}
    >
      {topic.label}
    </h3>
  );

  const h4 = (
    <h4
      data-testid="topic-element-h4"
      onClick={() => onWordSelectHandler(topic)}
    >
      {topic.label}
    </h4>
  );

  const h5 = (
    <h5
      data-testid="topic-element-h5"
      onClick={() => onWordSelectHandler(topic)}
    >
      {topic.label}
    </h5>
  );

  const h6 = (
    <h6
      data-testid="topic-element-h6"
      onClick={() => onWordSelectHandler(topic)}
    >
      {topic.label}
    </h6>
  );

  const getHeadingElement = (topic) => {
    if (topic.volume >= 50) {
      return h1;
    } else if (topic.volume >= 40 && topic.volume < 50) {
      return h2;
    } else if (topic.volume >= 30 && topic.volume < 40) {
      return h3;
    } else if (topic.volume >= 20 && topic.volume < 30) {
      return h4;
    } else if (topic.volume >= 10 && topic.volume < 20) {
      return h5;
    } else if (topic.volume >= 0 && topic.volume < 10) {
      return h6;
    } else {
      return null;
    }
  };

  return (
    <div className="topic-element" data-testid="topic-element">
      {getHeadingElement(topic)}
    </div>
  );
};
