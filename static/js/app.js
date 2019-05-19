// from data.js
var tableData = data;

// YOUR CODE HERE!
var filter_btn = d3.select("#filter-btn");
var date_filter = d3.select("#datetime");
var table_body = d3.select("tbody");

filter_btn.on("click",searchData);

function searchData(event) {

    d3.event.preventDefault();

    var searchDate = date_filter.property("value");

    // console.log(searchDate);

    var filter_tableData = tableData.filter(d => d.datetime === searchDate);

    // console.log(filter_tableData);

    filter_tableData.forEach(function(row_value){

        var table_row = table_body.append("tr");

        Object.values(row_value).forEach((value) => {

            table_row.append("td").text(value);

        })

    })

}

