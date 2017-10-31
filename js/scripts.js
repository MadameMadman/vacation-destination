var vrc = 0;
var al = 0;
var hf = 0;
var rr = 0;

var questions = function(question){
  if (question === "vrc") {
    vrc+=1;
  } else if (question === "hf"){
    hf+=1;
  } else if (question === "al") {
    al+=1;
  } else if (question === "rr") {
    rr+=1;
  }
}

$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("input:radio[name=q3]:checked").val();
    var q4 = $("input:radio[name=q4]:checked").val();
    var q5 = $("input:radio[name=q5]:checked").val();
    var q6 = $("input:radio[name=q6]:checked").val();
    var q7 = $("input:radio[name=q7]:checked").val();
    var q8 = $("input:radio[name=q8]:checked").val();
    var q9 = $("input:radio[name=q9]:checked").val();
    var q10 = $("input:radio[name=q10]:checked").val();
    var q11 = $("input:radio[name=q11]:checked").val();
    var q12 = $("input:radio[name=q12]:checked").val();

    questions(q1);
    questions(q2);
    questions(q3);
    questions(q4);
    questions(q5);
    questions(q6);
    questions(q7);
    questions(q8);
    questions(q9);
    questions(q10);
    questions(q11);
    questions(q12);

    if (vrc >= al && vrc >= hf && vrc >= rr) {
      $(".vrc").show();
    } else if (al >= vrc && al >= hf && al >= rr) {
      $(".al").show();
    } else if (hf >= al && hf >= vrc && hf >= rr) {
      $(".hf").show();
    } else {
      $(".rr").show();
    }
    $("#quiz").hide();
  });
});
