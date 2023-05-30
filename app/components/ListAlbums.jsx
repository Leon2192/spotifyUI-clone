import { Card } from './Card';
import Link from 'next/link';
import React from 'react'

export function ListAlbums(props) {
    const { title } = props;

    return (
        <div className='mb-8' >
            <div className='flex items-center justify-between mb-8'>
                <Link href='/' className='text-2xl font-bold text-gray-100 hover:underline'>{title}</Link>
                <Link href='/' className='uppercase text-xs font-bold tracking-[2px] hover:underline'>Ver todo</Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6a gap-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
