$(document).ready(function() {

    $.ajax({
        url: '/getUserData',
        method: 'GET',
        success: function(data) {
            // dataUsers = JSON.parse(data);
            // console.log(dataUsers)
            // alert(data)
            create_card(data)

        },
        error: function() {
            alert("err")
        }
    })


    function create_card(data){
    console.log(data);
        for (let i = 0; i < 6; i++) {
            let user =
                `
                <div class="col mt-3 col-12 col-md-4 col-lg-3" ontouchstart="this.classList.toggle('hover');">
                    <div class="card" style="width: 18rem;">
                        <img src="img/${data[i].img}" class="card-img-top" >
                        <div class="card-body">
                            <h5 class="card-title">${data[i].title}</h5>
                            <p class="card-text">${data[i].description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${data[i].price}</li>
                        </ul>
                        <div class="card-body">
                            <div class="frame">
                                <a class="custom-btn btn-12" href="card/card${i+1}" ><span>Click!</span><span>More Info</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                `

            $("#card_body").append(user);

        }

    }

    function show_profile(even){
        console.log(even);
    }
    // $("#show_profile").on("click",function(id) {
    //     console.log(id);
    // })

})
