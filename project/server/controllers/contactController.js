import { ContactDAO } from '../dao/contactDAO.js';

export class ContactController {
  constructor() {
    this.contactDAO = new ContactDAO();
  }

  getAllContacts = async (req, res, next) => {
    try {
      const contacts = await this.contactDAO.findAll();
      res.json(contacts);
    } catch (error) {
      next(error);
    }
  };

  getContactById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const contact = await this.contactDAO.findById(id);
      
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      
      res.json(contact);
    } catch (error) {
      next(error);
    }
  };

  createContact = async (req, res, next) => {
    try {
      const newContact = await this.contactDAO.create(req.body);
      res.status(201).json(newContact);
    } catch (error) {
      next(error);
    }
  };

  updateContact = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedContact = await this.contactDAO.update(id, req.body);
      
      if (!updatedContact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      
      res.json(updatedContact);
    } catch (error) {
      next(error);
    }
  };

  deleteContact = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await this.contactDAO.delete(id);
      
      if (!result) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}