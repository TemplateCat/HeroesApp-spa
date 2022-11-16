import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigate = useNavigate();

	const onLogin = () => {
		navigate('/', {
			replace: true,
		});
	};

	return (
		<div className="w-full h-screen flex items-center justify-center bg-gray-800">
			<div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
				<label className="font-light text-4xl mb-4">Login</label>
				<input
					type="text"
					className="w-full h-12 rounded-lg px-4 text-lg outline-none border-2 focus:border-cyan-500 mb-4"
					placeholder="Email"
				/>
				<input
					type="password"
					className="w-full h-12 rounded-lg px-4 text-lg outline-none border-2 focus:border-cyan-500 mb-4"
					placeholder="Password"
				/>
				<button
					className="w-full h-12 rounded-lg bg-cyan-500 uppercase font-semibold hover:bg-cyan-600 text-gray-100 transition mb-4"
					onClick={onLogin}
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
