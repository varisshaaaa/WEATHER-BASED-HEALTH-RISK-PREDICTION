import { useEffect, useState } from "react"

export default function App() {
  const [status, setStatus] = useState("Loading...")

  useEffect(() => {
    fetch("https://yaarfetch-production.up.railway.app/api/health")
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(() => setStatus("Backend not reachable"))
  }, [])

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Frontend Deployed Successfully 🎉</h1>
      <p>Backend status:</p>
      <strong>{status}</strong>
    </div>
  )
}
import { useEffect, useState } from "react"

export default function App() {
  const [status, setStatus] = useState("Loading...")

  useEffect(() => {
    fetch("https://yaarfetch-production.up.railway.app/api/health")
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(() => setStatus("Backend not reachable"))
  }, [])

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Frontend Deployed Successfully 🎉</h1>
      <p>Backend status:</p>
      <strong>{status}</strong>
    </div>
  )
}
