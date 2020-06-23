import { Page } from "puppeteer";

export async function autoScroll(page: Page): Promise<void> {
	await page.evaluate(async () => {
		await new Promise((resolve) => {
			let totalHeight = 0
			const distance = 1920
			const timer = setInterval(() => {
				const scrollHeight = document.body.scrollHeight
				window.scrollBy(0, distance)
				totalHeight += distance

				if (totalHeight >= scrollHeight) {
					clearInterval(timer)
					resolve()
				}
			}, 15)
		})
	})
}