import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Dashboard from './features/dashboard/Dashboard';
import CreateAds from './features/ads/CreateAds';
import CreateTextAd from './features/ads/CreateTextAd';
import CreateMediaAd from './features/ads/CreateMediaAd';
import PageNotFound from './ui/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='create' element={<CreateAds />} />
          <Route path='dashboard' element={<Navigate replace to="/" />} />
          <Route path='create/text-ad' element={<CreateTextAd />} />
          <Route path='create/media-ad' element={<CreateMediaAd />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
