import { useState, useEffect } from "react";
import "./App.css";
import { DatabaseResponse, Item } from "./types";

const lat_user: Number = 40;
  const long_user: Number = -5;
  const dist: Number = 100;
  const link: string = "https://g63a17579e548ca-teamqueso.adb.eu-madrid-1.oraclecloudapps.com/ords/usuariogeneral/api/sqlreport/" + lat_user + "/" + long_user+ "/" + dist;


function App() {
  const [data, setData] = useState<Item[]>([]);

  const fetchData = async (): Promise<Item[]> => {
    const response = await fetch(
      link
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
    <div>
    <div>
    <h2>Survey Data</h2>
      {data.length > 0 ?(
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Agua Actual</th>
              <th>Embalse</th>
              <th>Coordenada X</th>
              <th>Coordenada Y</th>
              <th>Demarc</th>
              <th>Cauce</th>
              <th>Google</th>
              <th>OpenStreetMap</th>
              <th>WikiData</th>
              <th>Provincia</th>
              <th>Comunidad Autónoma</th>
              <th>Tipo</th>
              <th>Cota Coron</th>
              <th>Alt Cimien</th>
              <th>Informe</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.embalse}</td>
                <td>{item.x}</td>
                <td>{item.y}</td>
                <td>{item.demarc}</td>
                <td>{item.cauce}</td>
                <td>{item.google}</td>
                <td>{item.openstreetmap}</td>
                <td>{item.wikidata}</td>
                <td>{item.provincia}</td>
                <td>{item.ccaa}</td>
                <td>{item.tipo}</td>
                <td>{item.cota_coron}</td>
                <td>{item.alt_cimien}</td>
                <td>{item.informe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
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
    </div>
  );
}



export default App;