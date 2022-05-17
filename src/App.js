import './App.css';
import contacts from "./contacts.json";

function App() {
  return <div className="App">
    <ContactsList/>
  </div>;
}

function ContactsList() {

  const firstFive = [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4], contacts[5], contacts[6], contacts[7], contacts[8], contacts[9] ]
 
  return (
    <div className="list">
      <h2>IronContacts</h2>

      <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        </thead>

      {firstFive.map(contact => {
        return (
          <tbody key = {contact.id}>
            <tr>
              <td><img src = {contact.pictureUrl} alt = "contact"/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar === true && <td>🏆</td>}
              {contact.wonEmmy === true && <td>🏆</td>}
            </tr>
            </tbody>
        );
      })}
      
      </table>
    </div>
  );
}

export default App;
