$('#create').click(function () {
    $this = $("#create");
    $this.prop("disabled", true);
    $.ajax({
        url: "http://localhost:3000/students",
        type: "POST",
        data: {
            name: $('input[name="name"]').val(),
            address: $('input[name="address"]').val()
        },
        cache: false,
        success: function (data) {
            // Success message
            console.log('data: ', data);
        },
        error: function (err) {
            // Fail message
            console.log('err: ', err);
        },
        complete: function () {
            console.log("Done");
            $this.prop("disabled", false);
        },
    });
})