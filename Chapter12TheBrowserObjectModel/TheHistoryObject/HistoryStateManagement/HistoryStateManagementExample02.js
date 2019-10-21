window.addEventListener("popstate", (event) => {
  let state = event.state;
  if (state) {   // state is null when at first page load
    processState(state);
  }
});
