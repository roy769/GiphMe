$(document).ready(function() {


  var Nick = [  "doug", "rugrats", "pete and pete", "ren and stimpy" "hey arnold", "rockos modern life", "you cant do that on television", "all that"
];

function populateButtons(arrayToUse, classToAdd, areaToAdd) {
  $(areaToAddTo).empty();

  for (var i = 0; i < arrayToUse.length; i++) {
    var nick = $("<button>");
    nick.addClass(classToAdd);
    nick.attr("data-type", arrayToUse[i]);
    nick.text(arrayToUse[i]);
    $(areaToAddTo).append(a);
  }
}
})
