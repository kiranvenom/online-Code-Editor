import Html from '../Components/html/Html';
import Css from '../Components/css/Css';
import Js from '../Components/js/Js';
import Iframe from '../Components/iframe/Iframe';
import { useEffect, useState } from 'react';

const Home = () => {
	const [hcj, sethcj] = useState({ html: '', css: '', js: '' });
	const [srcDocs, setsrcDocs] = useState('');

	const handleHTML = (e) => {
		sethcj({ ...hcj, html: e.target.value });
	};

	const handleCSS = (e) => {
		sethcj({ ...hcj, css: e.target.value });
	};

	const handleJs = (e) => {
		sethcj({ ...hcj, js: e.target.value });
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setsrcDocs(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <style>${hcj.css}</style>
            </head>
            <body>
            ${hcj.html}
            <script>${hcj.js}</script> 
            </body>
            </html>`);
		}, 500);

		return () => clearTimeout(timeout);
	}, [hcj]);

	return (
		<>
			<div className='flex justify-between'>
				<div className='w-1/2 h-screen flex flex-col justify-between'>
					<Html onChange={handleHTML} />
					<Css onChange={handleCSS} />
					<Js onChange={handleJs} />
				</div>
				<div className='w-1/2 h-screen'>
					<Iframe srcDocs={srcDocs} />
				</div>
			</div>
		</>
	);
};

export default Home;
