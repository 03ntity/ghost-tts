const OpenJTalk = require('./lib/openjtalk/openjtalk');
var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
var app = express();
const path = require('path');
const port = 9090;
const translate = require('@vitalets/google-translate-api');

var tohoku_angry = new OpenJTalk({ htsvoice: 'voice/tohoku/tohoku-f01-angry.htsvoice' });
var tohoku_happy = new OpenJTalk({ htsvoice: 'voice/tohoku/tohoku-f01-happy.htsvoice' });
var tohoku_natural = new OpenJTalk({ htsvoice: 'voice/tohoku/tohoku-f01-neutral.htsvoice' });
var tohoku_sad = new OpenJTalk({ htsvoice: 'voice/tohoku/tohoku-f01-sad.htsvoice' });
//
var mei_angry = new OpenJTalk({ htsvoice: 'voice/mei/mei_angry.htsvoice' });
var mei_happy = new OpenJTalk({ htsvoice: 'voice/mei/mei_happy.htsvoice' });
var mei_bashful = new OpenJTalk({ htsvoice: 'voice/mei/mei_bashful.htsvoice' });
var mei_sad = new OpenJTalk({ htsvoice: 'voice/mei/mei_sad.htsvoice' });
var mei_normal = new OpenJTalk();

app.enable('trust proxy');
app.use(cors())
app.use(secure)

app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/tts/1/angry', async (req, res) => {
  var text = req.query.text;
  if (!text) return res.json({
    status: 500,
    msg: "Masukkan Param Text!"
  });
  try {
    var wavname = 'results/sounds';
    translate(text, { to: 'ja' }).then(hasil => {
      mei_angry.talk(wavname, hasil.text);
      res.sendFile(__dirname + '/' + wavname + '.wav');
    }).catch(err => {
      console.error(err);
    });
  } catch (e) {
    res.json({
      status: 400
    });
  }
});

app.get('/tts/1/happy', async (req, res) => {
  var text = req.query.text;
  if (!text) return res.json({
    status: 500,
    msg: "Masukkan Param Text!"
  });
  try {
    var wavname = 'results/sounds';
    translate(text, { to: 'ja' }).then(hasil => {
      mei_happy.talk(wavname, hasil.text);
      res.sendFile(__dirname + '/' + wavname + '.wav');
    }).catch(err => {
      console.error(err);
    });
  } catch (e) {
    res.json({
      status: 400
    });
  }
});

app.get('/tts/1/bashful', async (req, res) => {
  var text = req.query.text;
  if (!text) return res.json({
    status: 500,
    msg: "Masukkan Param Text!"
  });
  try {
    var wavname = 'results/sounds';
    translate(text, { to: 'ja' }).then(hasil => {
      mei_bashful.talk(wavname, hasil.text);
      res.sendFile(__dirname + '/' + wavname + '.wav');
    }).catch(err => {
      console.error(err);
    });
  } catch (e) {
    res.json({
      status: 400
    });
  }
});

app.get('/tts/1/sad', async (req, res) => {
  var text = req.query.text;
  if (!text) return res.json({
    status: 500,
    msg: "Masukkan Param Text!"
  });
  try {
    var wavname = 'results/sounds';
    translate(text, { to: 'ja' }).then(hasil => {
      mei_sad.talk(wavname, hasil.text);
      res.sendFile(__dirname + '/' + wavname + '.wav');
    }).catch(err => {
      console.error(err);
    });
  } catch (e) {
    res.json({
      status: 400
    });
  }
});

app.get('/tts/1/normal', async (req, res) => {
  var text = req.query.text;
  if (!text) return res.json({
    status: 500,
    msg: "Masukkan Param Text!"
  });
  try {
    var wavname = 'results/sounds';
    translate(text, { to: 'ja' }).then(hasil => {
      mei_normal.talk(wavname, hasil.text);
      res.sendFile(__dirname + '/' + wavname + '.wav');
    }).catch(err => {
      console.error(err);
    });
  } catch (e) {
    res.json({
      status: 400
    });
  }
});

app.get('/tts/2/angry', async (req, res) => {
  var text = req.query.text;
  if (!text) return res.json({
    status: 500,
    msg: "Masukkan Param Text!"
  });
  try {
    var wavname = 'results/sounds';
    translate(text, { to: 'ja' }).then(hasil => {
      tohoku_angry.talk(wavname, hasil.text);
      res.sendFile(__dirname + '/' + wavname + '.wav');
    }).catch(err => {
      console.error(err);
    });
  } catch (e) {
    res.json({
      status: 400
    });
  }
});

app.get('/tts/2/happy', async (req, res) => {
  var text = req.query.text;
  if (!text) return res.json({
    status: 500,
    msg: "Masukkan Param Text!"
  });
  try {
    var wavname = 'results/sounds';
    translate(text, { to: 'ja' }).then(hasil => {
      tohoku_happy.talk(wavname, hasil.text);
      res.sendFile(__dirname + '/' + wavname + '.wav');
    }).catch(err => {
      console.error(err);
    });
  } catch (e) {
    res.json({
      status: 400
    });
  }
});

app.get('/tts/2/normal', async (req, res) => {
  var text = req.query.text;
  if (!text) return res.json({
    status: 500,
    msg: "Masukkan Param Text!"
  });
  try {
    var wavname = 'results/sounds';
    translate(text, { to: 'ja' }).then(hasil => {
      tohoku_natural.talk(wavname, hasil.text);
      res.sendFile(__dirname + '/' + wavname + '.wav');
    }).catch(err => {
      console.error(err);
    });
  } catch (e) {
    res.json({
      status: 400
    });
  }
});

app.get('/tts/2/sad', async (req, res) => {
  var text = req.query.text;
  if (!text) return res.json({
    status: 500,
    msg: "Masukkan Param Text!"
  });
  try {
    var wavname = 'results/sounds';
    translate(text, { to: 'ja' }).then(hasil => {
      tohoku_sad.talk(wavname, hasil.text);
      res.sendFile(__dirname + '/' + wavname + '.wav');
    }).catch(err => {
      console.error(err);
    });
  } catch (e) {
    res.json({
      status: 400
    });
  }
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});
