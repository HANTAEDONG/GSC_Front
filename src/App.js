import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/HomeScreen';
import Projects from './screens/Projects';
import Question from './screens/Question';
import ReactDoc from './screens/ReactDoc';
import NavbarElements from './components/NavBarElements';
import Login from './screens/LoginScreen';
import SocialKakao from './components/SocialKakao';

function App() {
  return (
    <div className='app'>
      <NavbarElements />
      <SocialKakao />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/ReactDoc" element={<ReactDoc />} />
        </Routes>
      </Router>
    </div >
  );
}


// const kakaoResponse = await axios.post(
//   'https://kapi.kakao.com/v2/user/me',
//   {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   },
// );
// idToken = kakaoResponse.data.id;
// name = kakaoResponse.data.kakao_account.profile.nickname;

export default App;
