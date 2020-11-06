import './App.css'
import NavigationBar from './comps/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blogs from './comps/Blogs'
import Competitions from './comps/Competitions'
import Team from './comps/Team'
import ContactUs from './comps/ContactUs'



function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar sticky="top" />
        <Switch>

          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/competitions" component={Competitions} />
          <Route exact path="/contact-us" component={ContactUs} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
