// Contact model definition
export class Contact {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.phone = data.phone;
    this.address = data.address;
    this.company = data.company;
    this.notes = data.notes;
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = data.updatedAt || new Date().toISOString();
  }

  // Validation method
  isValid() {
    return (
      this.firstName && 
      this.lastName && 
      this.email &&
      this.email.includes('@')
    );
  }

  // Format full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}