import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:5173',
    
}));

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/turnos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión exitosa a MongoDB');
}).catch((error) => {
    console.error('No se pudo conectar con MongoDB:', error);
});

// Esquema del turno
const turnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    }
});

// Modelo Turno
const Turno = mongoose.model('Turno', turnoSchema);

// Rutas para la API
// Rutas para la API
app.post('/turnos', async (req, res) => {
    const { nombre, fecha, hora, comentario } = req.body;
    try {
        const turnoExistente = await Turno.findOne({ nombre, fecha, hora, comentario });
        if (turnoExistente) {
            return res.status(400).send('Turno reservado');
        }
        const nuevoTurno = new Turno({ nombre, fecha, hora, comentario });
        await nuevoTurno.save();
        res.status(201).send(nuevoTurno);
    } catch (error) {
        console.error('Error al guardar el turno:', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.get('/turnos', async (req, res) => {
    try {
        const turnos = await Turno.find();
        res.send(turnos);
    } catch (error) {
        console.error('Error al obtener los turnos:', error);
        res.status(500).send('Error interno del servidor');
    }
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default Turno;
