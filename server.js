const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookiesSessionn = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(
  cookiesSessionn({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT);
