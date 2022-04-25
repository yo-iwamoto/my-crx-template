import type { FC } from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

const App: FC = () => {
  return (
    <StrictMode>
      <input autoFocus type='text' onChange={async ({ target: { value } }) => navigator.clipboard.writeText(value)} />
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
