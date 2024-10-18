// src/pages/Contact.tsx
import React, { useEffect, useState } from 'react';
import { DatabaseResponse, Item } from '../types';


const Home: React.FC = () => {
    // const lat_user: Number = 40;
    // const long_user: Number = -5;
    // const dist: Number = 100;
    // const link: string = "https://g63a17579e548ca-teamqueso.adb.eu-madrid-1.oraclecloudapps.com/ords/usuariogeneral/api/sqlreport/" + lat_user + "/" + long_user + "/" + dist;
    const link: string = "https://g63a17579e548ca-teamqueso.adb.eu-madrid-1.oraclecloudapps.com/ords/usuariogeneral/embalsescompletos/"
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
        <div className="App">
            <div>
                <h2>Survey Data</h2>
                {data.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Embalse</th>
                                <th>X</th>
                                <th>Y</th>
                                <th>Demarc</th>
                                <th>Cauce</th>
                                <th>Google</th>
                                <th>OpenStreetMap</th>
                                <th>Wikidata</th>
                                <th>Provincia</th>
                                <th>CCAA</th>
                                <th>Tipo</th>
                                <th>Cota Coron</th>
                                <th>Alt Ciment</th>
                                <th>Informe</th>
                                <th>Id</th>
                                <th>Ambito Nombre</th>
                                <th>Embalse Nombre</th>
                                <th>Agua total</th>
                                <th>Es electrico</th>
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
                                    <td>{item.id}</td>
                                    <td>{item.ambito_nombre}</td>
                                    <td>{item.embalse_nombre}</td>
                                    <td>{item.agua_total}</td>
                                    <td>{item.electrico_flag}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </div>

    );
};

export default Home;
