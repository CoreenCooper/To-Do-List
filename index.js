// display valid user input in a list or error message and reset input field
const list = document.querySelector("ul");

const singleInput = (word) => {
  const listItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  listItem.textContent = word;
  list.appendChild(listItem);
  listItem.appendChild(deleteBtn);
  debugger;
};

const addItems = (e) => {
  e.preventDefault();
  const userInput = document.querySelector("#user-input");
  const errMessage = document.querySelector("p");
  if (userInput.value === "") {
    errMessage.textContent = "ERROR! Todo cannot be empty";
  } else if (userInput.value.includes("\n")) {
    errMessage.textContent = "";
    const inputArr = userInput.value.split("\n");
    inputArr.forEach((word) => {
      singleInput(word);
    });
  } else {
    errMessage.textContent = "";
    singleInput(userInput.value);
  }
  userInput.value = "";
};

// strike out list item when user clicks
// remove strike out upon second click
// delete list item when button is clicked
const strikeOut = (e) => {
  const item = e.target;

  if (item.tagName === "BUTTON") {
    item.parentElement.remove();
  } else {
    item.style.textDecoration =
      item.style.textDecoration === "line-through" ? "none" : "line-through";
  }
};

list.addEventListener("click", strikeOut);

const form = document.querySelector("form");
form.addEventListener("submit", addItems);

// When the user writes _nothing_ in the `form`'s text input area and clicks `submit`, an error message (inside a `p` tag) should appear below the form.

//     1. How can you check if the input text has something typed or not?
//     2. Have an empty paragraph that is above the `<ul>` and under the `<form>`. If the user didn't type anything, modify the content of the paragraph to display a text like: 'Error. Todo cannot be empty'

// When the user clicks on one of the `li` items, the item should be crossed out, indicating that that to-do is complete. You will need to look at [`[element].style.textDecoration`](https://www.w3schools.com/jsref/prop_style_textdecoration.asp) for the cross out effect. Look at all the different text decoration options.

//     1. You will need to add an event listener to all the `li` elements. What event do we want to listen for? What is a downside of this? Talk to a peer or ask an instructor.
//     2. There is a better option than 1. Add the event listener to the list itself (parent of all `li`s) and take advantage of event bubbling. If you don't remember what this is check the [lecture video](https://www.youtube.com/watch?v=oAv9ND4fkAc&list=PLvQtbvxnE8UE8i2aog2lXWpREE5Br0yMB&index=6&t=2s) again.
//     3. Once you know what element the event occurred on (`event.target`) check out [`[element].style.textDecoration`](https://www.w3schools.com/jsref/prop_style_textdecoration.asp) to put a line through the text and get the todo cross out effect.

// ## Bonus Tasks
// - Have the input go back to empty after adding a new todo.
// - Implement a delete `button` next to each `li` that removes that `li` tag entirely.
// - Clicking a todo that is crossed out (completed) uncrosses the todo.
// - Add the ability to add multiple to-dos if the user submits a text input with multiple lines. Each line should be a new to-do.
// - Add some CSS styling to your app.
