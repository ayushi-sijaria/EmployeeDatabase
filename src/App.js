import './App.css';
import { Route } from 'react-router-dom'
import LoginPage from './LoginPage/LoginPage';
import DashBoard from './DashBoardPage/DashBoard'
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path='/' exact>
        <LoginPage/>
      </Route>
      <Route path='/employees'>
        <DashBoard/>
      </Route>
    </div>
  );
}

export default App;
