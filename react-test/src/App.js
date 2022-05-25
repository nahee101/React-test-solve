import './App.css';
import MemoClass from './components/MemoClass';
import MemoFunction from './components/MemoFunction';
import TestHook from './components/TestHook';

function App() {
  return (
    <div className="App">
      <TestHook />
      <MemoFunction />
      <MemoClass />
    </div>
  );
}

export default App;
