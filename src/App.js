import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from "./pages/MainPage/Home"
import Post from "./pages/CreatePage/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} >
          <Route index element={<Home/>} />
        </Route>
        <Route path="/Post" element={<Post/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* <BrowserRouter>
  <Routes>
      <Route path="/" element={<MainLayout/>} >
          <Route index element={<Home/>} />
      </Route>
      <Route path="/OTHER-PAGE" element={<MainLayout/>} >
          <Route index element={<OTHER-PAGE/>} />
      </Route>
  </Routes>
</BrowserRouter> */
