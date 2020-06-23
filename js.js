var canal = "";
$('#converte').click(function(){
    var dados = $("#arquivo").val();
    var linhas = dados.split("#EXTINF:-1");

    for(var i = 1; i < linhas.length; i++){
        var link =  "<li " + linhas[i]+"></li>";
        var nome ="\nNAME="+$(link).attr("tvg-name")+"; ";
        var Turls = linhas[i].split(",");
        var rl = Turls[1].split("http:");
        var url = "URL=http:"+ rl[1].trim();
        canal += nome.concat(url, ';');
      }

    var monta = "[Tocom_URL_LIST]\n"+canal;
    $("#resultado").text(monta);
    });
 