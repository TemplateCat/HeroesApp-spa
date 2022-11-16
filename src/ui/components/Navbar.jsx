import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<div className="py-5 px-10 bg-slate-800 flex items-center gap-20">
			<Link to="/" className="font-bold text-cyan-500 text-2xl">
				LOGO
			</Link>
			<ul className="flex gap-5 text-slate-200">
				<li>
					<NavLink
						to="/marvel"
						className={({ isActive }) => `${isActive && 'active'}`}
					>
						Marvel
					</NavLink>
				</li>
				<li>
					<NavLink to="/dc" className={({ isActive }) => `${isActive && 'active'}`}>
						DC
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/search"
						className={({ isActive }) => `${isActive && 'active'}`}
					>
						Busqueda
					</NavLink>
				</li>
			</ul>
			<div className="ml-auto">
				<span className="text-slate-200 mr-5">Hola Usuario!</span>
				<button
					className="py-2 px-4 bg-cyan-500 rounded-lg text-white hover:bg-cyan-600"
					onClick={onLogout}
				>
					Cerrar sesión
				</button>
			</div>
		</div>
	);
};
