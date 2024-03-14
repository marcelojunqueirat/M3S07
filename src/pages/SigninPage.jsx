import { useState } from "react"
import { Link } from "react-router-dom";

function SigninPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Signin</h1>
      <form>
        <div className="w-150">
          <input placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  )
}

export default SigninPage;