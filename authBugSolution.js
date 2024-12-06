function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

firebase.auth().onAuthStateChanged(debounce((user) => {
  // Update UI based on the user object
  if (user) {
    console.log('User signed in:', user);
    // Update UI
  } else {
    console.log('User signed out');
    // Update UI
  }
}, 300)); // 300ms debounce delay