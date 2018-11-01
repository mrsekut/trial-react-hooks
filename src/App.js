import * as React from 'react';
import './App.css';

import { TrialUseState } from './components/TrialUseState/index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TrialUseState initialValue={0} />
      </div>
    );
  }
}

export default App;
