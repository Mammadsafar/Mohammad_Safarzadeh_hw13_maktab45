
$(document).ready(() => {
    $('#user').on('click', (e) => {
        console.log(e);
        // e.preventDefault();

        let user = JSON.stringify({
            username: $("#username").val(),
            password: $("#password").val()
        })
        $.ajax({
            data: user,
            url: '/user/getUser',
            method: "POST",
            success: function (data, a, b) {

                console.log(b);

                console.log(data);
                if (b.status === 200) {
                    alert(JSON.stringify(data))
                } else {
                    alert("This User does not exist")
                }
            },
            error: function (err) {
                console.log(err);

                console.log(err);
            }
        })

    })

    $('#admin').on('click', (e) => {

        $.ajax({
            url: '/admin/getAllUsers',
            method: "GET",
            success: function (data) {

                alert(JSON.parse(data))

            },
            error: function (err) {
                console.log(err);
            }
        })
    })

})