export default function Header() {
  return (
    <header className="grid md:grid-cols-2 gap-8 py-10">
      <div className='md:text-left text-center'>
        <h1 className="md:text-6xl text-5xl">PLAY, COMPLETE, FOLLOW POPULAR STREAMERS</h1>
        <p className="mt-4 text-white/75">the best streamers pather here to have a good time, be among us, join us!</p>
      </div>
      <div className="px-2">
        <video controls loop autoPlay className="rounded-xl min-w-full aspect-video" src="videos/001.mp4"></video>
        <figcaption className="p-2 text-neutral-300">Battle for Street work</figcaption>
      </div>
    </header>
  )
}
