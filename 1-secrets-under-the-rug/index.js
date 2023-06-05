const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
var validator = require('validator');

const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(express.json());

const PORT = 3000;

const SECRET = 'secret';
const ADMIN = 'admin';

app.post('/api/login', (req, res) => {
    const username = validator.escape(req.body.username);
    const user = { name: username };
    
    if (!username) {
        return res.status(400).json({ message: 'Username is required.' });
    }

    if (username == ADMIN) {
        return res.status(400).json({ message: 'Invalid username.' });
    }

    res.cookie('token', jwt.sign(user, SECRET), { httpOnly: true });
    return res.json({ success: true });
});

app.get('/api/content', authenticateToken, (req, res) => {
    const user = req.user;
    if (user == null || user.name !== ADMIN) {
        return res.status(403).json({ message: `Hello ${user}, you must be the admin to access this resource.`});
    }

    return res.json({ message: 'Well played, you\'re an official hack3r!!!' });
});

function authenticateToken(req, res, next) {
    const token = req.cookies.token;

    if (token == null) return res.status(403).json({ message: 'No token provided. Please log in.' });

    jwt.verify(token, SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token. Please log in again.' });
        req.user = user.name;
        next();
    });
}

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
