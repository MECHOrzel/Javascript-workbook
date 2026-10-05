let adventureStarted = false

let questWarning

let questButton

let questDescription

let selectedQuest

let selectedQuestElement


const quests = [
    {
        title: "Dragon Hunt",
        description: "Defeat the dragon in the northern cave.",
        reward: 500,
        accepted: false
    },
    {
        title: "Goblin Trouble",
        description: "Clear the goblins from the old mine.",
        reward: 250,
        accepted: false
    },
    {
        title: "The Lost Sword",
        description: "Recover the blacksmith's stolen sword.",
        reward: 150,
        accepted: false
    }
]

const body = document.querySelector("body")

function selectQuest(event) {
    const clickedTitle = event.target.dataset.questTitle
    selectedQuest = quests.find(quest => quest.title === clickedTitle)
    questDetails.textContent = ""
    selectedQuestElement = event.target
    
    const titleParagraph = document.createElement("p")
    titleParagraph.textContent = selectedQuest.title
    questDetails.appendChild(titleParagraph)

    const descriptionParagraph = document.createElement("p")
    descriptionParagraph.textContent = selectedQuest.description
    questDetails.appendChild(descriptionParagraph)

    const rewardParagraph = document.createElement("p")
    rewardParagraph.textContent = "Reward: " + selectedQuest.reward + " Gold"
    questDetails.appendChild(rewardParagraph)

}

function startAdventure(){
if (adventureStarted === false) {
    adventureStarted = true
    heading.textContent = "The Adventure Begins!"
    sentence.textContent = "Your first quest awaits!"
    button.textContent = "Adventure Started!"
    body.classList.add("adventure-active")
    questLink.setAttribute("href", "https://www.wikipedia.org")
    questLink.textContent = "Read Your Quest" 
          
          questButton = document.createElement("button")
          questButton.textContent = "Accept Quest"
          questArea.appendChild(questButton)
          questButton.addEventListener("click", acceptQuest)


        for (let i = 0; i < quests.length; i++){
            const questParagraph = document.createElement("p")
            questParagraph.classList.add("quest-item")
            questParagraph.textContent = quests[i].title
            questParagraph.dataset.questTitle = quests[i].title
            questParagraph.addEventListener("click", selectQuest)
            questArea.appendChild(questParagraph)
        }

} else {
            adventureStarted = false
          heading.textContent = "Welcome Hero!"
          sentence.textContent = "Prepare yourself for battle!"
          button.textContent = "Start Adventure"
          body.classList.remove("adventure-active")
          questLink.setAttribute("href", "https://example.com")
          questLink.textContent = "View Quest"
          questButton.remove()
          selectedQuest = undefined
          questDetails.textContent = ""

          for (let i = 0; i < quests.length; i++) {
            quests[i].accepted = false
          }
          
          const questItems = document.querySelectorAll(".quest-item")
          for (let i = 0; i < questItems.length; i++) {
            questItems[i].remove()   
        }
        
          
}
}

const questDetails = document.querySelector("#quest-details")

const heading = document.querySelector("h1")

heading.textContent = "Welcome Hero!"

const sentence = document.querySelector(".quest-text")

sentence.textContent = "Prepare yourself for battle!"

const button = document.querySelector("#start-button")

button.addEventListener("click", startAdventure)

const questLink = document.querySelector("#quest-link")

questLink.setAttribute("href", "https://google.com")

const questArea = document.querySelector("#quest-area")

function acceptQuest() {

    if (selectedQuest === undefined) {
        sentence.textContent = "Please select a quest!"
        return
    }

    if (selectedQuest.accepted === false) {
        sentence.textContent = "Quest Accepted: " + selectedQuest.title
        selectedQuest.accepted = true
        selectedQuestElement.textContent = selectedQuest.title + " - ACCEPTED"
    
    } else{
        sentence.textContent = "You already accepted this quest!"
    }
}



/*
============================================================
QUEST PROJECT — JAVASCRIPT & DOM REFERENCE NOTES
============================================================

PURPOSE OF THIS PROJECT
-----------------------
This project was built to practice how JavaScript interacts
with a webpage through the DOM.

The major pattern used throughout the project is:

    1. Store data in JavaScript
    2. Select/create DOM elements
    3. Listen for user actions
    4. Change JavaScript data
    5. Update the DOM so the user can SEE the change


============================================================
1. JAVASCRIPT DATA VS THE DOM
============================================================

One of the most important lessons from this project:

JAVASCRIPT DATA and the DOM are NOT automatically synchronized.

Example:

    let health = 100

    health = 80

JavaScript now knows:

    health === 80

But if the webpage says:

    Health: 100

it will KEEP saying that until we explicitly update the DOM.

Example:

    healthDisplay.textContent = health

Think:

    JavaScript data = what the PROGRAM knows
    DOM             = what exists on the WEBPAGE

Changing JavaScript data does NOT automatically update the page.


============================================================
2. SELECTING DOM ELEMENTS
============================================================

We use document.querySelector() to find an element that already
exists in our HTML.

Examples:

    const body = document.querySelector("body")

    const heading = document.querySelector("h1")

    const sentence = document.querySelector(".quest-text")

    const button = document.querySelector("#start-button")

Selector reminder:

    "h1"            = HTML tag
    ".quest-text"   = class
    "#start-button" = ID

The . and # belong to CSS-style selectors.


============================================================
3. textContent
============================================================

textContent represents the TEXT INSIDE a DOM element.

Example:

HTML:

    <h1>Welcome Hero!</h1>

JavaScript:

    heading.textContent = "The Adventure Begins!"

Result:

    <h1>The Adventure Begins!</h1>

IMPORTANT:

    heading

means the WHOLE DOM ELEMENT.

    heading.textContent

means the TEXT INSIDE that element.


============================================================
4. EVENTS
============================================================

Events let JavaScript respond to something the user does.

Example:

    button.addEventListener("click", startAdventure)

Read this as:

    "When button is clicked, run startAdventure."

IMPORTANT:

    startAdventure

means:

    Give addEventListener the function so it can run it LATER.

Whereas:

    startAdventure()

means:

    Run the function RIGHT NOW.

General pattern:

    SELECT
      ↓
    LISTEN
      ↓
    REACT


============================================================
5. STATE
============================================================

State is information JavaScript remembers about what is currently
happening in the program.

Example:

    let adventureStarted = false

Later:

    adventureStarted = true

This lets the program remember whether the adventure is currently
started.

We can then check it:

    if (adventureStarted === false) {
        // start adventure
    } else {
        // reset adventure
    }

IMPORTANT:

    =

means ASSIGN / CHANGE a value.

    ===

means COMPARE two values.

Example:

    adventureStarted = true

changes the value.

Example:

    adventureStarted === true

asks whether the value is true.


============================================================
6. CHANGING CSS CLASSES
============================================================

JavaScript can add/remove CSS classes.

Example:

    body.classList.add("adventure-active")

and:

    body.classList.remove("adventure-active")

IMPORTANT:

When using querySelector:

    document.querySelector(".adventure-active")

we use the dot because we are writing a CSS selector.

When using classList:

    body.classList.add("adventure-active")

we DON'T use the dot because we are giving JavaScript the actual
class name.


============================================================
7. HTML ATTRIBUTES
============================================================

JavaScript can read/change HTML attributes.

Example:

    questLink.setAttribute("href", "https://www.wikipedia.org")

This changes:

    <a href="...">

We also used:

    getAttribute()

to read an attribute.

General idea:

    getAttribute() = READ an attribute
    setAttribute() = CHANGE an attribute


============================================================
8. CREATING DOM ELEMENTS
============================================================

JavaScript can create new HTML elements.

Example:

    const questParagraph = document.createElement("p")

IMPORTANT:

createElement() creates the element in JavaScript memory.

It does NOT automatically appear on the webpage.

We have to attach it somewhere.

Example:

    questArea.appendChild(questParagraph)

So:

    createElement()
          ↓
    creates element

    appendChild()
          ↓
    puts element into webpage


============================================================
9. PARENT AND CHILD ELEMENTS
============================================================

If we write:

    questArea.appendChild(questParagraph)

we are saying:

    "Put questParagraph INSIDE questArea."

Example:

Before:

    <div id="quest-area">
        <h2>Quest Log</h2>
    </div>

After:

    <div id="quest-area">
        <h2>Quest Log</h2>
        <p>Dragon Hunt</p>
    </div>

questArea is the PARENT.

questParagraph is the CHILD.


============================================================
10. REMOVING DOM ELEMENTS
============================================================

We can remove an element with:

    element.remove()

Example:

    questButton.remove()

This removes the entire DOM element from the webpage.


============================================================
11. ARRAYS OF OBJECTS
============================================================

Our quests are stored as JavaScript DATA.

Example:

    const quests = [
        {
            title: "Dragon Hunt",
            description: "Defeat the dragon...",
            reward: 500,
            accepted: false
        },
        {
            title: "Goblin Trouble",
            description: "Clear the goblins...",
            reward: 250,
            accepted: false
        }
    ]

quests is an ARRAY.

Each quest is an OBJECT.

We can access one quest with:

    quests[i]

We can access one property with:

    quests[i].title

Example:

    quests[0].title

would give:

    "Dragon Hunt"


============================================================
12. LOOPS + DOM CREATION
============================================================

Instead of manually creating one paragraph for every quest,
we used a loop:

    for (let i = 0; i < quests.length; i++) {

        const questParagraph = document.createElement("p")

        questParagraph.classList.add("quest-item")

        questParagraph.textContent = quests[i].title

        questArea.appendChild(questParagraph)
    }

This means:

    For every quest in the quests array:

        create a paragraph
        give it a class
        give it the quest title
        put it on the page

This connects JavaScript DATA to DOM ELEMENTS.


============================================================
13. querySelectorAll()
============================================================

querySelector() finds ONE matching element.

querySelectorAll() finds ALL matching elements.

Example:

    const questItems =
        document.querySelectorAll(".quest-item")

questItems contains all DOM elements with:

    class="quest-item"

We used a loop to remove them:

    for (let i = 0; i < questItems.length; i++) {
        questItems[i].remove()
    }


============================================================
14. THE EVENT OBJECT
============================================================

When an event happens, JavaScript can give our function information
about that event.

Example:

    function selectQuest(event) {

    }

event contains information about the click.

One very useful property is:

    event.target

event.target means:

    THE DOM ELEMENT THAT WAS CLICKED.

Example:

If the user clicks:

    <p>Dragon Hunt</p>

then:

    event.target

is that entire <p> element.


============================================================
15. event.target VS event.target.textContent
============================================================

Very important distinction:

    event.target

= WHOLE DOM ELEMENT

Example:

    <p>Dragon Hunt</p>


    event.target.textContent

= TEXT INSIDE THE ELEMENT

Example:

    "Dragon Hunt"

So:

    selectedQuestElement = event.target

stores the actual DOM element.

It does NOT store only the words.


============================================================
16. find()
============================================================

find() searches an array and gives us the WHOLE matching object.

Example:

    selectedQuest =
        quests.find(quest => quest.title === clickedTitle)

Suppose:

    clickedTitle === "Dragon Hunt"

find() checks the quests until:

    quest.title === "Dragon Hunt"

is true.

It then returns the WHOLE quest object:

    {
        title: "Dragon Hunt",
        description: "...",
        reward: 500,
        accepted: false
    }

Therefore:

    selectedQuest

= whole object

while:

    selectedQuest.title

= "Dragon Hunt"


============================================================
17. DATA OBJECT VS DOM ELEMENT
============================================================

This distinction became VERY important.

selectedQuest:

    JavaScript DATA OBJECT

Example:

    {
        title: "Dragon Hunt",
        reward: 500,
        accepted: false
    }

selectedQuestElement:

    DOM ELEMENT

Example:

    <p class="quest-item">Dragon Hunt</p>

Therefore:

    selectedQuest.title

gets information from JAVASCRIPT DATA.

While:

    selectedQuestElement.textContent

gets/changes information on the WEBPAGE.


============================================================
18. DISPLAYING QUEST DETAILS
============================================================

When a quest is selected, we created DOM elements for its
information.

Example:

    const titleParagraph = document.createElement("p")

    titleParagraph.textContent = selectedQuest.title

    questDetails.appendChild(titleParagraph)

Then the same idea was used for:

    description
    reward

Before displaying a different quest, we clear the old details:

    questDetails.textContent = ""

This removes the old text/content inside questDetails.


============================================================
19. SHARED / GLOBAL STATE
============================================================

selectedQuest needed to be available to multiple functions.

Example:

    let selectedQuest

was declared outside the functions.

Then:

    selectQuest()

can change it.

And:

    acceptQuest()

can read it.

If selectedQuest had been declared inside selectQuest(), then
acceptQuest() would not have access to it.

This relates to SCOPE.


============================================================
20. SCOPE
============================================================

Variables declared inside a block/function are generally only
available within that scope.

Example:

    function example() {
        const name = "Uther"
    }

Outside the function, we cannot normally use:

    name

This is why some variables that need to be shared between functions
are declared outside those functions.


============================================================
21. GUARD CLAUSES AND return
============================================================

Our Accept Quest button could be clicked before selecting a quest.

That would cause a problem because:

    selectedQuest

would still be:

    undefined

So we added:

    if (selectedQuest === undefined) {
        sentence.textContent = "Please select a quest!"
        return
    }

The return is important.

It means:

    STOP THIS FUNCTION HERE.

Without return, JavaScript would continue executing the rest of
acceptQuest().

A bare:

    return

does not need to return a value.

It can simply stop the function.


============================================================
22. ACCEPTED QUEST STATE
============================================================

Each quest has:

    accepted: false

When accepted:

    selectedQuest.accepted = true

This changes the JAVASCRIPT DATA.

IMPORTANT:

That alone does NOT change the webpage.

To visibly show acceptance, we ALSO change the DOM:

    selectedQuestElement.textContent =
        selectedQuest.title + " - ACCEPTED"

So these two lines do DIFFERENT jobs:

    selectedQuest.accepted = true

changes DATA.

    selectedQuestElement.textContent =
        selectedQuest.title + " - ACCEPTED"

changes what the USER SEES.


============================================================
23. CHECKING WHETHER A QUEST WAS ALREADY ACCEPTED
============================================================

We use:

    if (selectedQuest.accepted === false) {

        // accept quest

    } else {

        sentence.textContent =
            "You already accepted this quest!"
    }

This works because the accepted property remembers the quest's
current state.


============================================================
24. RESETTING STATE
============================================================

Resetting the visible webpage was NOT enough.

We also needed to reset JavaScript data.

Example:

    selectedQuest = undefined

Otherwise JavaScript could still remember an old selected quest even
though the webpage looked reset.

We also cleared:

    questDetails.textContent = ""

And reset every quest:

    for (let i = 0; i < quests.length; i++) {
        quests[i].accepted = false
    }

This was another important DATA vs DOM lesson.

A page can LOOK reset while JavaScript still contains old state.

A proper reset may need to reset BOTH.


============================================================
25. BUG: CHANGING textContent BROKE find()
============================================================

Originally we identified clicked quests using:

    const clickedTitle = event.target.textContent

Then:

    selectedQuest =
        quests.find(quest => quest.title === clickedTitle)

Initially this worked.

The paragraph said:

    Dragon Hunt

and the JavaScript data said:

    Dragon Hunt

So:

    "Dragon Hunt" === "Dragon Hunt"

was true.


BUT...

After accepting the quest we changed the visible text:

    Dragon Hunt - ACCEPTED

Now clicking it again gave:

    clickedTitle === "Dragon Hunt - ACCEPTED"

But the JavaScript quest object still contained:

    quest.title === "Dragon Hunt"

So find() was comparing:

    "Dragon Hunt" === "Dragon Hunt - ACCEPTED"

which is FALSE.

Therefore find() returned:

    undefined


============================================================
26. WHY WE DIDN'T JUST ADD LOTS OF || CHECKS
============================================================

We could theoretically write code that understands:

    "Dragon Hunt"

OR:

    "Dragon Hunt - ACCEPTED"

But this becomes fragile.

What if later the display becomes:

    Dragon Hunt - COMPLETED

or:

    Dragon Hunt - FAILED

or:

    Dragon Hunt - ACCEPTED - 500 GOLD

We would constantly have to change our identification logic just
because the DISPLAY changed.

Better idea:

Keep the quest's IDENTITY separate from its DISPLAY.


============================================================
27. DATA ATTRIBUTES / dataset
============================================================

HTML elements can carry extra custom information.

Example:

    <p data-quest-title="Dragon Hunt">
        Dragon Hunt
    </p>

The user sees:

    Dragon Hunt

But the element ALSO carries:

    data-quest-title="Dragon Hunt"

JavaScript accesses this using:

    element.dataset.questTitle

So:

    event.target.textContent

means:

    visible text inside the clicked element

while:

    event.target.dataset.questTitle

means:

    the custom questTitle data attached to the clicked element


============================================================
28. HOW WE ADDED dataset TO OUR QUESTS
============================================================

Inside our quest creation loop:

    questParagraph.dataset.questTitle = quests[i].title

Conceptually this creates:

    <p
        class="quest-item"
        data-quest-title="Dragon Hunt"
    >
        Dragon Hunt
    </p>

Then we changed selectQuest() from:

    const clickedTitle = event.target.textContent

to:

    const clickedTitle =
        event.target.dataset.questTitle


============================================================
29. WHY dataset FIXED THE BUG
============================================================

Before accepting:

VISIBLE TEXT:

    Dragon Hunt

DATASET:

    Dragon Hunt


After accepting:

VISIBLE TEXT:

    Dragon Hunt - ACCEPTED

DATASET:

    Dragon Hunt


The visible text changed.

The identifier DID NOT.

Therefore when clicked again:

    clickedTitle =
        event.target.dataset.questTitle

still gives:

    "Dragon Hunt"

Then find() compares:

    "Dragon Hunt" === "Dragon Hunt"

and succeeds.


============================================================
30. IDENTITY VS PRESENTATION
============================================================

This is the larger programming lesson behind dataset.

IDENTITY:

    What thing is this?

PRESENTATION:

    How should this thing currently look to the user?

For our quest:

IDENTITY:

    Dragon Hunt

PRESENTATION might be:

    Dragon Hunt

or:

    Dragon Hunt - ACCEPTED

or later:

    Dragon Hunt - COMPLETED

The presentation can change without changing the identity.

This makes the program easier and safer to maintain.


============================================================
31. COMPLETE MENTAL MODEL FOR THIS PROJECT
============================================================

The quests array is DATA:

    quests
      ↓
    quest objects
      ↓
    title
    description
    reward
    accepted


The webpage contains DOM ELEMENTS:

    heading
    sentence
    questButton
    questParagraph
    questDetails


Events connect USER ACTIONS to JavaScript:

    CLICK
      ↓
    event listener
      ↓
    function


Functions can change DATA:

    selectedQuest.accepted = true


Then we explicitly update the DOM:

    selectedQuestElement.textContent =
        selectedQuest.title + " - ACCEPTED"


Overall:

    USER CLICKS
         ↓
    EVENT FIRES
         ↓
    FUNCTION RUNS
         ↓
    JAVASCRIPT DATA CHANGES
         ↓
    DOM IS UPDATED
         ↓
    USER SEES THE RESULT


============================================================
32. IMPORTANT SYNTAX REFERENCE
============================================================

SELECT ONE ELEMENT:

    document.querySelector("#id")
    document.querySelector(".class")
    document.querySelector("tag")


SELECT MULTIPLE ELEMENTS:

    document.querySelectorAll(".class")


CHANGE TEXT:

    element.textContent = "New Text"


CREATE ELEMENT:

    document.createElement("p")


ADD ELEMENT TO PAGE:

    parent.appendChild(child)


REMOVE ELEMENT:

    element.remove()


ADD CLASS:

    element.classList.add("class-name")


REMOVE CLASS:

    element.classList.remove("class-name")


LISTEN FOR CLICK:

    element.addEventListener("click", functionName)


CLICKED ELEMENT:

    event.target


VISIBLE TEXT OF CLICKED ELEMENT:

    event.target.textContent


CUSTOM DATA ON ELEMENT:

    element.dataset.questTitle


READ CUSTOM DATA FROM CLICKED ELEMENT:

    event.target.dataset.questTitle


FIND OBJECT IN ARRAY:

    array.find(item => item.property === value)


LOOP THROUGH ARRAY:

    for (let i = 0; i < array.length; i++) {

    }


STOP FUNCTION:

    return


CHECK FOR undefined:

    if (variable === undefined) {

    }


============================================================
33. THINGS I SHOULD NOT EXPECT MYSELF TO MEMORIZE IMMEDIATELY
============================================================

It is normal to understand what needs to happen but still need
to look up syntax such as:

    querySelector
    querySelectorAll
    addEventListener
    createElement
    appendChild
    classList
    textContent
    dataset

The important skill right now is understanding WHAT needs to happen.

Example:

    "I need to find the button."
    "I need to listen for a click."
    "I need to change the quest data."
    "I need to update what the user sees."

Syntax becomes easier to remember after repeatedly using these
patterns in multiple projects.


============================================================
34. THE CORE DOM PATTERN TO REMEMBER
============================================================

When unsure where to start, think:

    SELECT
      ↓
    LISTEN
      ↓
    CHANGE DATA
      ↓
    UPDATE DOM


Example:

    const button =
        document.querySelector("#damage-button")

    button.addEventListener("click", takeDamage)

    function takeDamage() {

        player.health = player.health - 20

        healthDisplay.textContent = player.health
    }


============================================================
35. BIGGEST LESSON FROM THIS PROJECT
============================================================

JavaScript data and the webpage are related, but they are NOT
the same thing.

JavaScript might know:

    selectedQuest.accepted === true

But the user cannot see that unless we update the DOM.

Likewise, changing visible DOM text does not automatically change
the underlying JavaScript object.

Think:

    DATA = what the program knows

    DOM = what the webpage contains/displays

Our JavaScript code connects the two.


============================================================
END OF QUEST PROJECT NOTES
============================================================
*/
```