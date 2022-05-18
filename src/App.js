import './App.css';
import contacts from "./contacts.json";
import {useState} from "react"; 

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));
  const [remainingContact, setRemainingContact] = useState(contacts.slice(5, contacts.length))

  const getRandomContact = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    const randomContact = arr[random];
    return [randomContact, random];    
  }

  const updateContacts = () => {
    let newList = []
    contact.forEach(el => newList.push(el))
    let randomData = getRandomContact(remainingContact)
    newList.unshift(randomData[0])
    setContact(newList)
    console.log("Element removed: ", randomData[0])
    updateRemainingContacts(randomData[0], randomData[1])


    console.log("Contacts: ", contact)
    console.log("Remaining contacts: ", remainingContact)
  }
  
  const updateRemainingContacts = (element, index) => {
    let newRemainingList = []
    remainingContact.forEach(el => newRemainingList.push(el))
    newRemainingList.splice(index, 1)
    setRemainingContact(newRemainingList)
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
