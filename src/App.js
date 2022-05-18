import './App.css';
import contacts from "./contacts.json";
import {useState} from "react"; 



function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));
  const remainingContacts = contacts.slice(contact.length, contacts.length)
  
  const getRandomContact = () => {
    const random = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[random];
    remainingContacts.splice(random, 1)
    return randomContact;    
  }
  
  const updateContacts = () => {
    let newList = []
    contact.forEach(el => newList.push(el))
    newList.unshift(getRandomContact())
    setContact(newList)
    console.log(contact)
    console.log(remainingContacts)
  }

  return <div className="App">
      <h2>IronContacts</h2>
      <button onClick = {updateContacts}>Add random contact</button>
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

      {contact.map(contact => {
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
}


export default App;
