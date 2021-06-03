import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MetaCloud } from './components/MetaCloud';
import { TopicElement } from './components/TopicElement';
import data from './topics.json';

describe('Wordwatch Testing Suite', () => {
  afterEach(cleanup);

  describe('Component: App.js', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
      render(<App />);
    });

    xit('renders welcome title', () => {
      render(<App />);
      const headerTitle = screen.getByText(/Wordwatch.js/i);
      expect(headerTitle).toBeInTheDocument();
    });

    it('Renders with initial topic data', () => {
      const app = render(<App />);
      const wordcloud = app.getAllByTestId('topic-element');
      expect(wordcloud.length).toBe(data.topics.length);
    });

    it('If a topic is selected, this topic appears in the metacloud', () => {
      const app = render(<App />);
      const topicElements = app.getAllByTestId('topic-element-h4');
      const activeTopic = app.getByTestId('active-topic-label');
      userEvent.click(topicElements[2]);

      expect(activeTopic.innerHTML).toEqual(topicElements[2].innerHTML);
    });
  });

  describe('Component: WordCloud', () => {
    afterEach(cleanup);

    /**
     * Tests ensuring screen reader accessibility
     */
    xit('Renders most popular topics largest', () => {});

    xit('Renders second most popular topics second largest', () => {});

    xit('Renders third most popular topics third largest', () => {});

    xit('Renders forth most popular topics forth largest', () => {});

    xit('Renders fifth most popular topics fifth largest', () => {});

    xit('Renders sixth most popular topics sixth largest', () => {});

    xit('Renders topics with a positive sentiment in green font', () => {});

    xit('Renders topics with a neutral sentiment in gray font', () => {});

    xit('Renders topics with a negative sentiment in red font', () => {});

    // TODO: how do we test actual screen element size? These tests would still pass if someone changed the class thereby changing the able-sighted user experience

    xit('If there are no topics, the user is meaningfully notified', () => {});

    xit('Renders the correct number of topics', () => {});
  });

  describe('Component: TopicElement', () => {
    it('Renders without crashing', () => {
      render(<TopicElement topic={data.topics[0]} />);
    });

    it('Renders the topic label text', () => {
      const topic = data.topics[0];
      const element = render(<TopicElement topic={topic} />);
      expect(element.getByText(topic.label).innerHTML).toBe(topic.label);
    });

    it('Handles a click event via props', () => {
      const topic = data.topics[0];
      const clickSpy = jest.fn();
      const wrapper = render(
        <TopicElement topic={topic} onWordSelect={clickSpy} />
      );
      const element = wrapper.getByRole('heading');
      userEvent.click(element);
      expect(clickSpy).toHaveBeenCalled();
    });
  });

  describe('Component: MetaCloud', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
      const activeTopic = data.topics[0];
      render(<MetaCloud activeTopic={activeTopic} />);
    });

    xit('If there is no topic selected, the component does not throw', () => {});

    xit('If there is no topic selected, the user is meaningfully notified', () => {});
  });
});
