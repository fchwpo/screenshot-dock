import { capture } from "./screenshot";

//temp file to generate screenshots
const urls = [
	'https://preview.betatesting.jdseller.com/nikhitastores?forScreenshot=true',
	'https://previewshop.jdomni.com/riddhigemsjewels?forScreenshot=true',
	'https://previewshop.jdomni.com/diamondsupermart?forScreenshot=true',
	'https://marketplace.betatesting.jdseller.com/vendor/manage-products-genio/NW9tbm9RRWxtR09seVJiNUpRVmVKVkFyMjBLaGpJSFFPWXlSaVc5cVErQkx4OGFrd2JGdVVFMVdlMVAxZUxHNw==/products'
];

(async function (){
	let promiseArr:any[] = [];
	urls.forEach((url) => {
		promiseArr.push(capture(url))
	})
	await Promise.all(promiseArr);
})()