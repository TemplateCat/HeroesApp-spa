import { useEffect, useMemo, useState } from 'react';
import { getPublisherById } from '../helpers/getPublisherById';
// import { LoaderSkeleton } from '../helpers/LoaderSkeleton';
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {
	const heroes = useMemo(() => getPublisherById(publisher), [publisher]);

	// const { loading } = LoaderSkeleton();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 600);
	}, []);

	return (
		<div className="grid grid-cols-12 gap-5 py-5">
			{heroes.map((heroe) => (
				<HeroCard key={heroe.id} loading={loading} {...heroe} />
			))}
		</div>
	);
};
