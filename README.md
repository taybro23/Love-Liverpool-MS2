# Taylor Brookes - Milestone Project 2
## Love Liverpool!

[Visit my live website here!](https://taybro23.github.io/liverpool/)

## Table Of Contents
1. Overview
2. UX
    - Target Audience
    - User Stories
    - Wireframes
3. Design
    - Structure
    - Typography
    - Colours
    - Imagery
4. Features
    - Responsiveness
    - Navbar
    - Scroll To Top Button
    - Places Of Interest
    - Liverpool One
    - Contact Us
    - Footer
    - Future Deployments
5. Technologies Used
    - Languages
    - Frameworks, Libraries and Frameworks
6. Testing
    - HTML, CSS and JS
    - Features and Functionality
    - User Story Testing
    - Bugs and Fixes
7. Deployment
8. Credits
    - Images
    - Code
    - Acknowledgements  

# Overview

Love Liverpool is a site designed for people who are visiting Liverpool, and I have focused mainly on Liverpool One due to it being 
one of the most popular areas to visit within Liverpool. I have chosen to feature six of the most popular places of interest on my site 
and have included a small amount of information about each one, as well as providing contact information and links to the official websites. 
Below that is a map showing fifteen places to stay, restaurants and shops within Liverpool One. There is then a contact form to allow 
users to ask any relevant questions they have regarding the site or Liverpool itself. 

# UX (User Experience)
## Target Audience

The target audience for this site is people who are interested in visiting Liverpool for recreational purposes. I have selected some 
must-see places, as well as included a range of hotels, restaurants and shops so that people can see what Liverpool has to offer and 
plan their trip in advance.  

## User Stories
### First time and returning users

-	To understand what the site is and what it is to be used for
-	Easy navigation of the entire site regardless of device used 
-	The best places to visit during a trip to Liverpool
-	All information to be provided clearly and concisely
-	Relevant information to be provided for all places of interest, hotels, restaurants and shops showcased on the site
-	Contact information and address details to be provided for all places of interest, hotels, restaurants and shops highlighted on site
-	Official website links to be provided so all places can be explored more and browsed at leisure
-	To be able to contact the owner of the site for any questions or queries surrounding Liverpool or the places showcased 

### Site owner

-	The site owner would want an easy to navigate site that users can pick up and use without any issues on any device
-	Provide a range of options for the user so they can chose the best places to visit for them during their trip to Liverpool 
-	Relevant information to be provided to users in a clear and concise way
-	Regular traffic to the site 
-	Easily contactable for further information or feedback regarding the site
-	Social media links to be provided so that users can chose the platform of their choice when returning for information

## Wireframes

Mobile Wireframes
 - I designed my wireframes with mobile devices in mind, and created these first so I knew what elements I had to work 
 with for larger screens. 

Desktop/Laptop Wireframes
 - The transition from mobile to desktop view was a simple transition. The layout for some of the elements have been 
 changed to accommodate the larger screen sizes for example, the “Places Of Interest” will be side by side on large screens and 
 single view on small screens. 

Original Wireframes
 - [Mobile](assets/wireframes/o-mobile.pdf)
 - [Desktop/Laptop](assets/wireframes/o-desktop.pdf)

Updated Wireframes
 - Mobile
 - Desktop/Laptop

## Wireframe Changes

### Mobile

 - I originally planned for separate pages for each section (e.g. Restaurants, Shops), however I found a one page site 
 worked really well for what I wanted. It looked a lot smoother and felt more intuitive. 
 - At first, I wanted the hero image to cover the entire first screen, however this didn’t work on the deployed site due 
 to the user having little to no instruction to scroll down to access the rest of the site. I changed this to include a 
 small bar along the bottom that when clicked, took you to the next section of the site. 
 - In the “Places Of Interest” section I initially had a “Find Out More” button that when clicked, would show information 
 such as address and contact details. Although this worked well on the mobile side of things, it did not transition well to the 
 desktop version, so was removed and replaced by a hover element. For a future update, I would like to re-implement this on 
 mobile devices only. 
 - I wanted to have two different pages, one for restaurants and one for shops, however as I had changed the layout to one 
 continuous scrolling page I decided to merge these into one. There was no need to have two maps on my site, so combining them 
 made sense. I also added a new section of “Places To Stay” as this fit well into the rest of my site, and added more value to the site. 
 - I decided to remove the list of restaurants/shops as the map would highlight all of the ones that I wanted to and provide 
 relevant information in each info window. For a future update, I would like to include a list or a “Top 3” section below the map 
 which shows a bit more information, and maybe reviews of these places. 

### Desktop/Laptop

 - The first page was a landing page for the site. As I decided to change this, I amended the layout slightly and did the same on the 
 large screen version as the mobile; including a small bar along the bottom that when clicked takes you to the next section of the site.
 - In the “Places Of Interest” section, I did the same as the mobile site and removed the “Find Out More” buttons and replaced them 
 with a hover function. This works much better on desktop/laptop view as when the buttons were clicked, there was a large white section 
 that appeared below the other elements that hadn’t been selected that didn’t look right and really threw off the look of the site.
 - On my original desktop wireframes I did not include the images for each section. This was because I planned on having separate 
 pages for each part of the site, but at the start of production decided to make it a single webpage. I had already included images 
 at the start of each page on my mobile wireframes so it also made sense to include them on the full site.
 - As I had all the content centred for mobile view it was better to keep it uniform across all device sizes so I centred the 
 content on all screen sizes. This did also look better on the desktop/laptop site as well. 
 - I changed the Contact Us section because the form layout did not look right when actually implemented on a desktop site. I also 
 moved the image that was below the contact section to above the contact section to match with the rest of the site.

# Design

## Structure

The site will only be made up of one page, and will have a fixed-top navbar so that the sections of the site can be easily navigated between. 

When loaded, the hero image will be displayed to the user, along with the fixed-top navbar at the top and “Explore Liverpool” bar at the bottom. 
Below that is the first section of the site which is “Places Of Interest”. This section has six top attractions to visit in Liverpool, 
along with a small amount of information about each place and the address/contact details that appear when the image is hovered over. 
The next section is “Liverpool One” where there are three buttons, “Places To Stay”, “Restaurants” and “Shops”, above a map of Liverpool 
which has been added to the site using Google Maps API. 
The final section of the site is a contact form where people can enter their contact information and ask a question that will be sent to 
the site owner. 

## Typography

There are two main fonts that I have chosen for my site, and they were both taken from Google Fonts;

 - Kanit – I used this as the main font for the site due to it being easily legible and simple, but with a slight flare to make it 
 more interesting as I didn’t want a font that felt too “corporate”.
 - Permanent Marker – I felt that this font was fun and laid back, and that was what I wanted for the headings on my website. It also 
 works well with the other font I have chosen for my site.
 - Sans-Serif – This is the reserve font should anything go wrong with Google Fonts.

## Colours

The main colours I used for my site were black, white and different shades of blue. Listed below are the exact colours I used and why; 

-	rgba(8, 58, 109, 1) – I chose this dark shade of blue for the navbar as it is very strong colour and immediately draws your attention. 
I have also used this colour for the background colour of the “Explore Liverpool” bar and the footer, as well as the hover colour for the 
map buttons and the scroll to top button. 
-	#fff – I chose white for the navbar logo and text colour due to it standing out from the dark background colour. It is also the main 
colour for the text in the “Explore Liverpool” bar, the hover text in “Places Of Interest” section, the icon for the scroll to top button 
and the text and icons in the footer. 
-	rgba(104, 192, 255, 1) – I chose a lighter blue for the hover colour on the navbar, the “Explore Liverpool” bar, and the “View Site” 
links in the “Places Of Interest” section. It still stands out well from the background colour and compliments it well. 
-	#bccedd21 – This is a very pale shade of blue with the opacity turned down low. This was used for the background so that it wasn’t bright 
white, and had a blue tinge to match the rest of the site.
-	#000 – I used black as the main text colour for the site due to it standing out from the pale background.
-	#cd1a1a – I chose a deep red for the “Official LFC Website” to match the colour of the football club.
-	rgba(80, 139, 199, 1) – This is another light shade of blue that I used for the map buttons and scroll to top background. I changed the 
colour slightly from the other shade of light blue as it didn’t stand out well from the pale background.

## Imagery

The majority of the images for my site were found on google images, and credits have been provided in the credits section. 
All images are of Liverpool One and the places highlighted. 

