var company = {
    engCt: 0,
    mgrCt: 0,
    proCt: 0,
    invCt: 0,
    name: "mePear Inc.",
    bday: null,
    balance: 0,
    cash: 0,
    idlCt: 0
};

function changeName(val) {
    if (val == "") {
        val = company.name;
        $("#companyName").val(val);
    }
    company.name = val;
    $("#cn").html(company.name);
}

function openTab(evt, tab) {
    var i, tabcontent, tablinks;

    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = $(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
};


function btnClick(n) {
    company.cash += n;
    $("#cash").html(company.cash);
    $("#bal").html(company.cash);
}

function hire(n) {
    company.idlCt += n;
    $("#idlCt").html(company.idlCt);
    displayButtons();
}

function assign(cat, n) {
    var prop = "" + cat;
    company[prop] += n;
    company.idlCt -= n;
    document.getElementById(cat).innerHTML = company[prop];
    $("#idlCt").html(company.idlCt);
    displayButtons();
}

function displayButtons() {
    var plus = document.getElementsByClassName("plus"),
        minus = document.getElementsByClassName("minus");
    if (company.idlCt > 0)
        for (var i = 0; i < plus.length; i++)
            plus.item(i).style.display = "inline";
    else
        for (var i = 0; i < plus.length; i++)
            plus.item(i).style.display = "none";
    for (var i = 0; i < minus.length; i++)
        if (company[i] > 0) {
            minus.item(i).style.display = "inline";
            else
                minus.item(i).style.display = "none";
        }
