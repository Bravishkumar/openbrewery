import beer from './beer.png';
import cheers from './cheers.png';
import Breweries from './Components/Breweries/Breweries';

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-wrapper d-flex">
            <img src={cheers}  alt="Beer" />
            <h1 className="app-title">Chillers
                <span className="caption">Come and chill</span>
            </h1>
        </div>
      </header>
      <div className="app-container">        
        <div className="beer-img">
            <img src={beer} className="beer-img" alt="Beer" />
        </div>
        <div><Breweries /></div>
      </div>
    </div>
  );
}

export default Layout;
