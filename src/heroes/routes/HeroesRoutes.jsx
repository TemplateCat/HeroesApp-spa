import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/Navbar';
import { DcPages, HeroPage, MarverPages } from '../pages';

import 'react-loading-skeleton/dist/skeleton.css';
import 'animate.css';
import { SearchHeroes } from '../pages/SearchHeroes';

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="marvel" element={<MarverPages />} />
				<Route path="dc" element={<DcPages />} />

				<Route path="search" element={<SearchHeroes />} />
				<Route path="hero/:id" element={<HeroPage />} />

				<Route path="/" element={<Navigate to="marvel" />} />
			</Routes>
		</>
	);
};
