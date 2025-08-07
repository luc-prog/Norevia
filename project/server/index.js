import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { contactRoutes } from './routes/contactRoutes.js';

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/contacts', contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to SmartContact API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});