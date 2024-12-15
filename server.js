const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    console.log(`Email: ${email}, Heslo: ${password}, Čas: ${new Date().toLocaleString()}`);

    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server běží na portu ${port}`);
}); 