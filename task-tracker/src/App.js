import Header from './components/Header';
import Tasks from './components/Tasks';

//reminder; this is a function component.... when using a CLASS
//component, we have to import React from 'react'; to use it
//class App extends React.Component ... etc

function App() {


  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
