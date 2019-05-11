# Friend Finder

*Friend Finder* implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

## Installation

To install the application follow the instructions below:

	git clone https://github.com/QuyenHuynh/Friend-Finder.git
	cd friend-finder
	npm install
	
## Running Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=8000
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:8000`.

## Technologies used

* HTML
* Bootstrap CSS Framework
* Skeleton CSS Framework
* JQuery
* Node.js
* Express.js

## Future Improvements

* Aesthetic improvements
* Implement input validation