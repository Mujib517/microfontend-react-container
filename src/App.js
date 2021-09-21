import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
const UsersApp = lazy(() => import('users/UsersApp'))


function App() {
  return (
    <div className="App">
      <h1>App Shell</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <UsersApp />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
