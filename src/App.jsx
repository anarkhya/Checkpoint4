import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import ItemDetails from './pages/ItemDetails';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/itemList" element={<ItemList />} />
        <Route exact path="/itemList/:id" element={<ItemDetails />} />
        <Route
          exact
          path="/home"
          element={
            <Home
              titleh1="This is Floppizer"
              titleh2="What is Floppizer, really ?"
            />
          }
        />
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
