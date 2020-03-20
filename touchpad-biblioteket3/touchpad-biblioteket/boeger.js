function findBoegerMed(forfatter) {
    fetch('http://openlibrary.org/search.json?author="' + forfatter + '"')
        .then(function (data) {
            return data.json();
        })
        .then(function (post) {
            if (post.docs.length === 0) {
                alert("Der er ingen forfatters som mathcer dit søgekriterie")
            } else {
                const paneloverskrift = [];
                paneloverskrift[0] = document.getElementById("paneloverskrift0");
                paneloverskrift[1] = document.getElementById("paneloverskrift1");
                paneloverskrift[2] = document.getElementById("paneloverskrift2");

                const paneltekst = [];
                paneltekst[0] = document.getElementById("paneltekst0");
                paneltekst[1] = document.getElementById("paneltekst1");
                paneltekst[2] = document.getElementById("paneltekst2");

                for (let i = 0; i < 3; i++) {
                    paneloverskrift[i].innerText = post.docs[i].title;
                    paneltekst[i].innerHTML = `
                <p>Publiceret år: ${post.docs[i].publish_year}</p><br><br>
                <p>Udgivet af: ${post.docs[i].publisher}</p><br><br><br>
                <p>ISBN: ${post.docs[i].isbn[1]}</p>
            `;

                }
                
                
            }
        })
        .catch(function (e) {
            console.log(e);
        })
}

// Hovedprogram

document.getElementById("soegeknap").addEventListener("click", function () {
    const forfatter = document.getElementById("soegefelt").value;
    const overskrift = document.getElementById("overskrift");
    findBoegerMed(forfatter);
    overskrift.innerHTML = "3 bøger af " + forfatter;
})
