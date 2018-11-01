import * as React from 'react';
import './App.css';

import { TrialUseState } from './components/TrialUseState/index';
import { TrialUseEffect } from './components/TrialUseEffect/index';
import { TrialCustomHooks } from './components/TrialCustomHooks/index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>2. Hooks at a Glance</h2>
          <div>
            <h3>useState</h3>
            <TrialUseState initialValue={0} />
          </div>
          <div>
            <h3>useEffect</h3>
            <TrialUseEffect />
          </div>
          <div>
            <h3>Costom Hooks</h3>
            <TrialCustomHooks initialValue={0} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
