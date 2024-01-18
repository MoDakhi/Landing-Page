// Landing page

// Event Listener on the Hamburger Icon
document.getElementById("ham-icon").addEventListener("click", hamIconClicked);
document.getElementById("saveBtn").addEventListener("click", saveBtnClicked);
document.getElementById("quoteBtn").addEventListener("click", quoteBtnClicked);

function hamIconClicked() {
  // Get Current Display Setting
  let displaySetting = document.getElementById("settings-div").style.display;

  // Test Current Display Setting
  if (displaySetting === "none") {
    document.getElementById("settings-div").style.display = "block";
  } else {
    document.getElementById("settings-div").style.display = "none";
  }
}

function saveBtnClicked() {
  // Name output
  let name = document.getElementById("input1").value;
  document.getElementById("output1").innerHTML = name;

  // Focus output
  let focus = document.getElementById("input2").value;
  document.getElementById("output2").innerHTML = focus;

  let background = document.getElementById("background-select").value;
  document.body.style.backgroundImage = `url(${background})`;
}

function quoteBtnClicked() {
  // Quote
  let randNum = Math.random();
  console.log(randNum);

  if (randNum <= 0.125) {
    document.getElementById(
      "quote"
    ).innerHTML = `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that" -Martin Luther King Jr`;
  } else if (randNum <= 0.25) {
    document.getElementById(
      "quote"
    ).innerHTML = `"Be yourself; everyone else is already taken" -Oscar Wilde`;
  } else if (randNum <= 0.375) {
    document.getElementById(
      "quote"
    ).innerHTML = `"In the end, it's not the years in your life that count. It's the life in your years" -Abraham Lincoln`;
  } else if (randNum <= 0.5) {
    document.getElementById(
      "quote"
    ).innerHTML = `"In three words I can sum up everything I've learned about life: it goes on" -Robert Frost`;
  } else if (randNum <= 0.625) {
    document.getElementById(
      "quote"
    ).innerHTML = `"Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you." -Zig Ziglar`;
  } else if (randNum <= 0.75) {
    document.getElementById(
      "quote"
    ).innerHTML = ` "To be successful, you have to be selfish, or else you never achieve. And once you get to your highest level, then you have to be unselfish." -Michael Jordan`;
  } else if (randNum <= 0.875) {
    document.getElementById(
      "quote"
    ).innerHTML = `"I didn't fail the test. I just found 100 ways to do it wrong." -Benjamin Franklin`;
  } else {
    document.getElementById(
      "quote"
    ).innerHTML = `"Life has no limitations, except the ones you make." -Les Brown`;
  }
}
