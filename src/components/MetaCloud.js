import '../css/components/component.metacloud.css';

export const MetaCloud = ({ activeTopic }) => {
  return (
    <div>
      <p>
        Information on topic: <span>{activeTopic.label}</span>
      </p>
      <p>
        Total mentions: <span>{activeTopic.volume}</span>
      </p>
      <p>
        Positive mentions: <span>{activeTopic.sentiment.positive || 0}</span>
      </p>
      <p>
        Neutral mentions: <span>{activeTopic.sentiment.neutral || 0}</span>
      </p>
      <p>
        Negative mentions: <span>{activeTopic.sentiment.negative || 0}</span>
      </p>
    </div>
  );
};
