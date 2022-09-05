
import Card from './сomponents/Card/Card';
import EmptyCard from './сomponents/EmptyCard/EmptyCard';
import { Route, Routes } from 'react-router-dom';
import Layout from './сomponents/Layout/Layout';






const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<EmptyCard />} />
          <Route path='card/:holiday' element={<Card />} />
        </Route>
        <Route path='singleCard/:idText/:idImg' element={<Card />} />
      </Routes>
  );
}

export default App;
