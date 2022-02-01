import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/main.scss';
import { AppHeader } from './components/AppHeader';
import { DishDetails } from './pages/DishDetails';
import { HomePage } from './pages/HomePage';
import { Menu } from './pages/Menu';
import { Checkout } from './pages/Checkout';
import { AssembleDish } from './pages/AssembleDish';

function App() {
  return (
    <Router>
      <div className={'App main-layout'}>
        <AppHeader />
        <main>
          <Switch>
            <Route component={AssembleDish} path="/assembleDish/" />
            <Route exact component={DishDetails} path="/dish/:id" />
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
