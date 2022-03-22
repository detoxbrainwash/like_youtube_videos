// visit my youtube channel https://www.youtube.com/c/DetoxBrainwash

// liking logic
function click_like_button(){
  let like_button = document.querySelector("button[aria-label^=like]");
  let aria_pressed = like_button.getAttribute("aria-pressed");
  if (aria_pressed=='false') like_button.click();
}

// declaring script-wide vars
const wait_like = 5*1000; // 5 seconds before liking
const wait_comment = 3*1000; // 5 seconds before commenting

async function post_comment(){
  // posting comments
  let comment_string = "I got the feeling inside my bones"; //"That's the way we win!";

  // comment logic
  document.querySelector("#comments").scrollIntoView(false); // open the comments sections
  await delay(1); // wait for a sec to scroll
  document.querySelector("#simplebox-placeholder").click(); // enable the submit button/section
  await delay(1); // wait for a sec to load components after clicking
  let comment_button = document.querySelector("#submit-button > a > #button"); // get the comment btn
  comment_button.parentElement.parentElement.removeAttribute("disabled"); // disable it
  // write the comment
  let comment = document.querySelector("#contenteditable-root");
  comment.innerHTML = comment_string;
  comment_button.click(); // dispatch the comment
}

// run the programme
setTimeout(click_like_button, wait_like);
setTimeout(post_comment, wait_like);

///////////////////// helpers /////////////////////////
function delay(n){
  return new Promise(function(resolve){
      setTimeout(resolve,n*1000);
  });
}