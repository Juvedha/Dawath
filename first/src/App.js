import ChefDetails  from "./components/ChefDetails";
import Footer from './components/Footer'
import MenuItems from './components/MenuItems'
import Home from './components/Home'
import './App.css'

const App=()=> (
    <div className="app-container">
        <Home/>
        <MenuItems/>
        <ChefDetails/>
        <Footer/> 
    </div>
)

export default App