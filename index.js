const express = require('express');
const {authenticateUser} = require('./auth');
require('dotenv').config();

const app = express();
app.use(express.json());

// Función simulada para crear un registro
function createRegistro(data) {
    const { nombre, email, edad } = data;

    // Verificar que todos los campos necesarios estén presentes y sean válidos
    if (!nombre || !email || !edad) {
      return { success: false, message: "Todos los campos son requeridos" };
    }

    // Puedes agregar validaciones adicionales aquí (ejemplo: validar formato de email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "Email inválido" };
    }
    if (typeof edad !== 'number' || edad <= 0) {
      return { success: false, message: "Edad inválida" };
    }
    
    // Si pasa todas las validaciones, simular que el registro fue creado
    return { success: true, message: "Registro creado correctamente" };
  }
  
  // Endpoint para crear un registro
  app.post('/registro', (req, res) => {
    const data = req.body;
    const result = createRegistro(data);
  
    if (result.success) {
      res.status(201).json({ message: result.message });
    } else {
      res.status(400).json({ error: result.message });
    }
  });

app.post('/login', async(req, res) =>{

    const { username, password } = req.body;
    const token = authenticateUser(username, password);

    if (!token) {
        return res.status(401).json({
            error: "Credenciales inválidas"
        });
    }
    
    res.json({token});

});

module.exports = app;


