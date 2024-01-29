import "./App.css";
import Category from "./Components/Category";
import Pages from "./Components/Pages/Pages";
import { BrowserRouter as Router } from 'react-router-dom'
import Search from "./Components/Search";
import Nav from "./Components/Nav";


function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  )
}

export default App;
