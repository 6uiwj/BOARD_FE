import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import MainLayout from './layouts/front/MainLayout';

const MainPage = loadable(() => import('./main/pages/MainPage'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));

/* 회원 관련 페이지 S */
const JoinPage = loadable(() => import('./member/pages/JoinPage')); //회원가입
const LoginPage = loadable(() => import('./member/pages/LoginPage')); //로그인

/* 회원 관련 페이지 E */

/* 마이페이지 S */
const MyMainPage = loadable(() => import('./mypage/pages/MainPage')); //마이페이지 메인
/* 마이페이지 E */

/* 관리자페이지 S */
const AdminMainPage = loadable(() => import('./admin/pages/MainPage')); //관리자메인페이지
/* 관리자페이지 E */

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />

        {/* 회원 S */}
        <Route path="member/">
          <Route path="join" element={<JoinPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        {/* 회원 E */}

        {/* 마이페이지 S */}
        <Route path="mypage/">
          <Route index element={<MyMainPage />} />
        </Route>
        {/* 마이페이지 E */}

        {/* 관리자 페이지S */}
        <Route path="admin/">
          <Route index element={<AdminMainPage />} />
        </Route>
        {/* 관리자 페이지E */}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
