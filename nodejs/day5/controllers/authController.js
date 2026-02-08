const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

exports.signup = async (req, res) => {
  try {
    
    const { username, password, email } = req.body;
    
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const user = await User.create({ username, password, email });
    (async () => {
      const info = await transporter.sendMail({
        from: '"Tolba com" <mtolba2004@gmail.com>',
        to: email,
        subject: "Welcome ✔",
        text: `Welcome ${username}`, // Plain-text version of the message
        html: `<b>Welcome ${username} Tolba is very <h1> happy </h1> to see you</b>`, // HTML version of the message
      });
    
      console.log("Message sent:", info.messageId);
    })();
    res.status(201).json({ message: 'User created successfully', userId: user._id });
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    const email = user.email;

    (async () => {
      const info = await transporter.sendMail({
        from: '"Tolba com" <mtolba2004@gmail.com>',
        to: email,
        subject: "hello back ✔",
        text: `hello again ${username}`, // Plain-text version of the message
        html: `<b>hello again ${username} <h1> welcome back </h1></b>`, // HTML version of the message
      });
    
      console.log("Message sent:", info.messageId);
    })();

    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};