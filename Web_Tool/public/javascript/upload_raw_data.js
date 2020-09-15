var subtopicsdata = []
var subtopicsdesc = []
window.onload = function () {
    var breakdown = 0
    getElementToUpload('upload_principal_topics', breakdown)
    breakdown = 1
    getElementToUpload('upload_principal_topics_description', breakdown)
    breakdown = 2
    getElementToUpload('upload_sub_topics', breakdown)
    breakdown = 3
    getElementToUpload('upload_sub_topics_description', breakdown)

    // var upload_desc_topics = document.getElementById('upload_sub_topics_description');
    // upload_desc_topics.onchange = function () {
    //     console.log(this)
    //     breakdown = 0
    //     readFile(this, function (res) { alert(res) }, breakdown);
    // }
    // var upload_sub_topics = document.getElementById('upload_sub_topics');
    // upload_sub_topics.onchange = function () {
    //     console.log(this)
    //     breakdown = 1
    //     readFile(this, function (res) { alert(res) }, breakdown);
    // }
    // var upload_principal_topics = document.getElementById('upload_principal_topics');
    // upload_principal_topics.onchange = function () {
    //     console.log(this)
    //     breakdown = 2
    //     readFile(this, function (res) { alert(res) }, breakdown);
    // }

}

function getElementToUpload(elemId, breakdown) {
    var upload_file = document.getElementById(elemId);
    upload_file.onchange = function () {
        console.log(this)
        readFile(this, function (res) { alert(res) }, breakdown);
    }
}


function readFile(input, callback, breakdown) {
    if (typeof FileReader !== 'undefined') {
        var fr = new FileReader();
        fr.readAsText(input.files[0])
        fr.onload = function () {
            let data = fr.result
            data = data.split(" ")
            // console.log("fr.result", fr.result)
            // console.log("data", data)
            // callback(fr.result);
            json_file = JSON.stringify(fr.result).split("\\r\\n")
            // len_rows = json_file.length
            json_file = json_file.slice(0, -1)
            // console.log("json_file", json_file)
            if (breakdown == 0) {
                buildDataPrincipalTopic(json_file)
            } else if (breakdown == 1) {
                buildPrincipalTopicDescription(json_file)
            } else if (breakdown == 2) {
                subtopicsdata = buildDataSubTopic(json_file)
            } else if (breakdown == 3) {
                subtopicsdesc = buildSubTopicDescription(json_file)
            }

        };
    } else if (typeof ActiveXObject !== 'undefined') {
        var path = input.value
        ts = (new ActiveXObject("Scripting.FileSystemObject")).GetFile(path).OpenAsTextStream(1, -2)
        res = '';
        while (!ts.AtEndOfStream) {
            res += ts.ReadLine() + '\n';
        }
        ts.Close();
        callback(res);
    }

}
