// 1. select the inputs and add event listeners
const inputs = document.querySelectorAll('input,textarea')
inputs.forEach((input) => { // in Ruby, we would write this: inputs.each do |input|
  // For checkboxes, we need to listen to the `change` event
  // For everything else, we want to trigger the validation on the `blur` event
  const eventName = input.type === 'checkbox' ? 'change' : 'blur'
  input.addEventListener(eventName, () => {
    updateInput(input)
    updateFormButton()
  })
})

// Input validation

const isValidInput = (input) => {
  // 2. validate the inputs (different validation depending on the input)
  // - first name, last name, etc. should not be empty
  // - first name, last name should only be letters
  // - email should be in the format <string>@<string>.<string>
  // - optional: mobile phone should only be numbers
  if (input.type === 'checkbox') {
    return input.checked
  } else if (input.type === 'email') {
    // We validate the email using Regex
    return /^\w+@\w+(\.\w{2,6})+$/.test(input.value)
  } else {
    return input.value.trim() !== '' // checks that the input is not empty or just some empty spaces
  }
}

const updateInput = (input) => {
  // 3. update the display of the input (green for valid or red for invalid)
  if (isValidInput(input)) { // is valid
    // display the green input by adding the .is-valid class
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
  } else { // is invalid
    // display the red input by adding the .is-invalid class
    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
  }
}

// Form validation

const isValidForm = () => {
  // check the classes: all of them must contain .is-valid
  // in Ruby, we had `numbers.all? { |number| number.even? }`
  // in JS, we have this equivalent: array.every((element) => element.isEven())
  return Array.from(inputs).every((input) => isValidInput(input))
}

const updateFormButton = () => {
  const button = document.querySelector('button')
  // We set the `disabled` attribute of the Form button based on the isValidForm result
  button.disabled = !isValidForm()
}
