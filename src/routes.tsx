import { Routes, Route as ReactRoute, BrowserRouter } from 'react-router-dom';

import RootLayout from '@layouts/RootLayout';
import Home from '@pages/Home';
import Admin from '@pages/Admin';

const Route = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <ReactRoute path="/" Component={Home} />
          <ReactRoute path="/admin" Component={Admin} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default Route;
