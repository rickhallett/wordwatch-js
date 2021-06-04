import '../css/components/component.metacloud.css';

export const MetaCloud = ({ activeTopic }) => {
  return (
    <div className="metacloud">
      <div className="metacloud__row">
        <div>Info on topic: </div>
        <div data-testid="active-topic-label" className="bold">
          {activeTopic.label}
        </div>
      </div>
      <div className="metacloud__row">
        Total mentions: <div className="bold">{activeTopic.volume}</div>
      </div>
      <div className="metacloud__row">
        Positive mentions:{' '}
        <div className="bold">{activeTopic.sentiment.positive || 0}</div>
      </div>
      <div className="metacloud__row">
        Neutral mentions:{' '}
        <div className="bold">{activeTopic.sentiment.neutral || 0}</div>
      </div>
      <div
        className="
        metacloud__row"
      >
        Negative mentions:{' '}
        <div className="bold">{activeTopic.sentiment.negative || 0}</div>
      </div>
    </div>
  );
};
