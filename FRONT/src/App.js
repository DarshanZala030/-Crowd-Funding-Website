import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './index.css';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import ConsumerState from './Context/consumerState';
import Records from './Components/Records';
import ErrorPage from './Components/ErrorPage';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <ConsumerState>
      <div data-theme="garden" className="bg-base-100">
        <Navbar />
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/records" element={<Records />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </ConsumerState>
  );
}

export default App;
