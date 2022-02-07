import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/main.scss';
import { AppHeader } from './components/AppHeader';
import { DishDetailsPage } from './pages/DishDetailsPage';
import { HomePage } from './pages/HomePage';
import { Menu } from './pages/Menu';
import { Checkout } from './pages/Checkout';
import { AssembleDish } from './pages/AssembleDish';
import CheckoutPreview from './components/CheckoutPreview';

function App() {
  return (
    <Router>
      <div className={'app '}>
        <div className="full-container">
          <AppHeader />
        </div>
        {/* <CheckoutPreview /> */}
        <main className=" main-layout">
          <Switch>
            <Route component={AssembleDish} path="/assembleDish/" />
            <Route exact component={DishDetailsPage} path="/dish/:id" />
            <Route component={Menu} path="/menu" />
            <Route component={Checkout} path="/checkout" />
            {/* <Route component={SignUp} path="/sign-up" /> */}
            <Route component={HomePage} path="/" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
