import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const id = nanoid();
    const { name } = contact;

    if (
      this.state.contacts.filter(
        contact => contact.name.toLowerCase === name.toLowerCase
      ).length > 0
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, ...contact }],
    }));
  };

  deleteItem = id => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(item => item.id !== id)],
    }));
  };

  onFilterChange = e => {
    const filter = e.target.value;
    this.setState({ filter: filter.toLowerCase() });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactFilter
          onChange={this.onFilterChange}
          filter={/* this.state. */ filter}
        />
        <ContactList
          onDelete={this.deleteItem}
          items={this.getFilteredContacts()}
        />
      </>
    );
  }
}

export default App;
