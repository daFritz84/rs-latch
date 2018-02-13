// helper variables
const PRINTONE = "<span style=\"color: lightgreen\">1</span>";
const PRINTZERO = "<span style=\"color: red\">0</span>";

window.addEventListener('load', function(){
    // get shadow DOM of SVG image
    var svgDoc = $('#svgimage').contents();
		console.log("loading handler called!");
    // set initial state of the flip flop to reset state
    PathAnimation.setlog0(svgDoc.find(".set_active"));
    PathAnimation.setlog0(svgDoc.find(".q_active"));
    PathAnimation.setlog0(svgDoc.find(".set_and_e"));

    // logical wiring
    var reset = new LogicWire(svgDoc.find(".reset_active"),true);
    var reset_e = new LogicWire(svgDoc.find(".reset_and_e"),true);
    var q_not = new LogicWire(svgDoc.find(".q_not_active"),true);
    var q = new LogicWire(svgDoc.find(".q_active"), false);
    var set = new LogicWire(svgDoc.find(".set_active"), false);
    var set_e = new LogicWire(svgDoc.find(".set_and_e"), false); // combined with enable signal
    var enable = new LogicWire(svgDoc.find(".enable"),true);
		
		
	var and1 = new LogicAND(svgDoc.find(".and_spinner_bottom"), set, enable, set_e);
	var and2 = new LogicAND(svgDoc.find(".and_spinner_top"), reset, enable, reset_e);
	var not = new LogicNOT(svgDoc.find(".not_spinner"), set, reset);
    var nor1 = new LogicNOR(svgDoc.find(".nor_top_spinner"), reset_e, q_not, q);
    var 
    nor2 = new LogicNOR(svgDoc.find(".nor_bottom_spinner"), q, set_e, q_not);

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

    function enablefn() {
        if($("#enable").is(':checked')) {
            enable.setState(true);
        } else {
            enable.setState(false);
        }
    }

    $("#set").change(setfn);
	$("#enable").change(enablefn);

}, true);
