import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.SFC = () => {
  return <div>
    Hey cool person
    </div>;
};

const rootContainer = document.createElement('div');
rootContainer.id = 'app-root';
document.body.appendChild(rootContainer);
ReactDOM.render(<App />, rootContainer);
