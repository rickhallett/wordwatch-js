import '../css/components/component.topicelement.css';

export const TopicElement = ({ topic, onWordSelect }) => {
  const onWordSelectHandler = (e) => {
    onWordSelect(e);
  };

  return (
    <div className="topic-element" data-testid="topic-element">
      <h4 data-testid="topic-element-h4" onClick={onWordSelectHandler}>
        {topic.label}
      </h4>
    </div>
  );
};
