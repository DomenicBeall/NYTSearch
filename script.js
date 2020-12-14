$("#searchbtn").on("click", function() {

    var searchTerm = $("#search").val().trim();
    var numberRes = Number($("#numberRes").val().trim());
    var startYear = $("#startY").val().trim();
    var endYear = $("#endY").val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=g0t77IZKEPbYqicc66eUR3TOBTkQGAje";

    if (startYear !== "") {
        queryURL += "&begin-date=" +  startYear;
    }

    if (endYear !== "") {
        queryURL += "&end-date=" + endYear;
    }

    $.ajax({
       url: queryURL,
       method: "GET"
     })
     .then(function(response) {
        var docs = response.response.docs;

        for (let i = 0; i < numberRes; i++) {
            var articleDiv = $("<div class=\"card\">");
            articleDiv.text(docs[i].abstract);
            $("#articles").append(articleDiv);
        }
     });
});