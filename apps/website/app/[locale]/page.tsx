import {
	ContactUs,
	CustomersChallenges,
	FAQ,
	Hero,
	Logos,
	OurProcess,
	OurServices,
	Pricing,
} from '@/components/marketing';

export default function Home() {
	return (
		<main className={'space-y-32'}>
			<Hero />
			<CustomersChallenges />
			<OurServices />
			<Pricing />
			<OurProcess />
			<FAQ />
			<ContactUs />
		</main>
	);
}
