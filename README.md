<p align="center">
  <img src="./src/assets/chalk_logo_white.png" alt="Chalk Talk Logo" width="200"/>
</p>

# Welcome
Welcome to Chalk Talk, a comprehensive fitness and wellness platform designed to promote a healthy and active lifestyle. Chalk Talk connects individuals and fitness enthusiasts in a warm and inspiring community, providing tools and inspiration to help them achieve their fitness goals. 
The platform offers a variety of features to support the fitness journey, including personal records tracking, weight load calculation and community interaction. Whether you are looking to improve your fitness, track your personal records, or engage with a supportive community, Chalk Talk is your go-to destination.

Chalk Talk focuses on leveraging the latest web technologies, including React for the frontend and Django for the backend, ensuring a seamless and engaging user experience. It is designed for anyone passionate about fitness, from beginners to advanced athletes.

### Am I responsive image
[Chalk Talk Live website](https://chalk-talk-react-444e4f93c93c.herokuapp.com/)

# Table of Contents
-   [UX - User Experience](#ux--user-experience)
    -   [Key features](#key-features)
    -   [User Goals](#user-goals)
    -   [Planning](#planning)
    -   [User journey](#user-journey)
- [Design](#design)
- [Project Planning](#project-planning)
    -   [Strategy plane](#strategy-plane)
    -   [Agile Methodologies](#agile-methodologies)
        -   [Sprint Planning](#sprint-planning)
        -   [MoSCoW Prioritization](#moscow-prioritization)
        -   [User Stories](#user-stories)
    -   [Scope plane](#scope-plane)
    -   [Structural plane](#structural-plane)
    -   [Skeleton & Surface Planes](#skeleton--surface-planes)
        -   [Wireframes](#wireframes)
        -   [Database schema - ERD](#database-schema---erd)
        -   [Security](#security)
-   [Features](#features)
    -   [Existing Features](#existing-features)
        -   [Features Functionality](#features-functionality)
        -   [CRUD Functionality](#crud-functionality)
        -   [All Existing Features with Screenshots](#all-existing-features-with-screenshots)
            -   [Home Page](#home-page)
            -   [User Registration, Login](#user-registration-login)
            -   [User Profile](#user-profile)
            -   [Search Functionality](#search-functionality)
            -   [Responsive Navigation Bar](#responsive-navigation-bar)
            -   [Add Posts](#add-posts)
            -   [Comments](#comments)
            -   [My Posts](#my-posts)
            -   [My Feed](#my-feed)
            -   [Add Personal records](#add-personal-records)
            -   [My Personal records](#my-personal-records)
            -   [Percentage count of 1 rep max](#percentage-count-of-1-rep-max)            
            -   [Error Handling](#error-handling)
    -   [Future Features](#future-features)
-   [Reusable React Components](#reusable-react-components)
-   [Technology Used](#technology-used)
    -   [Frontend](#frontend)
    -   [Backend](#backend)
    -   [Deployment and Version Control](#deployment-and-version-control)
    -   [Development Tools](#development-tools)
    -   [Security](#security-1)
    -   [Others](#others)
-   [Testing & Validation](#testing--validation)
-   [Deployment](#deployment)
    -   [Step-by-Step Guide](#step-by-step-guide)
    -   [Additional Configurations](#additional-configurations)
-   [Cloning nad Forking](#cloning-and-forking)
    -   [Cloning the Repository](#cloning-the-repository)
    -   [Forking the Repository](#forking-the-repository)
-   [Credits](#credits)
    -   [Code](#code)
    -   [Media](#media)
-   [Acknowledgements](#acknowledgements)
    -   [Inspiration](#inspiration)
    -   [Project Giudance](#project-guidance)
    -   [ReadMe Structure](#readme-structure)
    -   [Technical Solutions](#technical-solutions)
    -   [Personal Thanks](#personal-thanks)



# UX - User Experience
## Key features
Chalk Talk offers a range of features to help you stay motivated and connected on your fitness journey, including:
-   **Navigation bar:** Navigate easily with our comprehensive navigation bar, which includes links to essential pages, depending on your logged in status.
-   **User Authentication:** Sign up, log in, and manage your profile with ease.
-   **Profile Management:** Customize your profile, including personal information and profile picture.
-   **Community Interaction:** Share updates through - post content, like, and comment on posts within the community.
-   **Store and share personal records:** Log your own personal records, show them off to peers and use a percentage calculator to easily get the perscribed weight in a workout from your personal records log.
-   **Responsive Design:** Access the platform from any device, whether it's a desktop, tablet, or mobile phone.
-   **User Contributions:** Registered users can contribute their own posts, share their fitness journeys and personal records.
## User goals
-   **New Users:** Easily create an account, set up a profile, and start engaging with the community.
-   **Returning Users:** Quickly log in, track their personal records and interact with posts.
-   **Community Members:** Comment on posts, like favorite content, and follow other users.
-   **Fitness Enthusiasts:** Log personal records and make use of the calulator for workout percentages. Share content and personal records to give and get inspiration to daily workouts.
-   **Contributors:** Create and share new posts related to fitness and wellness.
## Planning
Chalk Talk is designed with a user-centric approach, ensuring that the platform is intuitive and easy to navigate. The key aspects of the design include:

-   **Responsive Design:** The platform is fully responsive, providing a seamless experience on desktops, tablets, and mobile devices.
-   **Clean and Modern UI:** A clean, modern interface that focuses on usability and aesthetic appeal.
-   **Easy Navigation:** Intuitive navigation menus and a well-structured layout to help users find the features they need quickly.

## User journey
-   **Onboarding:** New users are guided through a simple sign-in and sign-up process.
-   **Exploration:** Users can explore the platform, reading posts, connecting with other users, and staying updated with their peers and their personal records achievements.
-   **Engagement:** Users actively participate by logging their personal records and interacting with the community through posts, comments and likes.
-   **Tracking Progress:** Users can view their progress over time, track their personal records, and see improvements in their daily routines and fitness levels.
-   **Contribution:** Users can share their knowledge by creating posts and helping to grow the community.

By focusing on these key aspects of the user experience, Chalk Talk aims to provide a platform that is not only functional but also enjoyable to use, encouraging users to stay active, engaged, and motivated in their fitness journey.

# Design
## Logo and Branding ![Chalk Talk Logo](./src/assets/chalk_logo_white.png)
The logo of Chalk Talk, containing barbells and weight plates and chalky stamp with the Chalk Talk text provides a strong visual identity for the brand.

## Colors
-   **Orange:** Represents energy and enthusiasm. Used for highlights. #faad1ff3 and goldenrod
-   **Green:** Represents health and vitality. Used for buttons. #308017
-   **White:** Used for backgrounds and text to provide contrast and readability. #FFFFFF
-   **Black:** Used for text to provide contrast. #333
-   **Red:** Used for heart icons to like and unlike posts. #f85032
-   **Gray:** Different gray scales used throughout the application to provide contrast.

## Fonts
Chalk Talk utilizes two primary fonts from Google Fonts: **Montserrat** and **Permanent Marker**. Montserrat was chosen for it's readability and modern appearance and Permanent Marker to give a handwritten feeling on chalk board. Both align with the application's theme of fitness, playfulness and well-being.

# Project Planning
## Strategy plane
**Overview:**
Chalk Talk is a versatile platform created for fitness enthusiasts to document their daily workouts and personal records, discuss fitness and health, and share thoughts and inspiration around training. Acting as a communal hub, it allows users to interact, inspire each other, and stay dedicated to their fitness objectives. Utilizing the latest web technologies, Chalk Talk provides a smooth user experience on all devices.

**Goals:**
-   Offer a comprehensive resource for fitness enthusiasts to share experiences, wins and thoughts, and discuss fitness.
-   Cultivate a community where users can connect, motivate, and support one another.
-   Ensure a user-friendly interface that is accessible and easy to navigate.

**Audience:**
-   Users interested in sharing their fitness journeys and engaging with a supportive community.
-   Athletes seeking a tool to document personal records and make use of a percentage calculator in their daily workout routine.

**User Needs:**
-   Ability to interact with other community members through comments, likes, and follows.
-   Ability to express the level of CrossFit experience and write a bio to let other users know more about the athlete.
-   Ability to document personal records to keep track of them and to utilize that data for calculation of weight in daily workouts.
-   Ability to view other users personal records for inspiration.

**Features:**
-   Post upload functionality to share content related to fitness.
-   Community interaction through comments, likes, and follows.
-   User profiles for personalized experiences.
-   Personal Record documentation and percentage calculator.


## Agile Methodologies
This project was developed using Agile methodology which allowed me to iteratively and incrementally build my app, with flexibility to make changes to my design throughout the entire development process.

GitHub Issues and Projects were used to manage the development process. The board view of the Project feature was used to display and manage my progress in the form of a 'kanban board'. The user stories were added to the 'Todo' column to be prioritised for development, moved to the 'In Progress' column to indicate development of the feature had begun and finally moved to the 'Done' column when the feature had been implemented and the acceptance criteria had been met.

### Sprint Planning
The project was divied into six sprints using Milestones in GitHub Projects. This rapid sprint approach allowed me to break down the project into manageable chunks and maintain focus on delivering key features and functionality on time.
![Sprint planning](./readme/sprints.png)

### MoSCoW Prioritization
-   **Must Haves:** the 'required', critical components of the project. Completing my 'Must Haves' helped me to reach the MVP (Minimum Viable Product) for this project.
-   **Should Haves:** the components that are valuable to the project but not absolutely 'vital'. The 'Must Haves' must receive priority over the 'Should Haves'.
-   **Could Haves:** these are the features that are a 'bonus' to the project, it would be nice to have them in this phase, but only if the most important issues have been completed first and time allows.
-   **Won't Haves:** the features or components that either no longer fit the project's brief, get taken out of the scope or are of very low priority for this release.

### User Stories
To start with I created a sheet with all the user stories that I wanted to cover, before moving them to issues in the Github Project Kanban board. This is a little bit of that sheet:
![User stories sheet](./readme/user_stories.png)

Here is a link to the [Kanban Board](https://github.com/users/SophieTiger/projects/5) where all user stories can be viewed.

**User stories that was taken out of scope**
During development the features for adding, viewing and booking programs was taken out of scope and prioritization was changed to "Won't have". This was due to lack of time and those features has been added to potential future features for the project.


## Scope plane
## Structural plane
## Skeleton & Surface Planes
### Wireframes
### Database Schema - ERD
### Security

# Features
## Existing Features
### Features Functionality
### CRUD Functionality
### All Existing Features with Screenshots
#### Home Page
#### User Registration, Login
#### User Profile
#### Search Functionality
#### Responsive Navigation Bar
#### Add Posts
#### Comments
#### My Posts
#### My Feed
#### Add Personal records
#### My Personal records
#### Percentage count of 1 rep max
#### Error Handling
## Future Features
-   Add programs for Personal training, Bootcamps and Nutrition Coaching to the app according to business needs.
-   Add Notifications to let users know when interaction was made to their content, such as likes and comments.

# Reusable React Components

# Technology Used
## Frontend
## Backend
## Deployment and Version Control
## Development Tools
## Security
## Others

# Testing & Validation

# Deployment
## Step-by-Step Guide:
## Additional Configurations

# Cloning and Forking
## Cloning the Repository
## Forking the Repository

# Credits
## Code
## Media

# Acknowledgements
## Inspiration
## Project Guidance
## ReadMe Structure
## Technical Solutions
## Personal Thanks

