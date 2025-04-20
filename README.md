# cs624-HOS02
## Input
The app accepts one piece of user input: a **favorite MSCS course** typed in a `TextInput`.  
Static assets include the CityU logo (`assets/icon.png`) and a JSON‑like array that lists 8 core, 2 depth‑of‑study, and 1 capstone course.

## Process
At launch the React Native functional component (`App`) executes.  
An internal **state hook** (`useState`) stores the favorite course text.  
The UI is rendered through core components:

* `ScrollView` provides vertical scrolling.
* `Image` renders the logo.
* `TextInput` captures user text and updates state on each keystroke.
* `View` + `Text` lay out the three categorized course lists.
* `StyleSheet.create()` centralizes styling.

Each re‑render is triggered automatically when the state updates.

## Output
The screen first shows the logo and an empty text box.  
As the user types, a highlighted line—“My favorite course: …”—appears immediately below the textbox, confirming the input.  
Scrolling reveals all 11 course titles grouped under **Core Courses**, **Depth of Study**, and **Capstone** headings.  
The layout works consistently on iOS, Android, and the Expo web preview.
