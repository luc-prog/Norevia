import { DatabaseConnection } from '../database/database.js';

export class ContactDAO {
  constructor() {
    this.db = DatabaseConnection.getInstance().getDatabase();
    this.initializeStatements();
  }

  initializeStatements() {
    this.findAllStmt = this.db.prepare('SELECT * FROM contacts ORDER BY lastName, firstName');
    this.findByIdStmt = this.db.prepare('SELECT * FROM contacts WHERE id = ?');
    this.createStmt = this.db.prepare(`
      INSERT INTO contacts (id, firstName, lastName, email, phone, category, notes, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    this.updateStmt = this.db.prepare(`
      UPDATE contacts 
      SET firstName = ?, lastName = ?, email = ?, phone = ?, category = ?, notes = ?, updatedAt = ?
      WHERE id = ?
    `);
    this.deleteStmt = this.db.prepare('DELETE FROM contacts WHERE id = ?');
  }

  findAll() {
    return this.findAllStmt.all();
  }

  findById(id) {
    return this.findByIdStmt.get(id);
  }

  create(contactData) {
    const now = new Date().toISOString();
    const id = Date.now().toString();
    
    const result = this.createStmt.run(
      id,
      contactData.firstName,
      contactData.lastName,
      contactData.email || null,
      contactData.phone || null,
      contactData.category || null,
      contactData.notes || null,
      now,
      now
    );

    if (result.changes === 0) {
      throw new Error('Failed to create contact');
    }

    return this.findById(id);
  }

  update(id, contactData) {
    const now = new Date().toISOString();
    
    const result = this.updateStmt.run(
      contactData.firstName,
      contactData.lastName,
      contactData.email || null,
      contactData.phone || null,
      contactData.category || null,
      contactData.notes || null,
      now,
      id
    );

    if (result.changes === 0) {
      return null;
    }

    return this.findById(id);
  }

  delete(id) {
    const result = this.deleteStmt.run(id);
    return result.changes > 0;
  }
}