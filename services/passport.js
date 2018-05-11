const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// console.developers.google.com
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
      // const existingUser = await User.findOne({ googleId: profile.id });
      // if (existingUser) {
      //   return done(null, existingUser);
      // }
      // const user = await new User({ googleId: profile.id }).save();
      // done(null, user);

      const user =
        (await User.findOne({ googleId: profile.id })) ||
        (await new User({ googleId: profile.id }).save());
      return done(null, user);
    },
  ),
);
