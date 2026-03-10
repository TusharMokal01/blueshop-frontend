export default function SkeletonCard() {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl animate-pulse">
      <div className="h-60 w-full bg-white/20" />
      <div className="p-6 space-y-3">
        <div className="h-6 bg-white/20 rounded w-3/4"></div>
        <div className="h-4 bg-white/20 rounded w-1/2"></div>
        <div className="h-10 bg-white/20 rounded-xl"></div>
      </div>
    </div>
  )
}