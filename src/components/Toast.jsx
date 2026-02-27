export default function Toast({ message }) {
  return (
    <div className="fixed top-6 right-6 bg-green-500/90 px-6 py-3 rounded-2xl shadow-xl backdrop-blur-lg">
      {message}
    </div>
  )
}