import React from 'react';

const Iframe = ({ srcDocs }) => {
	return (
		<>
			<div className='border border-black h-full'>
				<iframe srcDoc={srcDocs} className='w-full h-full'></iframe>
			</div>
		</>
	);
};

export default Iframe;
