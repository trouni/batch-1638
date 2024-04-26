const users = ["Doug", "Yann", "Noemi"];

let liContent = '';
// iterate over the users
users.forEach((user) => {
  // build a li element for each user
  liContent += `<li>${user}</li>`;
})

const ulContent = `<ul>${liContent}</ul>`;

// // select the .container
// document.querySelector('.container').insertAdjacentHTML("beforeEnd", ulContent);

// Let's edit the <li> elements
const liElements = document.querySelectorAll("li");

liElements.forEach((element) => {
  element.innerText = `👨‍🏫 ${element.innerText}`;
})



// Let's add the country next to the name of the teacher
const teacherElements = document.querySelectorAll(".teacher")

teacherElements.forEach((teacherElement) => {
  // Doug (USA)
  teacherElement.innerText += ` (${teacherElement.dataset.country})`
})



// Let's select the avatar
const avatars = document.querySelectorAll(".avatar")

// We can't add an event listener to a list, we need to iterate
avatars.forEach((avatar) => {
  avatar.addEventListener("click", (event) => {
    // We want to toggle the selected class on the element that was clicked on
    // We can access the click event with the `event` variable,
    // and the element that was clicked with `event.target`
    event.target.classList.toggle('selected')
    // // Same as
    // avatar.classList.toggle('selected')
  })
})


// Prevent default behavior
const link = document.getElementById("link");
link.addEventListener("click", (event) => {
  event.preventDefault()

  console.log("Clicked the link!");
})


// Select the select all checkbox
const selectAllCheckbox = document.getElementById('select-all-checkbox')

selectAllCheckbox.addEventListener('click', (event) => {
  avatars.forEach((avatar) => {
    if (selectAllCheckbox.checked) {
      avatar.classList.add('selected')
    } else {
      avatar.classList.remove('selected')
    }
  })
})


// Summary:
// 1. select the element that you want to interact with (querySelector or getElementById)
// 2. add an event listener (addEventListener)
// 3. implement the behavior when triggered (inside the arrow function)

