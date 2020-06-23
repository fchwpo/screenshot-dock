import { Browser, launch, BrowserOptions } from "puppeteer"
import { getDefaultViewPort } from "./config/config";

let browserInst:Browser;

export const getBrowserInstance = async (options: BrowserOptions):Promise<Browser> => {
	if(browserInst){
		return browserInst
	}
	//TODO run as user
	return await launch({
		timeout: 1000,
		executablePath: '/usr/bin/google-chrome-stable',
		args: [
			'--no-sandbox',
		],
		defaultViewport: getDefaultViewPort(),
		...options
	})
}