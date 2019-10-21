let div = document.getElementById("myDiv");
div.addEventListener("mouseout", (event) => {
  let target = event.target;
  let relatedTarget = EventUtil.getRelatedTarget(event);
  console.log(
    `Moused out of ${target.tagName} to ${relatedTarget.tagName}`);   
});
