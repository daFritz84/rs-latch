// configuration
const ANIMATION_TIME = 1; // second(s)

// set initial state of the flip flop to reset state
TweenLite.set(".reset_active", {drawSVG: "0%"});
TweenLite.set(".set_active", {drawSVG: "0%"});
TweenLite.set(".q_active", {drawSVG: "0%"});

// function to set a line log1
window.com.greensock.core.Animation.prototype.log1 = function (target) {
  return this.to(target, ANIMATION_TIME, {drawSVG: "100%", ease: Power0.easeNone});
};

// function to set a line log0
window.com.greensock.core.Animation.prototype.log0 = function (target) {
  return this.to(target, ANIMATION_TIME, {drawSVG: "100% 100%", ease: Power0.easeNone})
  .set(target, {drawSVG: "-2%"})
}

// function to visualize a propagation dely through a logic gate
window.com.greensock.core.Animation.prototype.tpd = function (target) {
  return this.set(target, {visibility: "visible"})
    .to(target, ANIMATION_TIME, {rotation:"+=360", transformOrigin:"45% 50%"})
    .set(target, {visibility: "hidden"});
}

function setfn() {
  // create animation timeline
  var animation = new TimelineLite();
  animation.log1(".set_active")
  .tpd(".nor_bottom_spinner")
  .log0(".q_not_active")
  .tpd(".nor_top_spinner")
  .log1(".q_active")
  .log0(".set_active");
}

function resetfn() {
  // create animation timeline
  var animation = new TimelineLite();
  animation.log1(".reset_active")
  .tpd(".nor_top_spinner")
  .log0(".q_active")
  .tpd(".nor_bottom_spinner")
  .log1(".q_not_active")
  .log0(".reset_active");
}

function metafn() {
    // create animation timeline
  var animation = new TimelineLite();
  animation.log1(".reset_active,.set_active")
  .tpd(".nor_top_spinner,.nor_bottom_spinner")
  .log0(".reset_active,.set_active")
  .log1(".q_active,.q_not_active")
  .tpd(".nor_top_spinner,.nor_bottom_spinner")
  .log0(".q_active,.q_not_active")
  .tpd(".nor_top_spinner,.nor_bottom_spinner")
  .log1(".q_active,.q_not_active")
  .tpd(".nor_top_spinner,.nor_bottom_spinner")
  .log0(".q_active,.q_not_active")
  .tpd(".nor_top_spinner,.nor_bottom_spinner")
  .log1(".q_active,.q_not_active")
  .tpd(".nor_top_spinner,.nor_bottom_spinner")
  .log0(".q_active,.q_not_active")
  .tpd(".nor_top_spinner,.nor_bottom_spinner")
  .log1(".q_active,.q_not_active")
  .tpd(".nor_top_spinner,.nor_bottom_spinner")
  .log0(".q_active,.q_not_active");
}

$("#set").click(setfn);
$("#reset").click(resetfn);
$("#metastable").click(metafn);