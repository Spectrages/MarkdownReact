import FullPerson from './pages/fullPerson/fullPerson';
import React from 'react';
import AuthPage from './pages/auth/AuthPage';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout';
const Homepage = React.lazy(() => import ('./pages/homepage/homepage'));


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/person/:id' element={<FullPerson />} />
        <Route path='/auth' element = {<AuthPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
