import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQtodos } from './components/RQtodos.page'
import { Todos } from './components/Todos.page'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/todos'>Traditional todos</Link>
            </li>
            <li>
              <Link to='/rq-todos'>RQ todos</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/todos'>
            <Todos />
          </Route>
          <Route path='/rq-todos'>
            <RQtodos />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
