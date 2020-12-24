import { Component } from 'react';

import './App.css';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

const INITIAL_STATE = { good: 0, neutral: 0, bad: 0 };

class App extends Component {
  state = { ...INITIAL_STATE };

  handleFeedback = nameBtn => {
    this.setState({ [nameBtn]: this.state[nameBtn] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const result = Math.round((this.state.good / total) * 100);
    return total ? result : 0;
  }

  render() {
    const options = Object.keys(this.state).map(key => key);
    const { good, neutral, bad } = this.state;
    const totalFeedBack = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedBack}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
