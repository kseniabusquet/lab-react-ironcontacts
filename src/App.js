import './App.css';
import contacts from "./contacts.json";

function App() {
  return <div className="App">
    <ContactsList/>
  </div>;
}

function ContactsList() {

  const firstFive = [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
 
  return (
    <div className="list">
      <h2>IronContacts</h2>

      <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        </thead>

      {firstFive.map(contact => {
        return (
          <tbody key = {contact.id}>
            <tr>
              <td><img src = {contact.pictureUrl} alt = "contact"/></td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity*100)/100}</td>
            </tr>
            </tbody>
        );
      })}
      
      </table>
    </div>
  );
}

export default App;
