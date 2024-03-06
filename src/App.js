import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import MainLayout from './layouts/front/MainLayout';

const AdminMainLayout = loadable(() => import('./layouts/admin/MainLayout'));

const MainPage = loadable(() => import('./main/pages/MainPage'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));

/* 회원 관련 페이지 S */
const JoinPage = loadable(() => import('./member/pages/JoinPage')); // 회원가입
const LoginPage = loadable(() => import('./member/pages/LoginPage')); // 로그인
/* 회원 관련 페이지 E */

/* 마이페이지 S */
const MyMainPage = loadable(() => import('./mypage/pages/MainPage')); // 마이페이지 메인
/* 마이페이지 E */

/* 관리자 페이지 S */
const AdminMainPage = loadable(() => import('./admin/pages/MainPage')); // 관리자 메인페이지

/* 기본설정 S */
const BasicConfigPage = loadable(() =>
  import('./admin/config/pages/BasicConfigPage'),
);

/* 기본설정 E */

/* 회원관리 S */
const MemberListPage = loadable(() =>
  import('./admin/member/pages/MemberListPage'),
);

/* 회원관리 E */

/* 게시판 관리 S */
const BoardListPage = loadable(() =>
  import('./admin/board/pages/BoardListPage'),
);

const BoardAddPage = loadable(() => import('./admin/board/pages/BoardAddPage'));
const BoardEditPage = loadable(() =>
  import('./admin/board/pages/BoardEditPage'),
);
/* 게시판 관리 E */

/* 관리자 페이지 E */

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

        <Route path="*" element={<NotFound />} />
      </Route>

      {/* 관리자 페이지 S */}
      <Route path="/admin" element={<AdminMainLayout />}>
        <Route index element={<AdminMainPage />} />

        {/* 기본 설정 S */}
        <Route path="config/">
          <Route index element={<BasicConfigPage />} />
        </Route>
        {/* 기본 설정 S */}

        {/* 회원 관리 S */}
        <Route path="member/">
          <Route index element={<MemberListPage />} />
        </Route>
        {/* 회원 관리 E */}

        {/* 게시판 관리 S */}
        <Route path="board/">
          <Route index element={<BoardListPage />} />
          <Route path="add" element={<BoardAddPage />} />
          <Route path="edit/:bid" element={<BoardEditPage />} />
        </Route>
        {/* 게시판 관리 E */}

        <Route path="*" element={<NotFound />} />
      </Route>
      {/* 관리자 페이지 E */}
    </Routes>
  );
};

export default App;
