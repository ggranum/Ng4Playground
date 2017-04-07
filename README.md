To reproduce the defect in Protractor/Asciidoctor.js:

```
# Clone this repo then run

npm install
npm run start 

# Open browser and verify that the app loads and that you can navigate to 
# http://localhost:4200/asciidoctor-panel

# Now run 
npm run e2e

# You will recieve a failure similar to: 
#    1) test-app-with-ng4 App should display message saying app works
#      - Failed: unknown error: Maximum call stack size exceeded
#        (Session info: chrome=57.0.2987.133)
#        (Driver info: chromedriver=2.29.461585 (0be2cd95f834e9ee7c46bcc7cf405b483f5ae83b),platform=Mac OS X 10.12.4 x86_64)

# Comment out the script include in ./src/index.html (it's annotated)
# Run tests again. They pass. 


```


