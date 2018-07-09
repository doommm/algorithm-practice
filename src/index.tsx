import react, { ReactDOM } from 'react';
import { render } from 'react-dom';

class App extends react.Component {
  constructor() {
    super({});
  }
  render() {
    return (
      <div className="a">
        <h1>h1</h1>
        <h2>h2</h2>
        <p>p</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('#app'));
