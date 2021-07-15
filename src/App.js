import './App.css';
import { Route } from 'react-router-dom'
import LoginPage from './LoginPage/LoginPage';
import DashBoard from './DashBoardPage/DashBoard'
import Header from './Header/Header';
import Footer from './UI/Footer/Footer';
import PaginationComponent from './UI/Pagination/Pagination';

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
      <Footer/>
    </div>
  );
}

export default App;
