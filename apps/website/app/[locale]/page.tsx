import { Hero } from '@/components/hero';
import { CustomersChallenges } from '@/components/customers-challenges';
import { OurServices } from '@/components/our-services';
import { Pricing } from '@/components/pricing';

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
