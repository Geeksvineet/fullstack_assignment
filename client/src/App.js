import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminPanel from './pages/AdminPanel';

function App() {
   return (
       <Router>
           <Routes>
               <Route path="/" element={<LandingPage />} />
               <Route path="/admin" element={<AdminPanel />} />
               <Route path="*" element={<Navigate to="/admin" replace />} />
           </Routes>
       </Router>
   );
}

export default App;
