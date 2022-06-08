import ClassHeader from './components/header/header'
import ClassAbout from './components/about/about'
import ClassSkills from './components/skills/skills'
import ClassPortfolio from './components/portfolio/portfolio'
import ClassFooter from './components/footer/footer'
import Login from './components/Login/login'
import Register from './components/Register/register'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassHeader />
      <ClassAbout />
      <ClassSkills />
      <ClassPortfolio />
      <ClassFooter />
      <div className='container'>
        <div className='w-50 text-start pt-5'>
          <Login />
        </div>
        <div className='w-50 text-start pt-5'>
          <Register />
        </div>
      </div>
    </div >
  );
}

export default App;
