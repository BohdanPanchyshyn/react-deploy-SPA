
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/homepage/homepage';
import PostsPage from './pages/postpage/postsPage';
import UsersPage from './pages/contactspage/users';
import UserPage from './pages/contactspage/user';
import PhotoPage from './pages/photopage/photoPage';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/posts' component={PostsPage} />
          <Route path='/photo' component={PhotoPage} />
          <Route path='/contacts' exact component={UsersPage} />
          <Route path='/contacts/:id' component={UserPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
