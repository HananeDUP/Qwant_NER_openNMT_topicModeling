function buildGraph(data_series, first_line, j, title, dom_id) {
    let len_cols = first_line.length
    let seriesOptions = []
    for (var i = 1; i < len_cols; i++) {
        var array_data = []
        data_series.slice(1,).forEach(element => {
            array_data.push([parseInt(element[0]), parseFloat(element[i + j])])
        });
        seriesOptions.push({ name: first_line[i + j], data: array_data })
    }
    console.log(seriesOptions)
    var chart = Highcharts.chart(dom_id, graphConfig(seriesOptions, title))
}

function buildGraph2(data_series, first_line, j, title, topic_name, dom_id) {
    document.getElementById(dom_id).innerHTML = ""
    let len_cols = first_line.length
    // console.log("len_cols buildGraph2", len_cols)
    // console.log("first_line buildGraph2", first_line)
    let seriesOptions = []
    for (var i = 1; i < len_cols - j; i++) {
        var array_data = []
        data_series.forEach(element => {
            array_data.push([parseInt(element[0]), parseFloat(element[i + j])])
        });
        seriesOptions.push({ name: first_line[i + j], data: array_data })
    }
    // console.log("seriesOptions buildGraph2", seriesOptions)
    var chart = Highcharts.chart(dom_id, graphConfig2(seriesOptions, title, topic_name))
}

function buildDataPrincipalTopic(json_file) {
    len_rows = json_file.length

    let first_line = json_file[0].split(",")
    first_line[0] = first_line[0].slice(1,)
    // console.log("first_line", first_line)

    json_file = json_file.map(elem => elem.split(","))
    // console.log("buildDataPrincipalTopic json_file", json_file)
    // var array_filtrer = json_file.filter(function (value, index) { return value[1] == "0"; });
    let title = "Topics Evolution"
    buildGraph(json_file, first_line, 0, title, "chart_principal_topics")

}

function buildPrincipalTopicDescription(json_file) {
    len_rows = json_file.length
    json_file = json_file.slice(1,)
    // console.log("buildPrincipalTopicDescription", json_file)
    document.getElementById("desc_principal_topics").innerHTML = ""
    htmltext = ''
    json_file.forEach(elem => {
        htmltext += "<li>" + elem + "</li>"
    })
    document.getElementById("desc_principal_topics").innerHTML = "<h3>Principal topics description</h3><ul>" + htmltext + "</ul>"
}

function buildDataSubTopic(json_file) {
    // len_rows = json_file.length

    // let first_line = json_file[0].split(",")
    // first_line[0] = first_line[0].slice(1,)

    json_file = json_file.map(elem => elem.split(","))
    // console.log("buildDataSubTopic json_file", json_file)
    // var array_filtrer = json_file.filter(function (value, index) { return value[1] == "0"; });
    // let title = "Sub Topics Evolution"
    // buildGraph(array_filtrer, first_line, 1, title, "chart_sub_topics")
    return json_file
}

function buildSubTopicDescription(json_file) {
    len_rows = json_file.length
    json_file = json_file.slice(1,).map(elem => elem.split(","))
    // console.log(json_file)
    return json_file
}



