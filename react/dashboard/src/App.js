import './App.css';
import Form from './components/Form';
import FunctionSetInterval from './components/FunctionSetInterval';
import FunctionSetTimeout from './components/FunctionSetTimeout';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App  App-header">
      Hello, World!!
      <FunctionSetInterval />
      <FunctionSetTimeout />
      <Form />
      <ParentComponent />
    </div>
  );
}

export default App;
