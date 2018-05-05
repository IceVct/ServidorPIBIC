const path = require('path');
const express = require('express');
const router = express.Router();
const base64Img = require('base64-img');

router.post('/imagem', (req, res) => {
  console.log('file received');
  let destPath = './imagem/';
  let filename = 'foto';
  base64Img.img(req.body.foto, destPath, filename, function(err, filepath) {
    return res.send({
      filepath: filepath,
      success: true
    })
  });
  // const exec = require('child_process').exec;
  // const child = exec('/home/victor/UnB/PIBIC_Bruno/TutorialOpenCV/test ./imagem/foto', function(error, stdout, stderr, callback) {
  //   console.log(stdout);
  //   return res.send({
  //     resposta: stdout,
  //     success: true
  //   })
  // });

  
})
    
module.exports = router;