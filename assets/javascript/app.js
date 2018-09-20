$(document).ready(function () {

  $("#search").on("click", function () {
    var q = $("#search-term").text();
    var records = $("#records-retrieve").text();
    var startDate = $("#start-year").text();
    var endYear = $("#end-year").text();
    var key = "2175d419e4364743b1efb0ef3243d2ab"


    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + "$q=" + q + "$begin_date=" + startDate + "0101" + "$end_date=" + endYear + "0101" + "$api-key" + key;

    $.ajax({
      url: queryUrl,
      method: 'GET',
    }).then(function (response) {
      console.log(response)

      for (var i = 0; i < records; i++)
        var div = $("<div>");
      var snippet = $("<p>").text(response[i].response.docs.snippets);
      var webUrl = $("<p>").text(response[i].response[i].docs.web_url);
      var source = $("<p>").text(response[i].response.docs.source);
      div.append(snippet, webUrl, source);
      $("#article").append(div)
    })
  })
});