$("#getData").click(function () {
    $.ajax({
        url: "http://localhost:3000/students",
        type: "GET",
        cache: false,
        success: function (data) {
            // Success message
            console.log('data: ', data);
            $('#p').text(data.length);
        },
        error: function (err) {
            // Fail message
            console.log('err: ', err);
        },
        complete: function () {
            console.log("Done");
        },
    });
})