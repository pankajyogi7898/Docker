import react,{useState,useEffect} from "react"
import './index.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error))
  }, [])

  return (   
    <main className="app-shell">
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <ul>
            <li>{user.name}</li>
          </ul>
        </div>
      ))}
    </main>
  )
}

export default App
