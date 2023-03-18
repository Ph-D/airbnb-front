import type {NextPage} from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import Smallcard from '../components/Smallcard';

export default function Home({exploreData, cardsData}: {exploreData: any; cardsData: any}) {
	return (
		<div className=''>
			<Head>
				<title>PAPA Airbnb</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />
			{/* Banner */}
			<Banner />

			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
					{/* Pull some data from a server */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{exploreData?.record[0].map(
						({
							img,
							distance,
							location,
						}: {
							img: string;
							distance: string;
							location: string;
						}) => (
							<Smallcard img={img} distance={distance} location={location} key={location} />
						),
					)}
          </div>
				</section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>
            Live Anywhere
          </h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>

          {cardsData?.record[1].map((
            {img, title}: {img: string; title: string}
          ) => (
            <MediumCard key={img} img={img} title={title}/>
          ))}
        </div>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspired'
        />
        </section>
			</main>
      <Footer />
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch(
		'https://api.jsonbin.io/v3/qs/64154fd2ebd26539d090b17b',
	).then((res) => res.json());

  const cardsData = await fetch(
		'https://api.jsonbin.io/v3/qs/64154fd2ebd26539d090b17b',
	).then((res) => res.json());

	return {
		props: {exploreData, cardsData},
	};
}
