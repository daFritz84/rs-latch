// configuration
// SESTODO: not used right now !? also configure easing?
const ANIMATION_TIME = 1; // second(s)

// set initial state of the flip flop to reset state
PathAnimation.setlog0(".reset_active");
PathAnimation.setlog0(".set_active");
PathAnimation.setlog0(".q_active");

// test code
//PathAnimation.log0(".q_not_active");
//PathAnimation.log1(".q_active");
//PathAnimation.tpd(".nor_bottom_spinner");

// logical wirinfg
var reset = new LogicWire(".reset_active",false);
var q_not = new LogicWire(".q_not_active",true);
var q = new LogicWire(".q_active", false);
var set = new LogicWire(".set_active", false);

var nor1 = new LogicNOR(".nor_top_spinner", reset, q_not, q);
var nor2 = new LogicNOR(".nor_bottom_spinner", q, set, q_not);

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

  set.setState(true);

  // create animation timeline
  /*var animation = new TimelineLite();
  animation.log1(".set_active")
  .tpd(".nor_bottom_spinner")
  .log0(".q_not_active")
  .tpd(".nor_top_spinner")
  .log1(".q_active")
  .log0(".set_active");*/
}

function resetfn() {

  reset.setState(true);

  // create animation timeline
  /*var animation = new TimelineLite();
  animation.log1(".reset_active")
  .tpd(".nor_top_spinner")
  .log0(".q_active")
  .tpd(".nor_bottom_spinner")
  .log1(".q_not_active")
  .log0(".reset_active");*/
}

function metafn() {

  set.setState(true);
  reset.setState(true);

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
