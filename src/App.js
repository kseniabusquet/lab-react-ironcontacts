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
    updateRemainingContacts(randomData[0], randomData[1])
  }
  
  const updateRemainingContacts = (element, index) => {
    let newRemainingList = []
    remainingContact.forEach(el => newRemainingList.push(el))
    newRemainingList.splice(index, 1)
    setRemainingContact(newRemainingList)
  }

  const sortByName = () => {
    const newArray = [...contact];
    newArray.sort(function(a, b) {
      const nameA = a.name.toUpperCase(); 
      const nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
        return 0;
    });
    setContact(newArray)
  }

  const sortByPopularity = () => {
    const newArray = [...contact];
    newArray.sort(function (a, b) {
      return a.popularity - b.popularity;
    });
    setContact(newArray)
  }

  const removeContact = (idContact) => {
    const filteredContacts = contact.filter(contact => {
      return contact.id !== idContact
    })
    setContact(filteredContacts)
  }

  return <div className="App">
      <h2>IronContacts</h2>
      {remainingContact.length ? 
      <div> 
      <button onClick = {updateContacts}>Add random contact</button>
      <button onClick = {sortByPopularity}>Sort by popularity</button>
      <button onClick = {sortByName}>Sort by name</button>
      <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        </thead>

      {contact.map(contact => {
        return (
          <tbody key = {contact.id}>
            <tr>
              <td><img src = {contact.pictureUrl} alt = "contact"/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar ? <td>🏆</td> : <td></td>}
              {contact.wonEmmy ? <td>🏆</td> : <td></td>}
              <td><button onClick={() => removeContact(contact.id)}>Delete</button></td>
            </tr>
            </tbody>
        );
      })}
      </table>
      </div> : <div>No more contacts to add </div>
      }
    </div>
}

export default App;
