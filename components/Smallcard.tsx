import Image from 'next/image';

function Smallcard({img, location, distance}: {img: string; location: string; distance: string}) {
	return (
		<div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
			{/* left */}
			<div className='relative h-16 w-16'>
				<Image
				src={img} 
				fill
				alt='image'
				className='rounded-lg'
				style={{objectFit: 'contain'}}
				/>
			</div>
			{/* right */}
			<h2>
				{location}
			</h2>
			<h3 className='text-gray'>
				{distance}
			</h3>
		</div>
	)
}

export default Smallcard