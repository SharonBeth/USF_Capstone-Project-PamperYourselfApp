import logo from './logo.svg';
import './App.css';
import YouTubeApi from './YouTubeApi';


function App() {
  
  async function testing(data){
    try{
      let res = await YouTubeApi.loadClient();
      console.log(res);
      let test = await YouTubeApi.execute();
      console.log(test)
      return {success: true};
    }catch(error){
      console.error("Testing YouTube API for running it at the start.")
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={testing}>testing youtubeapi</button>
      </header>
    </div>
  );
}

export default App;
