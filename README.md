# motorway-ui-test

Notes on the test:
- I chose a retro theme for colours and vibe to make it fun and to showcase many styles
- The build was tested on Google Chrome latest on Windows
- Responsive from iPhone SE, 6-8, iPad to Desktop 4K
- Large images were hosted on my FTP to enable new tab functionality 
- Styles use a SCSS structure and generate some redundant files due to my VSC current setup
- There could have been many refinements and a11y features added if this was for production
- I am open to clarify or discuss the choices for implementation but I preferred to refine more rather than add a lot of comments 

Thank you! 


# Notes on running the server:

https://github.com/motorway/motorway-ui-test

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

    Clone the repo and run npm install

    npm run serve will run the server

    in another terminal window npm run start will start CRA

After this, CRA will open a tab with the app running, usually localhost:3000. If you look in src/App.js you'll see the API call to the server is already made and will console log out the results.
