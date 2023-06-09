import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ListAlbums } from './components/ListAlbums';

export const metadata = {
  title: 'Spotify clone',
  description: 'Generated by create next app',
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='pt-28 pl-72 pr-8'>
      <ListAlbums title="Spotify Playlist" />
    </div>
  )
}
