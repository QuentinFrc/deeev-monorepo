import { cn } from '@/lib/utils';
/*import { LinkButton } from '@/components/ui/button';*/
import { Container } from '@repo/ui/container';

export const Creators = () => {
	return (
		<section
			className={'relative bg-gradient-to-br from-green-500 via-cyan-500 to-fuchsia-500'}>
			<div
				className={cn(
					'absolute -inset-y-1 inset-x-0 overflow-x-hidden',
					'bg-gradient-to-br from-green-500 via-cyan-500 to-fuchsia-500 opacity-60 blur-xl',
				)}
			/>
			<Container className={'relative py-16'} size={'lg'}>
				<div className={'relative z-10 flex flex-col items-center gap-6 px-2 sm:px-0'}>
					<h2 className="text-center text-6xl text-contrasted-max [text-wrap:balance]">
						Faite appel aux créateurs !
					</h2>
					{/*<LinkButton
						size={'lg'}
						href={'/contact'}
						variant={'secondary'}
						label={'Demander un devis'}
						className={'w-full xs:w-max'}
					/>*/}
				</div>
			</Container>
		</section>
	);
};
