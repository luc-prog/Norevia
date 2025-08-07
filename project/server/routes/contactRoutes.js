import express from 'express';
import { ContactController } from '../controllers/contactController.js';

const router = express.Router();
const contactController = new ContactController();

// GET all contacts
router.get('/', contactController.getAllContacts);

// GET a single contact by ID
router.get('/:id', contactController.getContactById);

// POST a new contact
router.post('/', contactController.createContact);

// PUT/update a contact
router.put('/:id', contactController.updateContact);

// DELETE a contact
router.delete('/:id', contactController.deleteContact);

export { router as contactRoutes };