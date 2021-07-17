import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage/LoginPage';
import DashBoard from './DashBoardPage/DashBoard'
import Header from './Header/Header';
import Footer from './UI/Footer/Footer';
import PageNotFound from './UI/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact>
          <LoginPage/>
        </Route>
        <Route path='/employees'>
          <DashBoard/>
        </Route>
        <PageNotFound/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
