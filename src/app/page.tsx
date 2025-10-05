import Image from "next/image";

export default function Home() {
  return (
  <div className="snap-y snap-mandatory h-screen overflow-scroll">
  <div className="snap-start h-screen bg-cover bg-center bg-[url('/bg1.jpg')] flex items-center justify-center text-white text-4xl">
    Section 1
  </div>

  <div className="snap-start h-screen bg-cover bg-center bg-[url('/bg2.jpg')] flex items-center justify-center text-white text-4xl">
    Section 2
  </div>

  <div className="snap-start h-screen bg-cover bg-center bg-[url('/bg3.jpg')] flex items-center justify-center text-white text-4xl">
    Section 3
  </div>

  <div className="snap-start h-screen bg-cover bg-center bg-[url('/bg4.jpg')] flex items-center justify-center text-white text-4xl">
    Section 4
  </div>

  <div className="snap-start h-screen bg-cover bg-center bg-[url('/bg5.jpg')] flex items-center justify-center text-white text-4xl">
    Section 5
  </div>
</div>
  );
}
