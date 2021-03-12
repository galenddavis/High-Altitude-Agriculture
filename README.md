# Background

The year is 2065 and you are the final surviving memeber of your crew. You're still in orbit about an uninhabitable planet. Your food should last your for nearly 3 more weeks, but resources are dwindling and machinery is starting to break down. Low Orbit Agriculture is a relaxing farming simulator where failure means death. How long can you keep your crops, and yourself, alive in the face of dire circumstances. 

![gamescreen](https://user-images.githubusercontent.com/73361653/110998258-8c53fe00-834c-11eb-946c-67d6eea14766.PNG)

# Functionality & MVPs

While playing this game, the user will be able to:

* Control their character and move them around their small ship. 
* Plant seeds and dig up plants.
* Monitor oxygen levels that will decline and grow based on the amount of crops. 

# Technologies and Libraries
* JavaScript, HTML, CSS, Sass, Aseprite(for the pixel art) 
This game is largely be built in vanilla JS along with HTML Canvas and CSS to provide the visuals. 
* Javascript is responsible for all of the logical heavy lifting going into the game in terms of the oxygen levels increasing or decreasing based on greenery levels. 
* HTML Canvas is used to display the ship layout and character from a top down level, as well as the oxygen monitor. 
* ScSS will be used to style the remaining elements of the page outside of the game including the title bar, as well as the creator information and social/professional profile links. 

### Challenges

* Utilizing canvas and Animation Frames in order to get a game cycle. 
* Handling constant user input and character movement. 
* Developing and creating a github pages deployment. 

# Wireframes

![Game Wireframe](https://user-images.githubusercontent.com/73361653/107179125-b7d97680-69a3-11eb-8739-17d6d7bbcdcc.jpg)


# Implementation 

* Constantly decreasing oxygen level can be temporarily bumped back up by placing seeds. 
* Character movement and planting based on user input. 

![Oxygen-meter](https://user-images.githubusercontent.com/73361653/110998365-b1e10780-834c-11eb-9bff-2cad16c3b40b.gif)

* Created sprite art and implemented a sprite sheet for the game's start screen. 

![gamestart](https://user-images.githubusercontent.com/73361653/110998357-af7ead80-834c-11eb-8d1b-8d6ec6aabe61.gif)

