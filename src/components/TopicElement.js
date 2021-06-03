import '../css/components/component.topicelement.css';

export const TopicElement = ({ topic }) => {
  return (
    <div className="topic-element">
      <h4>{topic.label}</h4>
    </div>
  );
};
