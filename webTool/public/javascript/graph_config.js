let graphConfig = function (seriesOptions, title) {
    var config = {
        title: {
            text: title
        },
        series: seriesOptions,
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                events: {
                    click: function (event) {
                        let topic_name = this.name

                        let nbr_topic = topic_name.charAt(topic_name.length - 1);
                        let first_line = subtopicsdata[0]
                        // console.log("nbr_topic", nbr_topic)
                        // console.log("first_line", first_line)
                        // console.log("array_filtered", subtopicsdata)
                        let array_filtered = subtopicsdata.filter(function (value, index) { return value[1] == nbr_topic; });
                        let title = "Sub Topics Evolution"
                        // console.log("array_filtered", array_filtered)
                        buildGraph2(array_filtered, first_line, 1, title, topic_name, "chart_sub_topics")

                        let surtopicsdescdetails = subtopicsdesc.filter(function (value, index) { return index == nbr_topic })
                        console.log("surtopicsdescdetails", surtopicsdescdetails)
                        document.getElementById("desc_sub_topics").innerHTML = ""
                        htmltext = ''
                        surtopicsdescdetails[0].forEach(elem => {
                            htmltext += "<li>" + elem + "</li>"
                        })
                        document.getElementById("desc_sub_topics").innerHTML = "<h3>Sub topics description for " + topic_name + "</h3><ul>" + htmltext + "</ul>"

                    },

                }
            }
        },
    }

    return config
}

let graphConfig2 = function (seriesOptions, title, topic_name) {
    var config = {
        title: {
            text: title
        },
        subtitle: {
            text: topic_name
        },
        series: seriesOptions,
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

    }

    return config
}