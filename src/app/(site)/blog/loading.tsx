export default function BlogLoading() {
  return (
    <div className="min-h-screen pt-32 md:pt-28">
      <div className="container mx-auto px-6">
        {/* Header Skeleton */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="h-16 bg-card rounded-lg mb-6 animate-pulse"></div>
          <div className="h-6 bg-card rounded mb-4 animate-pulse max-w-2xl mx-auto"></div>
          <div className="h-6 bg-card rounded animate-pulse max-w-xl mx-auto"></div>
        </div>

        {/* Filter Skeleton */}
        <div className="flex justify-center gap-3 mb-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 w-16 bg-card rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Posts Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-[16/10] bg-card rounded-xl animate-pulse"></div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-card rounded-full animate-pulse"></div>
                  <div className="h-6 w-20 bg-card rounded animate-pulse"></div>
                </div>
                <div className="h-6 bg-card rounded animate-pulse"></div>
                <div className="h-4 bg-card rounded animate-pulse"></div>
                <div className="h-4 bg-card rounded animate-pulse w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
