const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const kimo = async (text, type) => {
    const url = 'https://api.chimege.com/v1.2/kimo-short';
    const headers = {
        'Content-Type': 'application/json',
        'Token': '0bafe2202c500712139f47b9c828664b4012151c8a8acb7db84b82e56c8d3ac4',
        'Type': type
    };

    try {
        const response = await axios.post(url, { Text: text }, { headers });
        return response.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        return null;
    }
};

// app.get('/', async (req, res) => {
//     const result1 = await kimo("хэрэг", "to-mng");
//     // const result2 = await kimo("ᠮᠣᠩᠭᠤᠯ", "to-mn");
//     // res.send({ result1, result2 });
//     res.send(result1);
// });

app.get('/', async (req, res) => {
    const string = req.query.string;
    const eNum = req.query.eNum;

    const result = await kimo(string, eNum);
    console.log(result);
    res.json({ text: `${result}` });

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

