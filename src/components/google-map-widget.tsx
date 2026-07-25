"use client"

export function GoogleMapWidget(): JSX.Element {
  return (
    <div className="size-full overflow-hidden rounded-[20px]">
      <iframe
        title="Google Maps location for Brian Oduor Physiotherapy in Nairobi"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.openstreetmap.org/export/embed.html?bbox=36.8047%2C-1.2674%2C36.8131%2C-1.2594&layer=mapnik&marker=-1.2634%2C36.8089"
      />
    </div>
  )
}
