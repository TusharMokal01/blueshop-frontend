import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    login()
    navigate("/")
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <form onSubmit={handleRegister} className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center">Register</h2>
        <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b-2 border-white p-3" />
        <input type="email" placeholder="Email" className="w-full bg-transparent border-b-2 border-white p-3" />
        <input type="password" placeholder="Password" className="w-full bg-transparent border-b-2 border-white p-3" />
        <button className="w-full bg-white text-blue-700 py-3 rounded-xl font-semibold">Register</button>
      </form>
    </div>
  )
}