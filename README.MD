# &#9733; Hotel NoMa - San Francisco &#9733;

Hotel NoMa is a fictitious hotel based in San Francisco, CA. The client-side of this project is built 
using a Single Page Application (SPA) model and incorporates most core functionalities found on traditional hotel websites. 
The server-side of this application follows a RESTful API architecture to manipulate a database where 
itineraries are stored. Payments are handled externally through a third-party API.

# Live demo
<https://hotel-noma.herokuapp.com>

# Why this project
Many fortnights ago, I needed a hotel room for an out-of-town visit 
and spent way too much time shopping for an accommodation that optimized
pricing and location. Silly or not, my short-lived obsession encouraged me to dive deeper into the 
hotel reservation process. I soon realized that making my own hotel
website would be a great project for me to apply my knowledge and learn
from. I scribbled down a storyboard, added to the project piece by piece,
and here it is now... mostly complete but fully functional! 

# Table of contents
* [Built with](#builtWith)
* [Notable tools](#notableTools)
* [Core functionality](#core-functionality)
  * [Book a new itinerary](#new-itinerary)
  * [View and/or delete my itinerary](#viewDelete)
  * [Retrieve all itineraries](#all-itineraries)
  * [Contact management](#contact)
* [Application highlights](#highlights)
* [Application limitations and shortcomings](#limitationsAndShortcomings)
* [Potential features](#potentialFeatures)
* [Screenshots](#screenshots)
* [License](#license)

<a name="builtWith"></a>
## Built with
* React.js
* Redux
* Bootstrap
* HTML/CSS
* Node.js (Express)
* MongoDB (Mongoose)

<a name="notableTools"></a>
## Notable tools
* Stripe Payment API
* Google Maps API
* Heroku
* Moment.js
* nodemailer
* axios

<a name="core-functionality"></a>
## Core functionality

<a name="new-itinerary"></a>
<h5>Book a new itinerary:</h5>
Use the form on the homepage to specify the number of adults in your party and which dates you plan on entering and exiting 
the hotel. You cannot make an itinerary that starts in the past or an itinerary that 
is more than two months out from the current date. After clicking the 'Go!' button, you will be presented
with several guest room options. Make your selection and proceed to the checkout page. Here, you are encouraged to consider tacking on
optional addon(s) to your itinerary. Click the 'Book my stay now!' button when you are ready to initiate the billing process.
For testing, please use the following credit card information: #4242424242424242. Exp 4/22. CVC 222.
Your uniquely generated confirmation will be displayed on the next page. A copy of
your receipt will also be sent to the email you specified.

<a name="viewDelete"></a>
<h5>View and/or delete my itinerary:</h5>
Retrieve your single itinerary from the database by clicking the text in the header that reads 'Itinerary Lookup'. 
You will be required to enter the 
confirmation number you received after booking a new itinerary along with the associated email address.
If a match is not found for the information you entered, an error will be presented. Click the
'Get Reservation' or 'Delete reservation' to perform your action of choice.

<a name="all-itineraries"></a>
<h5>Retrieve all itineraries:</h5>
This process has been
vastly simplified for testing purposes. To retrieve all itineraries in the database, 
click the text in the header that reads 'Itinerary Lookup'. Once on that page,
click the "FOR DEMO/MANAGEMENT ONLY: Get all itineraries (no input required)"
button. All itineraries that start today (based on PST, the hotel's time zone) or in the
future, are displayed on top. All itineraries that have already concluded are appended to the bottom
of the page.

<a name="contact"></a>
<h5>Contact management:</h5>
This feature is intended for users that have questions, comments, or suggestions for management.
The 'Contact Us' link is automatically rendered on each webpage's footer component. Once on this page, fill out the
form and click the 'Submit!' button to send your message to management and the database. For demonstration purposes, a staff 
version of the message you just submitted will be sent to the email address you provided. In a real application, it may be wise
to add a customer service management system like Zendesk.  

<a name="highlights"></a>
## Application highlights
* All pricing is referenced from and handled in a single pricing.js file
* All dates and times are defined using Moment.js and relative to the hotel's location (California)
* Limited booking dates. An itinerary cannot start before or end two months out from the current date 
* Generated confirmation number is arranged in a strategic manner that helps quickly identify itinerary details
* Redux store updates dynamically and dispatches all itinerary information to the backend at once upon payment submission
* RESTful server-side architecture for querying the database

<a name="limitationsAndShortcomings"></a>
## Application limitations and shortcomings
* Cannot update an existing itinerary. Must cancel and rebook instead.
* No inventory management for guest rooms. Any room can be booked an unlimited amount of times
* Refunds are not processed automatically upon cancellation. Must be issued manually via Stripe
* Itinerary is entirely removed from database upon user delete action. More logical to update most object values to null instead for record-keeping 
* Weather graphic and temperature on landing page is static. Does not call an API for current weather
* CSS organization could be improved
* Improve aesthetics

<a name="potentialFeatures"></a>
## Potential features
* Limit max stay to 30 calendar days
* Update the current itinerary via a dropdown menu instead of repeating selection process
* Book a reservation for someone other than the person submitting payment
* Specify amount of people to purchase Breakfast and Shuttle Ride addons for. Currently must be the whole party
* Filter guest room options based on number of guests selected
* Make use of the cancelBy variable that is currently associated with each itinerary
* Obtain customer phone number during Stripe checkout
* Replace alert messages with more pleasant prompts
* Dynamic pricing that fluctuates based on dates of stay
* Account registration for both customers and management

<a name="screenshots"></a>
## Screenshots
<img align="middle" alt='homepage' width='430' src='https://i.imgur.com/XkHJO48.png' />

<img align="middle" alt='results' width='430' src='https://i.imgur.com/zW7tVNi.png' />

<img align="middle" alt='checkout' width='430' src='https://i.imgur.com/Wj0Uoqp.png' />

<img align="middle" alt='confirmation' width='430' src='https://i.imgur.com/dh92Nst.png' />

<img align="middle" alt='confirmationEmail' width='430' src='https://i.imgur.com/YRUzXOU.png' />

<img align="middle" alt='stripeDashboard' width='430' src='https://i.imgur.com/7xG8lWI.png' />


<a name="license"></a>
## License
 * Copyright (C) 2017 Alex Ha
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
  You can obtain one at http://mozilla.org/MPL/2.0/.
 