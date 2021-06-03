import '../css/components/component.topicelement.css';

export const TopicElement = ({ topic }) => {
  return (
    <div className="topic-element" data-testid="topic-element">
      <h4 data-testid="topic-element-h4">{topic.label}</h4>
    </div>
  );
};
