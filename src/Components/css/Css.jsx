import { FaCss3Alt } from 'react-icons/fa6';

const Css = ({ onChange }) => {
	return (
		<>
			<div>
				<header className='flex items-center gap-2 bg-slate-200 font-bold'>
					<FaCss3Alt size={25} color='#0070B9' /> <h1>CSS</h1>
				</header>
			</div>
			<textarea
				onChange={onChange}
				className='border-l-8 h-full ml-4 p-2 outline-none'></textarea>
		</>
	);
};

export default Css;
