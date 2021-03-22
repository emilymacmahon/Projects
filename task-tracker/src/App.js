import Header from './components/Header';
//reminder; this is a function component.... when using a CLASS
//component, we have to import React from 'react'; to use it
//class App extends React.Component ... etc

function App() {

  const name ="emily";

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
