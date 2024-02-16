import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import MainLayout from './layouts/front/MainLayout';

const MainPage = loadable(() => import('./main/pages/MainPage'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
