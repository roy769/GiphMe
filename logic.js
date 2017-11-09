$(document).ready(function() {


  var giphs = [
    "doug", "rugrats", "pete and pete", "ren and stimpy", "hey arnold", "rockos modern life", "you cant do that on television", "all that"
];

function populateButtons(giphs, ".giph-buttons", "#giphs") {
  $("#giphs").empty();

  for (var i = 0; i < giphs.length; i++) {
    var giphy = $("<button>");
    giphy.addClass(".giph-buttons");
    giphy.attr("data-type", giphs[i]);
    giphy.text(giphs[i]);
    $("#giphs").append(giphy);
  }
}
$(document).on("click", ".giph-buttons", function() {
  $("#giphs").empty();
  $(".giph-buttons").removeClass("active");
  $(this).addClass("active");

  var type = $(this).attr("data-type");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=nickelodeon+" + type +"apikey=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method:"GET"
    })
    .done(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var giphDiv = $("<div class=\"giph-item\">");

        var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var animated = results[i].images.fixed_height_still_url;
          var still = results[i].images.fixed_height_still_url;

          var giphImage = $("<img>");
            giphImage.attr("src", still);
            giphImage.attr("data-still", still);
            giphImage.attr("data-animate", still);
            giphImage.attr("data-state", still);
            giphImage.addClass("giph-image", still);

            giphDiv.append(p);
            giphDiv.append("giph-image");

            $("giphs").append(giphDiv);
      }
    });
  });

  $(document).on("click", ".giph-image", function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
  });

  $("#add-giph").on("click", function(event) {
    event.preventDefault();
    var newGiph = $("input").eq(0).val();

    if(newGiph.length > 2) {
      giphs.push(newGiph);
    }

    populateButtons(giphs, "giph-button", "#giph-buttons");

  });

  populateButtons(giphs, "giph-button", "#giph-buttons");


});
