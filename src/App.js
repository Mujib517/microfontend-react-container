import React, { lazy, Suspense } from 'react';
const UsersApp = lazy(() => import('users/UsersApp'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <h1>App Shell</h1>
        <UsersApp />
      </Suspense>
    </div>
  );
}

export default App;
