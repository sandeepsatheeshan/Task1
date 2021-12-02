import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskComponent from './Components/TaskComponent';
import TaskView from './Components/TaskView';

function App() {
  return (
    <div className="App">
      <TaskComponent/>
      <TaskView/>
    </div>
  );
}

export default App;
