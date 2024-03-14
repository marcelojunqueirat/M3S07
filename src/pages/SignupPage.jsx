import { useState } from "react"

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div className="w-150">
          <input placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  )
}

export default SignupPage;