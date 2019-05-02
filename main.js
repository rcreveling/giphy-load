function loadCard(imageUrl, titleID) {
    debugger;
    var newImage = $("<img>");
    newImage.attr("src", imageUrl);
    newImage.attr("alt", "Giphy image");
    newImage.css({
        width: "15vw",
        height: "auto",
        maxHeight: "17vw",
    })
    console.log(newImage)
    var myCards = {
        components: {
            row: $("#imageRow"),
            col: "",
            card: $("<div>", { class: "card", id: "" }),
            cardImage: "",
        },
    }
    var colID = (titleID + "col")
    var colIdJQ = ('"#' + colID + '"')
    var newCardImage = $("<div>", { class: "cardImage", id: "" })
    var newCard = $("<div>", { class: "card", id: "" })
    var newCol = $("<div>", { class: "col s3", id: "" })
    newCardImage.attr('id', titleID)
    newCol.attr('id', colID)
    // Card Styles //
    newCard.css({
        maxHeight: "10vh",
        height: "100%",
        maxWidth: "15vw"
    })
    console.log(colIdJQ)
    console.log(newCardImage, newCard, myCards.components.card)
    /// MAKING CARD ATTEMPT ///
    newCardImage.append(newImage)
    newCard.append(newCardImage)
    newCol.append(newCard)
    $("#imageRow").append(newCol)
}

$("button").on("click", function () {


    var APIkey = "21pbXpSdx68vgJpuoB7wb0uQgVGGuGUg"
    var search = $(this).attr('id')
    console.log(search)
    //
    var queryURL = ("https://api.giphy.com/v1/gifs/random?api_key=21pbXpSdx68vgJpuoB7wb0uQgVGGuGUg&tag=" + search);

    //
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        //
        .then(function (response) {
            console.log(response.data)
            //
            var imageUrl = response.data.image_original_url;
            var imageTitle = response.data.title
            var titleID = (imageTitle.replace(/ /g, ''))
            // console.log(newTitle)
            //

            //

            loadCard(imageUrl, titleID);
        });
});


