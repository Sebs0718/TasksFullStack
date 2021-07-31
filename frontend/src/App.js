import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AllNotes from "./pages/AllNotes";
import CreateNote from "./pages/CreateNote";


function App() {
  return (
    <Router>
      <Route path='/create-note' component={CreateNote}/>
      <Route path='/' exact component={AllNotes}/>
    </Router>
  );
}

export default App;
