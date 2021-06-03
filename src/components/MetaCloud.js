import '../css/components/component.metacloud.css';

export const MetaCloud = ({ activeTopic }) => {
  return (
    <div>
      <div>
        Information on topic: <span>{activeTopic.label}</span>
      </div>
      <div>
        Total mentions: <span>{activeTopic.volume}</span>
      </div>
      <div>
        Positive mentions: <span>{activeTopic.sentiment.positive || 0}</span>
      </div>
      <div>
        Neutral mentions: <span>{activeTopic.sentiment.neutral || 0}</span>
      </div>
      <div>
        Negative mentions: <span>{activeTopic.sentiment.negative || 0}</span>
      </div>
    </div>
  );
};
