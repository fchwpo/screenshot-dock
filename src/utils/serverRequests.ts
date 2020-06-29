import fetch from 'node-fetch';
import { SetStatus } from '../dto/setStatus';

export const setScreenshotStatus = (req: SetStatus) => {
	console.log(req);
	return;
	return fetch('http://localhost:3000/screenshots/setStatus?authKey=3d047304-b0aa-11ea-9bbd-e03676ca53b0',{
		method: 'post',
		body: JSON.stringify(req),
		headers: {'Content-Type': 'application/json'}
	}).
	then((res) => {
		console.log(res)
	})
}