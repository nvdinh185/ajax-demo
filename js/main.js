$("#getData").click(function () {
    $.ajax({
        url: "http://localhost:3000/students",
        type: "GET",
        cache: false,
        success: function (data) {
            // Success message
            console.log('data: ', data);
            var ulElement = $("#list-students")

            var htmls = data.map(function (student) {
                return `
                <li>
                    <h2>Name: ${student.name}</h2>
                    <p>Address: ${student.address}</p>
                </li>`;
            })

            ulElement.html(htmls);
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

$("#postData").click(function () {
    location = 'post.html';
})