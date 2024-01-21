import { Routes , Route } from 'react-router-dom';
import './App.css';
import AuthDetail from './component/auth/AuthDetail';
import GoogleSign from './component/auth/GoogleSign';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp'

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/google-sign' element={<GoogleSign />} />
      <Route path='/auth-detail' element={<AuthDetail />} />
    </Routes>
    
  );
}

export default App;
