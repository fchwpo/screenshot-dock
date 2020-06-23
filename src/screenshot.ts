import { getBrowserInstance } from "./browser";
import { Browser } from "puppeteer";
import { v4 as uuid } from "uuid";
import { autoScroll } from "./utils/autoScroll";


async function generate(browserInst: Browser, url:string): Promise<void> {
	const newPage = await browserInst.newPage();
	await newPage.goto(url, {
		waitUntil: 'networkidle0'
	})
	await autoScroll(newPage)
	await newPage.waitFor(1000)
	const screenshotPath = 'output/' + uuid() + '.png'
	await newPage.screenshot({
		path: screenshotPath,
		fullPage: true,
		type: 'png'
	})
	console.log(`Generated Screenshot for ${url} \n ${screenshotPath}`)
}

export async function capture(url: string): Promise<void> {
	const browserInst = await getBrowserInstance({});
	console.log('Started for URL', url)
	generate(browserInst, url);
}
