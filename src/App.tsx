import Homepage from './pages/homepage/homepage';
import FullPerson from './pages/fullPerson/fullPerson';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/person/:id' element={<FullPerson />} />
      </Route>
    </Routes>
  );
}

export default App;
