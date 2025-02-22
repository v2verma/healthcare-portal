import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Snackbar, Alert, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState("error");

  const navigate = useNavigate();

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: value && !validateEmail(value) ? "Invalid email format" : "",
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({
      ...prev,
      password: value && !validatePassword(value) ? "Password must be at least 6 characters" : "",
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault()
    setAlertType("success")
    setAlertOpen(true)
    setMessage("Login Successful")
  };
  

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField 
            label="Email" fullWidth margin="normal" variant="outlined" required
            value={email} onChange={handleEmailChange}
            error={!!errors.email} helperText={errors.email}
          />
          <TextField 
            label="Password" type="password" fullWidth margin="normal" variant="outlined" required
            value={password} onChange={handlePasswordChange}
            error={!!errors.password} helperText={errors.password}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}
            disabled={!email || !password || !!errors.email || !!errors.password}>
            Login
          </Button>
        </form>

        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Link href="#" onClick={() => navigate("/forgot-password")} underline="hover">
            Forgot Password?
          </Link>
          <Typography sx={{ mt: 1 }}>
            Don't have an account?{" "}
            <Link href="#" onClick={() => navigate("/signup")} underline="hover">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>

      <Snackbar 
        open={alertOpen} 
        autoHideDuration={3000} 
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setAlertOpen(false)} severity={alertType} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
