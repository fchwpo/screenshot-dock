import { Browser, launch, BrowserOptions } from "puppeteer"
import { getDefaultViewPort } from "./config/config";
import { BROWSERLESS_ARGS, CHROME_BINARY_LOCATION } from "./env";

let browserInst:Browser;

export const getBrowserInstance = async (options: BrowserOptions):Promise<Browser> => {
	if(browserInst){
		return browserInst
	}
	//TODO run as user
	return await launch({
		timeout: 1000,
		executablePath: CHROME_BINARY_LOCATION,
		args: BROWSERLESS_ARGS,
		defaultViewport: getDefaultViewPort(),
		...options
	})
}