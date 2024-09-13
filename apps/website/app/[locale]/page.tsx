import { Hero, CustomersChallenges, OurServices, Pricing } from '@/components/marketing';

export default function Home() {
	return (
		<main className={'container py-24 space-y-32'}>
			<Hero />
			<CustomersChallenges />
			<OurServices />
			<Pricing />
		</main>
	);
}
