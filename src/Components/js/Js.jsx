import { SiJavascript } from 'react-icons/si';

const Js = ({ onChange }) => {
	return (
		<>
			<div>
				<header className='flex items-center gap-2 bg-slate-200 font-bold'>
					<SiJavascript size={25} color='#FFDF00' /> <h1>JS</h1>
				</header>
			</div>
			<textarea
				onChange={onChange}
				className='border-l-8 h-full ml-4 p-2 outline-none'></textarea>
		</>
	);
};

export default Js;
