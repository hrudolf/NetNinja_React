import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'App component';

  return (
    <div className="App">
      <Navbar /> {/* Alternative: <Navbar></Navbar> */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;