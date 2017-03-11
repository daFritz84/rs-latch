// helper variables
const PRINTONE = "<span style=\"color: lightgreen\">1</span>";
const PRINTZERO = "<span style=\"color: red\">0</span>";

// set initial state of the flip flop to reset state
PathAnimation.setlog0(".reset_active");
PathAnimation.setlog0(".set_active");
PathAnimation.setlog0(".q_active");

// logical wirinfg
var reset = new LogicWire(".reset_active",false);
var q_not = new LogicWire(".q_not_active",true);
var q = new LogicWire(".q_active", false);
var set = new LogicWire(".set_active", false);

var nor1 = new LogicNOR(".nor_top_spinner", reset, q_not, q);
var nor2 = new LogicNOR(".nor_bottom_spinner", q, set, q_not);

// setup onchange callbacks for truth table
reset.addChangeStateCallback(function(){
  $("#rvalue").html(reset.getState() ? PRINTONE : PRINTZERO);
});

set.addChangeStateCallback(function(){
  $("#svalue").html(set.getState() ? PRINTONE : PRINTZERO);
});

q.addChangeStateCallback(function(){
  $("#qvalue").html(q.getState() ? PRINTONE : PRINTZERO);
});

q_not.addChangeStateCallback(function(){
  $("#qnotvalue").html(q_not.getState() ? PRINTONE : PRINTZERO);
});


// control functions
function setfn() {
  if($("#set").is(':checked')) {
    set.setState(true);
  } else {
    set.setState(false);
  }
}

function resetfn() {
  if($("#reset").is(':checked')) {
    reset.setState(true);
  } else {
    reset.setState(false);
  }
}

function metafn() {
  if($("#metastable").is(':checked')) {
    set.setState(true);
    reset.setState(true);
  } else {
    set.setState(false);
    reset.setState(false);
  }
}

$("#set").change(setfn);
$("#reset").change(resetfn);
$("#metastable").change(metafn);
