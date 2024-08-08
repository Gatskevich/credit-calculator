import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const LazyCreditCalculator = lazy(() => {
  return import('../pages/CreditCalculator/CreditCalculator');
}); 

export function App() {
  return (
    <Router>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<LazyCreditCalculator />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
