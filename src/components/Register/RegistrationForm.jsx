import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Grid2,
  Card,
  CardContent,
  Typography,
  Container,
  Box
} from "@mui/material";
import { useApi} from '../../hooks/useApi';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phone: "",
    gender: "",
    status: "",
    role: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});

  // Validate a single field
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value) error = `${name === "firstName" ? "First" : "Last"} Name is required`;
        break;

      case "email":
        if (!value.match(/^\S+@\S+\.\S+$/)) error = "Invalid email address";
        break;

      case "password":
        if (value.length < 6) error = "Password must be at least 6 characters";
        break;

      case "phone":
        if (value && !value.match(/^\d{10}$/)) error = "Invalid phone number";
        break;

      case "gender":
      case "status":
      case "role":
        if (!value) error = `Please select ${name}`;
        break;

      case "city":
      case "state":
        if (!value) error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        break;

      case "zipCode":
        if (!value) error = "Zip Code is required";
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const allFieldsValid = Object.values(errors).every((err) => err === "");
    if (allFieldsValid) {
      console.log("Form Data Submitted:", formData);
      // Submit Data to Backend API
    }
  };

  return (
    <Container maxWidth="sm">
    <Box sx={{ mt: 8, mb:2, p: 4, boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
          📝 User Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={3}>
            <Grid2 item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid2>

            <Grid2 item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid2>

            <Grid2 item xs={12}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid2>

            <Grid2 item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid2>

            <Grid2 item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.dateOfBirth}
                onChange={handleChange}
                fullWidth
              />
            </Grid2>

            <Grid2 item xs={12} sm={6}>
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid2>

            <Grid2 item xs={12} sm={6}>
              <TextField
                select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                fullWidth
                error={!!errors.gender}
                helperText={errors.gender}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>
            </Grid2>

            <Grid2 item xs={12}>
              <TextField
                select
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                fullWidth
                error={!!errors.role}
                helperText={errors.role}
              >
                <MenuItem value="provider">Provider</MenuItem>
                <MenuItem value="patient">Patient</MenuItem>
              </TextField>
            </Grid2>

            <Grid2 item xs={12} sm={6}>
              <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                error={!!errors.city}
                helperText={errors.city}
              />
            </Grid2>

            <Grid2 item xs={12} sm={6}>
              <TextField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                fullWidth
                error={!!errors.state}
                helperText={errors.state}
              />
            </Grid2>

            <Grid2 item xs={12}>
              <TextField
                label="Zip Code"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                fullWidth
                error={!!errors.zipCode}
                helperText={errors.zipCode}
              />
            </Grid2>

            <Grid2 item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5, fontSize: "1rem" }}>
                Register
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </CardContent>
    </Box>
    </Container>
  );
};

export default RegistrationForm;
