import { HashRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import ProjectPage from './pages/ProjectPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projet/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
