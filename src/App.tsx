import { useState, useEffect } from "react";
import "./App.css";
import { DatabaseResponse, Item } from "./types";

function App() {
  const [data, setData] = useState<Item[]>([]);

  const fetchData = async (): Promise<Item[]> => {
    const response = await fetch(
      "https://g63a17579e548ca-teamqueso.adb.eu-madrid-1.oraclecloudapps.com/ords/usuariogeneral/agua/"
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result: DatabaseResponse = await response.json();
    return result.items || [];
  };

  useEffect(() => {
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);
  
  return (
    /*<div className="App">
      <h2>Survey Data</h2>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Agua_A</th>
              <th>Longitude</th>
              <th>Transect #</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Time of Detection</th>
              <th>Species</th>
              <th>Waypoint</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date_rw}</td>
                <td>{item.lat}</td>
                <td>{item.long_rw}</td>
                <td>{item["transect_#"]}</td>
                <td>{item.start_time}</td>
                <td>{item.end_time}</td>
                <td>{item.time_of_detection}</td>
                <td>{item.species}</td>
                <td>{item["waypoint_id#"]}</td>
                <td>
                  <a
                    href={item.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>*/
    <div className="App">
      <body>
        <header>
          <h1>Embalses</h1>
        </header>
        <main>
        <section id="search-section">
            <h2>Buscar Embalses de Agua</h2>
            <form id="search-form">
                <label htmlFor="search-query">Introduce el nombre del embalse:</label>
                <input type="text" id="search-query" name="search-query" placeholder="Embalse..." required></input>
                <button type="submit">Buscar</button>
            </form>
        </section>
        <section id="data-entry-section">
            <h2>Submit Water Deposit Data</h2>
            <form id="data-entry-form">
                <label htmlFor="deposit-name">Deposit Name:</label>
                <input type="text" id="deposit-name" name="deposit-name" required></input>
                
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" required></input>
                
                <label htmlFor="capacity">Capacity (in cubic meters):</label>
                <input type="number" id="capacity" name="capacity" required></input>
                
                <label htmlFor="condition">Condition:</label>
                <select id="condition" name="condition" required>
                    <option value="">Select...</option>
                    <option value="good">Good</option>
                    <option value="average">Average</option>
                    <option value="poor">Poor</option>
                </select>
                
                <button type="submit">Submit Data</button>
            </form>
        </section>
        </main>
      </body>
    </div>
  );
}



export default App;