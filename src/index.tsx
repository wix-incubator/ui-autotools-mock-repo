import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AfterRenderHook} from './afterRenderHook/afterRenderHook';
import {ParentComp} from './composite/composite';
import {Portal} from './portal/portal';

const App: React.SFC = () => {
  return (
    <div>
      <div>
        Hey cool person
        <Portal root={rootContainer}>
          <span>Hey, I'm in a portal</span>
        </Portal>
      </div>
      <div>
        Other Div
      </div>
      <ParentComp />
      <AfterRenderHook />
    </div>
  );
};

const rootContainer = document.createElement('div');
rootContainer.id = 'app-root';
document.body.appendChild(rootContainer);
ReactDOM.render(<App />, rootContainer);
