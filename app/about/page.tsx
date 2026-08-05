export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
      <h1 className="text-4xl font-bold text-orange-500 md:text-6xl">About Us</h1>
      <p className="mt-4 max-w-2xl text-center text-gray-400">
        Demigod's Cricket Club is where passionate cricketers come to compete, 
        grow, and build lasting friendships. With over 325 active players and 
        550+ matches played, we are one of the most active clubs in the region.
      </p>
      <p className="mt-4 max-w-2xl text-center text-gray-500">
        Founded in 2020, our mission is to provide a professional yet fun 
        environment for players of all skill levels.
      </p>
    </main>
  );
}