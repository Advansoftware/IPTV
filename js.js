var canal = "";
$('#converte').click(function(){
    var dados = $("#arquivo").val();
    var linhas = dados.split("#EXTINF:-1");
    for(var i = 1; i < linhas.length; i++){
      var link =  "<li " + linhas[i]+"></li>";
      var nome ="NAME=" +$(link).attr("tvg-name")+";";
      var Turls = linhas[i].split(",");
      var rl = Turls[1].split("http:");
      var url = "URL=http:"+rl[1];

      canal += nome+"\n"+url;
    }
    console.log(Turls); 
    var monta = "[Tocom_URL_LIST]\n\n"+canal;
    $("#resultado").val(monta);
});
