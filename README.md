# angular-starter

This is an Angular starter app that allows serving static content with the http-server npm package and demonstrates basic functionality of Angular. It simply demonstrates the need for the 'ng-app' attribute and how to bind HTML expressions inside double curly braces {{}}. Later I'll demonstrate how to bind to data using the 'ng-model' attribute.

This project also uses Gulp which is a task/build runner. You can do things with it such as uglify/obfuscate and minify js and css files and concatenate multiple js and/or css files to single files. It can also "watch" your source css and js files in realtime and as they change they are processed through the steps described previously. The details are beyond the scope of this project but uglified files are harder to decompile for security reasons and minified files run much faster in the browser.

In this example I don't use any of the advanced features of Gulp. This is just to demonstrate how to get started. I only use it here to copy source javascript and css files from the 'node_modules' directory to the 'app' directory. This prevents users from browsing all of the directories and files at the root of your application. Later I'll demonstrate how to copy custom javascript and css files and at the same time minifying and uglifying them.

In order to run the project, you must have node installed.

From the command line execute 'npm install' to restore the package dependencies.

Then execute the 'gulp' command to manipulate your css and javascript files. In this case they are only copied to the 'app' directory to be referenced by index.html. Later, I'll illustrate why this is important.

Then execute 'npm start' which will start the http server and open a web browser to the root of the project.

***I'm a web developer, not a Node developer. Therefore I use 'http-server' as a simple web server rather than wiring up complicated and convoluted (IMO) routing and file serving features through Node. Even the 'express' web server npm package is very complex to get working without a demo. Frameworks such as Angular use http-server to demo applications to focus on the JS framework rather than focusing on Node development.***
