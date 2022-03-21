// visit my youtube channel https://www.youtube.com/c/DetoxBrainwash

function click_like_button(){
  let like_button = document.querySelector("button[aria-label^=like]");
  let aria_pressed = like_button.getAttribute("aria-pressed");
  if (aria_pressed=='false') like_button.click();
}

const wait = 5*1000; // 5 seconds before liking

setTimeout(click_like_button, wait);
