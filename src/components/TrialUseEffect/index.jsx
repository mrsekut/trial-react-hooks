import * as React from 'react';

const useState = React.useState;
const useEffect = React.useEffect;

export const TrialUseEffect = () => {
  const [flg, setFlg] = useState(false);

  useEffect(
    () => {
      console.log('after rendering');
      return () => console.log('after');
    },
    [flg]
  );

  return (
    <>
      {console.log('rendering')}
      <p>flg: {flg ? 'true' : 'false'}</p>
      <button onClick={() => setFlg(!flg)}>click me</button>
    </>
  );
};
