import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
    <div>
    <label>
      Add Location <input type="text" value="Tokyo"/>
    </label>
     <button>Search</button>
    </div>

    <div>
     <h2>Locations</h2>
     <table>
      <thead>
       <tr>
        <th>Name</th>
      </tr>
      </thead>
     <tbody>
       <tr><td>Paris</td></tr>
     </tbody>
     </table>
    </div>
   </div>
  );
}

export default App;
