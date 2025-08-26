export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin border-t-primary mx-auto mb-4"></div>
        </div>
        <p className="text-muted text-small">Caricamento...</p>
      </div>
    </div>
  )
}
