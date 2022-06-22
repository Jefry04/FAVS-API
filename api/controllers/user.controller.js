const User = require ("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async signup (req, res){
    const passwordRegex = new RegExp(
      "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"
    );
    try{
      const { password, confirmPassword, email } = req.body;
      
      if (password !== confirmPassword) {
        res.status(403).json({ message: 'Contraseñas no coinciden' });
        return;
      }
      const validatePassword = passwordRegex.test(password);
      if(!validatePassword){
        res.status(403).json({ message: 'Contraseñas no es suficiemente fuerte'});
        return;
      }

      const encPassword = await bcrypt.hash(password, 8);
      
      const user = await User.create ({
        email,
        password: encPassword,
      })

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: 60 * 60 * 24,
      });

      res.status(200).json({ token, message: "User created" });
    }catch (error){
        res.status(400).json({ message: error.message });
    }
  },

  async login (req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Usuario o contraseña invalida");
      }
      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        throw new Error("Usuario o contraseña invalida");
      }
  
      const token = jwt.sign(
        { id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 * 24 }
      );
      
      res.status(200).json({ token, message: "User login successfully" });
    }catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
}
