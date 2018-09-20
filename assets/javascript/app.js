// $(document).ready(function () {

  $("#search").on("click", function (event) {
    event.preventDefault();
    var q = $("#search-term").val();
    console.log(q)
    var records = $("#records-retrieve").val();
    var startDate = $("#start-year").val();
    var endYear = $("#end-year").val();
    var key = "2175d419e4364743b1efb0ef3243d2ab"


    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + "&q=" + q + "&begin_date=" + startDate + "0101" + "&end_date=" + endYear + "0101" + "&api-key=" + key;
    console.log(queryUrl);

    $.ajax({
      url: queryUrl,
      method: 'GET',
    }).then(function (response) {
      console.log(response)

      for (var i = 0; i < response.length; i++)
        var div = $("<div>");
      var snippet = $("<p>").text(response.response.docs[i].snippets);
      var webUrl = $("<p>").text(response.response.docs[i].web_url);
      var source = $("<p>").text(response.response.docs[i].source);
      
      $(".card-body").append(snippet, webUrl, source)
    })
  })
// });