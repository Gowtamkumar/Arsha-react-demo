import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/auth/Login';
import Registration from './Components/auth/Registration';
import ContactList from './Components/ContactList/ContactList';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/auth/PrivateRoute/PrivateRoute';
export const UserContext = createContext()
function App() {
  const [LoggedInUser, setLoggedInUser] = useState({})
  return (

    <main>
      <UserContext.Provider value={[LoggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/contactlist">
            <ContactList></ContactList>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

      </Router>
      </UserContext.Provider>
    </main>
  );
}

export default App;
