import './App.css';
import Form from './components/Form';
import FunctionSetInterval from './components/FunctionSetInterval';
import FunctionSetTimeout from './components/FunctionSetTimeout';

function App() {
  return (
    <div className="App  App-header">
      Hello, World!!
      <FunctionSetInterval />
      <FunctionSetTimeout />
      <Form />
    </div>
  );
}

export default App;
