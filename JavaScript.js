function filter() {
    let search = document.getElementById("search").value.toLowerCase();
    let listInner = document.getElementsByClassName("listInner");

    for (let i = 0; i < listInner.length; i++) {
        na = listInner[i].getElementsByClassName("na");
        number = listInner[i].getElementsByClassName("number");
        if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
            number[0].innerHTML.toLowerCase().indexOf(search) != -1
        ) {
            listInner[i].style.display = "flex";
        } else {
            listInner[i].style.display = "none";
        }
    }
}