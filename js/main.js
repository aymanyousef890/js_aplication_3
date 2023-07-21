var Site_Name = document.getElementById('bm')
var Site_URL = window.document.getElementById('su')
var all_web_site = []
var a = Boolean
if (localStorage.getItem('web') != null) {
    all_web_site = JSON.parse(localStorage.getItem('web'));
    show()
}


function add_Bookmark() {
    var websit = {
        name: Site_Name.value,
        s_url: Site_URL.value
    }
    valid()
    if (a == true && validate()) {
        all_web_site.push(websit)
        localStorage.setItem('web', JSON.stringify(all_web_site))
        console.log(all_web_site)
        clear()
        show()
    }
    a = false
}
function clear() {
    Site_Name.value = ""
    Site_URL.value = ""
}
function show() {
    var all_data = ``;
    for (var i = 0; i < all_web_site.length; i++) {
        all_data +=
            `
        <tr>
        <td class="p-3">${i}</td>
        <td class="p-3">${all_web_site[i].name}</td>
        <td><button class="btn btn-success"><a target="blank" href=${all_web_site[i].s_url}>
            <i class="fa-solid fa-eye pe-2"></i>Visit
            </a></button></td>
        <td>
          <button onclick="function5(${i})" class="btn  btn-danger" data-index="0">
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </button>
        </td>
        </tr>`
    }
    document.getElementById('table').innerHTML = all_data
}
function function5(index) {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your file has been deleted!", {
                    icon: "success",
                })
                all_web_site.splice(index, 1)
                localStorage.setItem('web', JSON.stringify(all_web_site))
                show()
                    ;
            } else {
                swal("Your file is safe!");
            }
        });
}
function validate() {
    var regexB = /^[a-z]{3,14}$/
    var regexU = /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9]+(?:\.[a-zA-Z]{2,})+(?:\/[\w\-\.\?\=\&]*)*$/
    if (regexB.test(Site_Name.value) == true && regexU.test(Site_URL.value) == true) {
        function3()
        return true;
    }
    else if (regexB.test(Site_Name.value) == false) {
        function function9() {
            swal("Sorry Site Name not valid !", "Site name must contain at least 3 characters. ", "error");
        }
        function9()
        return false;
    }
    else if (regexB.test(Site_URL.value) == false) {
        function function4() {
            swal("Sorry Site URL not valid !", "Site URL must be a valid one.", "error");
        }
        function4()
        return false;
    }
}
function function3() {
    swal("Success!", "Your data have been saved. Thank you!", "success");
}
function valid() {
    for (var i = 0; i < all_web_site.length; i++) {
        if (all_web_site[i].name != Site_Name.value) {
            a = true
        }
        else if (all_web_site[i].name == Site_Name.value) {
            function function9() {
                swal("Sorry Site Name not valid !", "Site name must not repeat. ", "error");
            }
            function9()
            a = false
        }
    }
}