import { TiHtml5 } from 'react-icons/ti';

const Html = ({ onChange }) => {
	return (
		<>
			<div>
				<header className='flex items-center gap-2 bg-slate-200 font-bold'>
					<TiHtml5 size={25} color='#E44D26' /> <h1>HTML</h1>
				</header>
			</div>
			<textarea
				name='html'
				onChange={onChange}
				className='border-l-8 h-full ml-4 p-2 outline-none'></textarea>
		</>
	);
};

export default Html;
