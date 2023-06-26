// pages/api/login.js

import jwt from 'jsonwebtoken';
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { emailOrEmail, password } = req.body;
        try {
            const response = await axios.get(
                `https://localhost:44311/api/services/app/Person/GetAsyncByUsenameOrEmailAndPassword?userNameOrEmail=${emailOrEmail}&password=${password}`
            );

            const user = response.data.result;

            if (user) {
                const userId = user.id;
                const token = jwt.sign({ userId: userId }, 'secret-Key');
                res.status(200).json({ user, token });
            } else {
                res.status(400).json({ error: 'Invalid credentials' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Server error' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
