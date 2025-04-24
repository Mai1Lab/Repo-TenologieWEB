const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);
const PORT = 3000;

// Serviamo i file statici dalla cartella "public"
app.use(express.static(__dirname + '/public'));

// Gestione connessione socket
io.on('connection', (socket) => {
    console.log('✅ Nuova connessione socket');

    // Ricezione messaggio dal client
    socket.on('message', (message) => {
        console.log('📩 Messaggio ricevuto dal client:', message);

        // Rispondiamo al client
        socket.emit('message', `Server: hai detto "${message}"`);
    });

    socket.on('disconnect', () => {
        console.log('❌ Client disconnesso');
    });
});

httpServer.listen(PORT, () => {
    console.log(`🚀 Server in ascolto su http://localhost:${PORT}`);
});
