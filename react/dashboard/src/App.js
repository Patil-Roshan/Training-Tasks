import './App.css';
import Form from './components/Form';
import FunctionSetInterval from './components/FunctionSetInterval';
import FunctionSetTimeout from './components/FunctionSetTimeout';
import ParentComponent from './components/ParentComponent';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <div className="App  App-header">
      Hello, World!!
      <FunctionSetInterval />
      <FunctionSetTimeout />
      <Form />
      <ParentComponent />
      <ToggleButton /> 
    </div>
  );
}

export default App;
