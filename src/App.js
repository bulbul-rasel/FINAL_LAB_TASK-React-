import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import {useState} from 'react'


function App() {

  

  return (
    <div >
      <Router>

        <Navbar/>
        <Switch>
          <Route path='/' exact>
              <h1>Home</h1>
          </Route>

          <Route path='/add' exact>
              <h1>Add</h1>
          </Route>

          <Route path='/diarylist' exact>
            <h1>Diary List</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
