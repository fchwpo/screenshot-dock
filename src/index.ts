import { capture } from './screenshot'

//temp file to generate screenshots
const urls = [
	'https://preview.betatesting.jdseller.com/nikhitastores?forScreenshot=true',
	'https://previewshop.jdomni.com/riddhigemsjewels?forScreenshot=true',
	'https://previewshop.jdomni.com/diamondsupermart?forScreenshot=true',
	'https://marketplace.betatesting.jdseller.com/vendor/manage-products-genio/NW9tbm9RRWxtR09seVJiNUpRVmVKVkFyMjBLaGpJSFFPWXlSaVc5cVErQkx4OGFrd2JGdVVFMVdlMVAxZUxHNw==/products'
];

const urlResponseObj = {
	isSuccess: true,
	id: 'e08eec07-5604-4eb0-8f75-813e64a8f4df',
	websiteLinks: urls.join(','),
	cb: 'http://localhost:3000/screenshots-public/cb?themeId=1234',
	imageUrls: null,
	ssOptions: '{"a":"sdds"}',
	status: 'PENDING',
	type: 'THEME',
	creationTstamp: '2020-06-29T06:12:10.000Z',
	lastModifiedTstamp: '0000-00-00 00:00:00',
	ssServerIp: null,
	token: '3d047304-b0aa-11ea-9bbd-e03676ca53b0',
	errorMessage: null,
	ssAllocationTstamp: '0000-00-00 00:00:00',
};

(async function () {
	let promiseArr: any[] = []
	let {
		websiteLinks
	} = urlResponseObj;
	let ssOptions = {};
	try{
		ssOptions = JSON.parse(urlResponseObj.ssOptions) || {}
	} catch(e){}
	const urlsToCapture = websiteLinks ? websiteLinks.split(","): [];
	promiseArr = urlsToCapture.map((url) => capture(url, ssOptions))
	await Promise.all(promiseArr)
})()
