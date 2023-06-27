import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image alt='picture' height={600} src={'http://localhost:3001/gallery/image/2023-06-22'} width={600} />
    </main>
  )
}
