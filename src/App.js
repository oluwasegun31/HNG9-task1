import './App.css';
import Footer from './Components/footer';
import Links from './Components/link';
import Profile from './Components/profile';
import {Route, Routes} from 'react-router-dom'
import Form from './Components/form';



function App() {
  return (
    <div>
      <Routes>
        <Route 
          path='/'
          element = {
            <>
              <Profile />
              <Links />
              <Footer />
            </>
          }
        />

        <Route
          path='/contact'
          element = {
            <>
              <Form />
              <Footer/>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
