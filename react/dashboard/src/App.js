import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/projects';
import Location from './components/Location';
import Error404 from "./components/Error404";

function App() {
    return (
        <>
            <Navbar/>
            <div className="App App-headers">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/location' element={<Location/>}/>
                    <Route path='/*' element={<Error404/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
