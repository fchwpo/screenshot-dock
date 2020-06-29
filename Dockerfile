FROM node:10

RUN apt-get update
# for https
RUN apt-get install -yyq ca-certificates
# install libraries required by puppeteer 
RUN apt-get install -yyq libappindicator1 libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6
# tools wget and vim
RUN apt-get install -yyq gconf-service lsb-release wget xdg-utils vim
# and fonts
RUN apt-get install -yyq fonts-liberation 
# Install Chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install

COPY . /app

WORKDIR /app

RUN pwd

# Dont download Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD = true

# Set ENV to production
ENV NODE_ENV production

# Install Node Modules
RUN npm i

# Build
RUN npm run build

# Add user so we don't need --no-sandbox.
# RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
#     # && chown -R pptruser:pptruser /home/pptruser \
# 	&& mkdir -p /home/pptruser \
#     && chown -R pptruser:pptruser ./node_modules \
# 	&& chown -R pptruser:pptruser .

# RUN ls /home/pptruser

# USER pptruser

EXPOSE 3018
