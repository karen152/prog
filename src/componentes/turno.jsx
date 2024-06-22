import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { solicitud } from '../api/autenticacion';
import './turnos.css';

function Turnos() {
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [comentario, setComentario] = useState('');
    const [turnos, setTurnos] = useState([]);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        obtenerTurnos();
    }, []);

    const obtenerTurnos = async () => {
        try {
            const respuesta = await axios.get(solicitud);
            setTurnos(respuesta.data);
        } catch (error) {
            console.error('Error al obtener los turnos:', error);
        }
    };

    const reservarTurno = async (e) => {
        e.preventDefault();
        try {
            const nuevoTurno = { nombre, fecha, hora, comentario };
            await solicitud(nuevoTurno); // Llama a la función solicitud con nuevoTurno
            setMensaje('TURNO RESERVADO CON ÉXITO');
            obtenerTurnos(); // Actualiza la lista de turnos después de reservar uno nuevo
        } catch (error) {
            console.error('Error al reservar el turno:', error);
            setMensaje('ERROR: Este turno ya está reservado, elija otro');
        }
    };
    

    return (
        <div className='turno'>
            <h1>SOLICITUD DE VISITA</h1>
            <form onSubmit={reservarTurno}>
                <label>
                    Nombre:
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </label>

                <label>
                    Fecha:
                    <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                </label>

                <label>
                    Hora:
                    <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
                </label>

                <label>
                    Comentario:
                    <input type="text" value={comentario} onChange={(e) => setComentario(e.target.value)} required />
                </label>

                <button type="submit">SOLICITAR</button>
            </form>

            <p>{mensaje}</p>
            <h2>Turnos Reservados</h2>
            <ul>
                {turnos.map((turno, index) => (
                    <li key={index}>{turno.fecha} a las {turno.hora}</li>
                ))}
            </ul>
        </div>
    );
}

export default Turnos;
