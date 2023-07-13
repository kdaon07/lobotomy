function don() {
    alert("만지지마");
    document.getElementById("container").style.display = "none";
}

function filter() {
    let search = document.getElementById("search").value.toLowerCase();
    let listInner = document.getElementsByClassName("AL");

    for (let i = 0; i < listInner.length; i++) {
        na = listInner[i].getElementsByClassName("na");
        number = listInner[i].getElementsByClassName("number");
        if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
            number[0].innerHTML.toLowerCase().indexOf(search) != -1
        ) {
            if (btA == 1)
                listInner[i].style.display = "flex";
            filterW();
        } else {
            listInner[i].style.display = "none";
            filterW();
        }
    }
}

function filterW() {
    let search = document.getElementById("search").value.toLowerCase();
    let listInner = document.getElementsByClassName("WA");
    for (let i = 0; i < listInner.length; i++) {
        na = listInner[i].getElementsByClassName("na");
        number = listInner[i].getElementsByClassName("number");
        if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
            number[0].innerHTML.toLowerCase().indexOf(search) != -1
        ) {
            if (btW == 1)
                listInner[i].style.display = "flex";
            filterH();
        } else {
            listInner[i].style.display = "none";
            filterH();
        }
    }
}

function filterH() {
    let search = document.getElementById("search").value.toLowerCase();
    let listInner = document.getElementsByClassName("HE");

    for (let i = 0; i < listInner.length; i++) {
        na = listInner[i].getElementsByClassName("na");
        number = listInner[i].getElementsByClassName("number");
        if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
            number[0].innerHTML.toLowerCase().indexOf(search) != -1
        ) {
            if (btW == 1)
                listInner[i].style.display = "flex";
            filterT();
        } else {
            listInner[i].style.display = "none";
            filterT();
        }
    }
}

function filterT() {
    let search = document.getElementById("search").value.toLowerCase();
    let listInner = document.getElementsByClassName("TE");

    for (let i = 0; i < listInner.length; i++) {
        na = listInner[i].getElementsByClassName("na");
        number = listInner[i].getElementsByClassName("number");
        if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
            number[0].innerHTML.toLowerCase().indexOf(search) != -1
        ) {
            if (btW == 1)
                listInner[i].style.display = "flex";
            filterZ();
        } else {
            listInner[i].style.display = "none";
            filterZ();
        }
    }
}

function filterZ() {
    let search = document.getElementById("search").value.toLowerCase();
    let listInner = document.getElementsByClassName("ZA");

    for (let i = 0; i < listInner.length; i++) {
        na = listInner[i].getElementsByClassName("na");
        number = listInner[i].getElementsByClassName("number");
        if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
            number[0].innerHTML.toLowerCase().indexOf(search) != -1
        ) {
            if (btW == 1)
                listInner[i].style.display = "flex";
        } else {
            listInner[i].style.display = "none";
        }
    }
}
btA = 1;
btW = 1;
btH = 1;
btT = 1;
btZ = 1;
function fA() {
    if (btA == 1) {
        btA = 0;
        let listInner = document.getElementsByClassName("AL");

        for (let i = 0; i < listInner.length; i++) {
            na = listInner[i].getElementsByClassName("na");
            number = listInner[i].getElementsByClassName("number");
            listInner[i].style.display = "none";
        }

    }
    else {
        btA = 1;
        let search = document.getElementById("search").value.toLowerCase();
        let listInner = document.getElementsByClassName("AL");
        for (let i = 0; i < listInner.length; i++) {
            na = listInner[i].getElementsByClassName("na");
            number = listInner[i].getElementsByClassName("number");
            if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
                number[0].innerHTML.toLowerCase().indexOf(search) != -1
            )
                listInner[i].style.display = "flex";

        }
    }
}
//줄확인----------------------------------------------------------------------------------------------------
function fW() {
    if (btW == 1) {
        btW = 0;
        let listInner = document.getElementsByClassName("WA");

        for (let i = 0; i < listInner.length; i++) {
            na = listInner[i].getElementsByClassName("na");
            number = listInner[i].getElementsByClassName("number");
            listInner[i].style.display = "none";
        }
    }
    else {
        btW = 1;
        let search = document.getElementById("search").value.toLowerCase();
        let listInner = document.getElementsByClassName("WA");
        for (let i = 0; i < listInner.length; i++) {
            na = listInner[i].getElementsByClassName("na");
            number = listInner[i].getElementsByClassName("number");
            if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
                number[0].innerHTML.toLowerCase().indexOf(search) != -1
            )
                listInner[i].style.display = "flex";

        }
    }
}
//줄확인----------------------------------------------------------------------------------------------------
function fH() {
    if (btH == 1) {
        btH = 0;
        let listInner = document.getElementsByClassName("HE");

        for (let i = 0; i < listInner.length; i++) {
            na = listInner[i].getElementsByClassName("na");
            number = listInner[i].getElementsByClassName("number");
            listInner[i].style.display = "none";
        }
    }
    else {
        btH = 1;
        let search = document.getElementById("search").value.toLowerCase();
        let listInner = document.getElementsByClassName("HE");
        for (let i = 0; i < listInner.length; i++) {
            na = listInner[i].getElementsByClassName("na");
            number = listInner[i].getElementsByClassName("number");
            if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
                number[0].innerHTML.toLowerCase().indexOf(search) != -1
            )
                listInner[i].style.display = "flex";

        }
    }
}
//줄확인----------------------------------------------------------------------------------------------------
function fT() {
    if (btT == 1) {
        btT = 0;
        let listInner = document.getElementsByClassName("TE");

        for (let i = 0; i < listInner.length; i++) {
            na = listInner[i].getElementsByClassName("na");
            number = listInner[i].getElementsByClassName("number");
            listInner[i].style.display = "none";
        }
    }
    else {
        btT = 1;
        let search = document.getElementById("search").value.toLowerCase();
        let listInner = document.getElementsByClassName("TE");
        for (let i = 0; i < listInner.length; i++) {
            na = listInner[i].getElementsByClassName("na");
            number = listInner[i].getElementsByClassName("number");
            if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
                number[0].innerHTML.toLowerCase().indexOf(search) != -1
            )
                listInner[i].style.display = "flex";

        }
    }
}
//줄확인----------------------------------------------------------------------------------------------------
function fZ() {
    if (btZ == 1) {
        btZ = 0;
        let listInner = document.getElementsByClassName("ZA");

        for (let i = 0; i < listInner.length; i++) {
            na = listInner[i].getElementsByClassName("na");
            number = listInner[i].getElementsByClassName("number");
            listInner[i].style.display = "none";
        }
    }
    else {
        btZ = 1;
        let search = document.getElementById("search").value.toLowerCase();
        let listInner = document.getElementsByClassName("ZA");
        for (let i = 0; i < listInner.length; i++) {
            na = listInner[i].getElementsByClassName("na");
            number = listInner[i].getElementsByClassName("number");
            if (na[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
                number[0].innerHTML.toLowerCase().indexOf(search) != -1
            )
                listInner[i].style.display = "flex";

        }
    }
}



function nt() {
    if (work1 == 1) work();
    if (worke3 == 1) worke();
    if (how1 == 1) how();
    let text = document.getElementById("nothing");
    let textInner = document.getElementsByClassName("textInner");
    for (let i = 0; i < textInner.length; i++) {
        textInner[i].style.display = "none";
    }
    text.style.display = "flex";
}

function so() {
    if (work1 == 1) work();
    if (worke3 == 1) worke();
    if (how1 == 1) how();
    let text = document.getElementById("silent");
    let textInner = document.getElementsByClassName("textInner");
    for (let i = 0; i < textInner.length; i++) {
        textInner[i].style.display = "none";
    }
    text.style.display = "flex";
}

function tb() {
    if (work1 == 1) work();
    if (worke3 == 1) worke();
    if (how1 == 1) how();
    let text = document.getElementById("Tbird");
    let textInner = document.getElementsByClassName("textInner");
    for (let i = 0; i < textInner.length; i++) {
        textInner[i].style.display = "none";
    }
    text.style.display = "flex";
}

function rh() {
    if (work1 == 1) work();
    if (worke3 == 1) worke();
    if (how1 == 1) how();
    let text = document.getElementById("hoode");
    let textInner = document.getElementsByClassName("textInner");
    for (let i = 0; i < textInner.length; i++) {
        textInner[i].style.display = "none";
    }
    text.style.display = "flex";
}

function db() {
    if (work1 == 1) work();
    if (worke3 == 1) worke();
    if (how1 == 1) how();
    let text = document.getElementById("Butter");
    let textInner = document.getElementsByClassName("textInner");
    for (let i = 0; i < textInner.length; i++) {
        textInner[i].style.display = "none";
    }
    text.style.display = "flex";
}

function ah() {
    if (work1 == 1) work();
    if (worke3 == 1) worke();
    if (how1 == 1) how();
    let text = document.getElementById("helper");
    let textInner = document.getElementsByClassName("textInner");
    for (let i = 0; i < textInner.length; i++) {
        textInner[i].style.display = "none";
    }
    text.style.display = "flex";
}

function sg() {
    if (work1 == 1) work();
    if (worke3 == 1) worke();
    if (how1 == 1) how();
    let text = document.getElementById("sgirl");
    let textInner = document.getElementsByClassName("textInner");
    for (let i = 0; i < textInner.length; i++) {
        textInner[i].style.display = "none";
    }
    text.style.display = "flex";
}
function pb() {
    if (work1 == 1) work();
    if (worke3 == 1) worke();
    if (how1 == 1) how();
    let text = document.getElementById("Pbird");
    let textInner = document.getElementsByClassName("textInner");
    for (let i = 0; i < textInner.length; i++) {
        textInner[i].style.display = "none";
    }
    text.style.display = "flex";
}
function good() {
    if (work1 == 1) work();
    if (worke3 == 1) worke();
    if (how1 == 1) how();
    let text = document.getElementById("Good");
    let textInner = document.getElementsByClassName("textInner");
    for (let i = 0; i < textInner.length; i++) {
        textInner[i].style.display = "none";
    }
    text.style.display = "flex";
}
worke3 = 0;
function worke() {
    let listInner = document.getElementsByClassName("worke2");
    if (worke3 == 0) {
        worke3 = 1;
        for (let i = 0; i < listInner.length; i++) {
            listInner[i].style.height = "300px";
        }
    }
    else {
        worke3 = 0;
        for (let i = 0; i < listInner.length; i++) {
            listInner[i].style.height = "0px";
        }
    }
}

how1 = 0;
function how() {
    let listInner = document.getElementsByClassName("how2");
    if (how1 == 0) {
        how1 = 1;
        for (let i = 0; i < listInner.length; i++) {
            listInner[i].style.height = '400px';
        }
    }
    else {
        how1 = 0;
        for (let i = 0; i < listInner.length; i++) {
            listInner[i].style.height = "0px";
        }
    }
}

work1 = 0;
function work() {
    let listInner = document.getElementsByClassName("work2");
    if (work1 == 0) {
        work1 = 1;
        for (let i = 0; i < listInner.length; i++) {
            listInner[i].style.height = '400px';
        }
    }
    else {
        work1 = 0;
        for (let i = 0; i < listInner.length; i++) {
            listInner[i].style.height = "0px";
        }
    }
}