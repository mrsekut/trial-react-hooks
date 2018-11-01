// src/comopnents/TrialUseState/index.tsx
import * as React from 'react';
const useState = React.useState;

export const TrialUseState = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  );
};

// export class TrialUseState extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };

//     this.setCount = this.setCount.bind(this);
//   }

//   setCount() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   render() {
//     return (
//       <>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.setCount}>click me</button>
//       </>
//     );
//   }
// }
