var newRowCt = 0;
var newClick = false;
function loadCard(imageUrl, titleID, cardText, buttonID) {
    var newImagesID = "";
    var jButtonID = ("#" + buttonID + "head")
    if (newRowCt > 0 && buttonID !== $(jButtonID).text()) {
        debugger;
        var newID = "";
        newID = ("images" + JSON.stringify(newRowCt))
        console.log(newID)
        var newContainer = $("<div>", { id: (newID), class: "container" })
        $("body").append(newContainer)
        newImagesID = newID;

    }
    var newImage = $("<img>");
    newImage.attr("src", imageUrl);
    newImage.attr("alt", "Giphy image");
    newImage.css({
        width: "auto",
        maxWidth: "15vw",
        maxHeight: "15vh",
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
    var newID;
    function makeNewRow(count) {
        switch (count) {
            case "one":
                var newRow = $("<div>", { id: "imageRow2", class: "row" + buttonID })
                break;
            case "two":
                var newRow = $("<div>", { id: "imageRow3", class: "row" + buttonID })
                break;
            case "three":
                var newRow = $("<div>", { id: "imageRow4", class: "row" + buttonID })
                break;
        }
        $(".container").append(newRow)
    }
    switch (newRowCt) {
        case 6:
            $("button").one("click", function () {
                makeNewRow("one");
            })
            break;
        case 12:
            $("button").one("click", function () {
                makeNewRow("two");
            })
            break;
        case 18:
            $("button").one("click", function () {
                makeNewRow("three");
            })
            break;
    }


    var colID = (titleID + "col")
    var colIdJQ = ('"#' + colID + '"')
    var newCardImage = $("<div>", { class: "cardImage", id: "" })
    var newCard = $("<div>", { class: "card", id: "" })
    var newCol = $("<div>", { class: "col s3", id: "" })
    newCardImage.attr('id', titleID)
    var imageIDinput = ("#" + titleID)
    newCol.attr('id', colID)
    newCol.addClass(buttonID)
    // Card Styles //

    newCol.css({
        height: newImage.clientWidth,
        width: newImage.clientHeight,
        maxHeight: "15vh !important",
        maxWidth: "19vw",
    })

    newCard.css({
        height: newImage.clientWidth,
        width: newImage.clientHeight,
        maxHeight: "10vh !important",
        maxWidth: "16vw",
    })
    newCardImage.css({
        border: "1px solid orange"
    })
    newCard.html("<h6>" + cardText + "</h6>")
    console.log(colIdJQ)
    console.log(newCardImage, newCard, myCards.components.card)
    /// MAKING CARD ATTEMPT ///
    newCardImage.append(newImage)
    newCard.append(newCardImage)
    newCol.append(newCard)

    function listenForNewRow(section) {
        var selector = section;
        var rows = $('.container').children('.row')
        console.log(rows, selector)
        if (rows.length < 2) {
            var thisOne = [[...newCol.attr('class')]]
            var specific = thisOne
            var searchV = specific
            console.log(searchV)
            $("#imageRow").append(newCol)
        }
        if (rows.length >= 2) {
            $("#imageRow2").append(newCol)
        }
        if (5 > rows.length >= 3) {
            $("#imageRow3").append(newCol)
        }
        if (6 > rows.length >= 4) {
            $("#imageRow4").append(newCol)
        } else {
            console.log("That's enough of that one. Clear section or remove 'undesireables'. Use sound judgement.")
        }
        $(jButtonID).css({
            position: "absolute",
            top: "15vh",
            left: "0",
            width: "100vw",
            textAlign: "center",
            fontFamily: "Georgia, sans-serif",
            fontSize: "2em"
        })
        if (buttonID !== $(jButtonID).text()) {
            $(jButtonID).text(buttonID)
        }
    }
    listenForNewRow(buttonID);





}
var newSearch = "";

function userGif(a) {
    var APIkey = "21pbXpSdx68vgJpuoB7wb0uQgVGGuGUg"
    var search = a;
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

            loadCard(imageUrl, titleID, imageTitle, search);
        }).then(function () {
            newRowCt++;
        });
}



$("#resetBtn").on("click", function () {
    window.location.reload();
})
var acceptedValues = [];
$("#fireSearch").on("click", function () {
    debugger;
    var searchValue = $("input").val();
    acceptedValues.push(searchValue)
    console.log(searchValue)
    var newGifBtn = $("<button>", { id: searchValue, class: " gifButton btn black white-text " })
    newGifBtn.text(searchValue.trim())
    $("#buttonsDiv").append(newGifBtn)
})

$("#buttonsDiv").on("click", ".gifButton", function (acceptedValues) {
    var a = $(this).attr('id')
    var b = acceptedValues;
    console.log(a, b)
    if (jQuery.inArray(a, b)) {
        userGif(a)
    } else {
        alert("Error")
    }

})