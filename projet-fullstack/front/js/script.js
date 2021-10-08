// function getAllCountries() {

//     $.ajax({
//         url: "http://localhost:8015/all",
//         success: (data, status, response) => {
//             console.log("data de la réponse", data)

//             for (let i = 0; i <= data.length - 1; i++){
//                 $("#listCountries").append(`<li>${data[i]}</li>`)
//             }
//         }
//     })
// }

// getAllCountries()

function getCountry(name) {

    $.ajax({
        url: "http://localhost:8015/country/" + name,
        success: (data, status, response) => {

            $("#listCountries").html(`<li> Country: ${data.name} - Capital: ${data.capital}</li>`)
        }
    })
}

$(function () {

    $("#btnShowData").click(function () {

        const searchCountry = $("#searchCountry").val()

        console.log("searchCountry", searchCountry)

        getCountry(searchCountry)

    })

})