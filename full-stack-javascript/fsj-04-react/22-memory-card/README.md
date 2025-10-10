This README will be edited once the application is completed. For now, this will contain the pseudocode in planning out the application.

<!-- == FEATURES == -->

<!-- Current score -->
<!-- Best score -->
<!-- Function that randomizes cards' order when a card is clicked (invoke it when component mounts) -->

<!-- When current score is equal to the amount of cards -->
<!-- -- All cards should not be interactable -->
<!-- -- Display the ff: -->
<!-- ---- A "You won!" message on the screen -->
<!-- ---- A "Play Again" button, which, on click: -->
<!-- ------ Resets the current score to 0 -->
<!-- ------ Invoke the cards randomizer function  -->

<!-- == COMPONENTS == -->

<!-- NavBar (simple nav bar stuff) -->
<!-- Main (the main content area, where the cards and other stuff (e.g. winning message and play again button will live)) -->
<!-- Footer (simple footer stuff) -->

<!-- NavBar and Footer will probably be as is, but Main will have child components: -->

<!-- -- WinMessage (will be mounted if current score is equal to the amount of cards) -->
<!-- ---- This component should return a "You won!" message, and a "Play Again" button -->

<!-- -- Cards -->
<!-- ---- This component should return all of the cards, presumably it's in a state variable that holds an array of card items -->

<!-- ---- Card -->
<!-- ---- This component represents a card -->
<!-- ---- Should be interactable as long as game is ongoing -->
<!-- ---- Clicking should call the cards randomizer function -->

<!-- == STRUCTURE == -->

<!-- Note that this structure is just a rough idea of what it might look like, there's a good chance it could change given that I'm not yet super familiar with React. Don't be too hard on yourself future me! -->

<!-- <NavBar /> -->
<!-- <Main> -->
<!--   {isWon && <WinMessage />} -->
<!--   <Cards> -->
<!--     <!-- all the cards here --> -->
<!--   </Cards> -->
<!-- </Main> -->
<!-- <Footer /> -->

<!-- Above is just a general structure. For now, I won't think too hard about stuff like the state, and how I will pass props, since I will probably just figure those out on the fly anyways... -->

<!-- == HOW TO GET IMAGES FROM HEARTHSTONEJSON API == -->

[Image API from HearthstoneJSON](https://hearthstonejson.com/docs/images.html)

<!-- You can just basically specify a URL to get an image. Since this API is an external system outside of React, I assume I'd have to utilize useEffect, but I'll figure it out once I get to coding that part. -->
