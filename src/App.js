import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/HomeScreen';
import Projects from './screens/Projects';
import Question from './screens/Question';
import ReactDoc from './screens/ReactDoc';
import NavbarElements from './components/NavBarElements';
import Login from './screens/LoginScreen';
import LoginHandeler from './components/LoginHandeler';
import { KAKAO_AUTH_URL } from './components/Oauth';

function App() {
  return (
    <div className='app'>
      <NavbarElements />
      <a href={KAKAO_AUTH_URL} className="kakaobtn">
        <img src={process.env.PUBLIC_URL + `assets/kakaologin.png`} />
      </a>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/ReactDoc" element={<ReactDoc />} />
          <Route
            path="/login/oauth2/callback/kakao" //redirect_url
            element={<LoginHandeler />} //당신이 redirect_url에 맞춰 꾸밀 컴포넌트
          />
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
