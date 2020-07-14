const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

router.get('/', async (req, res, next) => {
  const txt = await fs.readFile(__dirname+'/../words.txt', 'utf8');
  const arr = txt.split('\n').map(word=>{
    return word.split('\n')[1] ? word.split('\n')[1].split('\r')[0] : word.split('\r')[0];
  });
  const result = [];
  arr.forEach((word, index) => {
    if (result.length >= 10) return;

    if (word.indexOf(JSON.parse(req.query.search)) > -1) {
      result.push({
          word: word,
          line: index+1
      })
    }
  });
  res.status(200).json(result);
});

module.exports = {
    path: '/search',
    router: router
};
