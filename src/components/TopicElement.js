import '../css/components/component.topicelement.css';

export const TopicElement = ({ topic }) => {
  const { label } = topic;
  console.log(label);
  return (
    <div className="topic-element">
      <h4>{label}</h4>
    </div>
  );
};
