import { useState, useEffect } from "react";
import "./App.css";
import { DatabaseResponse, Item } from "./types";

function App() {
  const [data, setData] = useState<Item[]>([]);

  const fetchData = async (): Promise<Item[]> => {
    const response = await fetch(
      "https://g63a17579e548ca-teamqueso.adb.eu-madrid-1.oraclecloudapps.com/ords/admin/capuchin_pop_survey_2015/"
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
    <div className="App">
      <h2>Survey Data</h2>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Latitude</th>
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
    </div>
  );
}



export default App;