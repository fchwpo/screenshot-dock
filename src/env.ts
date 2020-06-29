const CHROME_BINARY_PATHS = {
	LINUX: '/usr/bin/google-chrome',
	MAC: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
	WIN: 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
};

export const CHROME_BINARY_LOCATION = (():string => {
	if (process.env.CHROME_BINARY_LOCATION) {
		return process.env.CHROME_BINARY_LOCATION;
	}
	// By default if CHROME_BINARY_LOCATION is not specified
	return CHROME_BINARY_PATHS.LINUX
})();

export const BROWSERLESS_ARGS = ['--no-sandbox', '--enable-logging', '--v1=1'];
