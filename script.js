$(document).ready(function() {
    $("#character-form").submit(function(event){
        event.preventDefault();
        let imeLika= $("#lik").val();
        let url= "https://swapi.dev/api/people/?search="+imeLika;
        $.ajax ({
            url: url,
            type:"GET",
            dataType: "json",
            sucess: function(data) {
                if(data.results.length > 0) {
                    let lik  = data.results[0];
                    let likInfo = "";
                    likInfo +=`<li>Ime: `+lik.name+`</li>`
                    likInfo +=`<li>Godina rođenja:`+lik.birth_year+`</li>`
                    likInfo +=`<li>Spol: `+lik.gender+`</li>`
                    likInfo +=`<li>Boja kose: `+lik.hair_color+`</li>`
                    likInfo +=`<li>Boja očiju`+lik.eye_color+`</li>`
                    $("#rezultat").html(likInfo);
                } else {
                    $("#rezultat").html("<li>Podaci o liku nisu pronađeni</li>")
                }
            },
            error: function() {
                $("#rezultat").html("<li>Podaci o liku nisu dohvaćeni</li>")
            }
        })
    });
});