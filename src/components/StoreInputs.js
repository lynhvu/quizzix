function addInputToStorage(key, option) {
  let inputFromStorage = getInputFromStorage();

  inputFromStorage.push(option); // add new option to the array

  // Convert to JSON string and set to local storage
  localStorage.setItem(key, JSON.stringify(inputFromStorage));
}

function getInputFromStorage(key) {
  let inputFromStorage; // initialize variable

  if (localStorage.getItem(key) === null) {
    // option isn't in the storage
    inputFromStorage = [];
  } else {
    inputFromStorage = JSON.parse(localStorage.getItem(key));
  }
  return inputFromStorage;
}

// Export the functions to make them accessible in other files
export { addInputToStorage, getInputFromStorage };
