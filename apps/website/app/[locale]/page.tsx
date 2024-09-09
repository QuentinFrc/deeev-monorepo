import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('homepage');

	return <main>Hello, world!</main>;
}
