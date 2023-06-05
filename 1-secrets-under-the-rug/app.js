const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.static('public'));
app.use(express.json());

const SECRET = 'weaksecret';

app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };
    
    // Sign JWT with weak secret
    const accessToken = jwt.sign(user, SECRET);
    res.json({ accessToken: accessToken });
});

app.get('/protected', authenticateToken, (req, res) => {
    if(req.user.name !== 'admin') {
        return res.status(403).json({ message: 'Invalid user. You must be an admin to access this resource.'});
    }
    res.json({ message: 'Well played, you\'re an official hack3r!!!' });
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(403).json({ message: 'No token provided. Please log in.' });

    jwt.verify(token, SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token. Please log in again.' });
        req.user = user;
        next();
    });
}

app.listen(3000);
