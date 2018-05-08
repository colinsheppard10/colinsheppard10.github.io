import React from 'react';
import ModelBasicExample from './modelBasicExample';

const App = () => {
  return (
    <div className="ui vertical stripe quote segment">
      <div>
        <div className="ui equal width stackable internally celled grid">
          <div className="center aligned row">
            <ModelBasicExample values="one" heading="one" paragraph="one paragraph" />
            <ModelBasicExample values="two" heading="two" paragraph="two paragraph" />
            <ModelBasicExample values="three" heading="three" paragraph="three paragraph" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

