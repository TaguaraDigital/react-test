import PrivateRoute from './components/PrivateRoute'; 
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages";
import Clientes from "./pages/Clientes";
import SignUp from "./pages/WDS-SignUp";
import Login from "./components/accountBox";

// import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Header />
        <Route exact path='/' component={ Home } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/signUp' component={ SignUp } />
        <PrivateRoute exact path='/clientes' component={ Clientes } />
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
