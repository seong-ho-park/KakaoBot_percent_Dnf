
const scriptName="던담2.js";

const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();

const Command = {};
Command.output = function(msg) {

   var output_question = msg.replace('!','').split(' ');
   var dir='';
      
   for(i=0;i<output_question.length;i++) {
      dir+='/';
      dir+=output_question[i];
   }

   var file = new java.io.File(sdcard+'/jadebot'+dir+'.txt');
      if(!(file.exists())) {  
         return '잘못된 값입니다.';
      }
   var fis = new java.io.FileInputStream(file);
   var isr = new java.io.InputStreamReader(fis);
   var br = new java.io.BufferedReader(isr);
   var str = br.readLine();

   var line = "";

   while((line = br.readLine()) !== null) {
      str += "\n" + line;
   }
         
   fis.close(); 
   isr.close();
   br.close();
   return str;
};


function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    var cmd = msg.split(" ");

    if(msg.indexOf("@던담")!=-1) {

        try{
    
        var chat = msg.split(" ")
    
        var chaS = chat[1]
    
        var chaN = chat[2]
    
        if(chat[1] != "카인" && chat[1] != "디레지에" && chat[1] != "시로코" && chat[1] != "프레이" && chat[1] != "카시야스" && chat[1] != "힐더" && chat[1] != "안톤" && chat[1] != "바칼") {
    
        replier.reply("서버를 잘못입력하셨습니다."+"\n"+"@던담 서버 닉네임 을 다시 확인해주세요.")
    
        return
    
        }
    
        chaN = chaN.replace(/&/g, "&")
    
        chaN = chaN.replace(/`/g, "`")
    
        chaN = chaN.replace(/#/g, "#")
    
        chaS = chaS.replace(/카인/g, "cain")
    
        chaS = chaS.replace(/디레지에/g, "diregie")
    
        chaS = chaS.replace(/시로코/g, "siroco")
    
        chaS = chaS.replace(/프레이/g, "prey")
    
        chaS = chaS.replace(/카시야스/g, "casillas")
    
        chaS = chaS.replace(/힐더/g, "hilder")
    
        chaS = chaS.replace(/안톤/g, "anton")
    
        chaS = chaS.replace(/바칼/g, "bakal")
    
        // var u = Utils.getWebText("https://dundam.xyz/searchActionTest.jsp?server="+chaS+ "&name" +chaN) 
        
        // var a = u.split("Ctrl + F") 
    
        // var b = a[1].split("onclick")
    
        // var c = b[0].replace(/(<([^>]+)>)/ig,"")
    
        // if(c.indexOf("없습니다") != -1) {
    
        // replier.reply("검색결과가 없습니다."+"\n"+"@던담 서버 닉네임 으로 확인하시고 다시입력해주세요.")
    
        // return
    
        // }
        // var ddam = Utils.getWebText("https://dundam.xyz/search?server="+chaS+"&name="+chaN)
        // var chaid = ddam.split("characterid=\"") 
        // chaid = chaid[1].split("\" src=\"")
        // chaid = chaid[0]
        // replier.reply(chaid)

        // var u = Utils.getWebText("https://dundam.xyz/view?image=0f46bdecb72ee3b73f02e8566f624320&server="+ chaS +"&name="+chanN)
    
        var u1 = Utils.getWebText("https://dunfaoff.com/CharacterSearchList.df?server="+chaS+"&id="+chaN, );
        var a1 = u1.split("card\" data-id=\"");
        var b1 = a1[1].split("\" data-server");
        
        var dnof = ("https://dunfaoff.com/SearchResult.df?server="+chaS+"&characterid="+b1[0])
        replier.reply(dnof);
        var ddam = Utils.getWebText("https://dundam.xyz/view?image="+b1[0]+"&server="+ chaS +"&name="+chanN,"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",false,false);
        replier.reply(ddam);
        
        var dnof = Utils.getWebText("https://dunfaoff.com/SearchResult.df?server="+chaS+"&characterid="+b1[0]);
        var sinerge1 = dnof.split("총 데미지");
        var sinerge2 = sinerge1[1].split("dmgTable");
        var sSinerge = sinerge2[0];
        replier.reply("시로코 1시 :" + sSinerge);
        
        if( c.indexOf("오류") != -1) {
        var u = Utils.getWebText("http://df.nexon.com")
        var a = u.split("최선을 다하겠습니다.\">")
        var b = a[1].split("")
        var c = b[0].replace(/(<([^>]+)>)/g,"")
        replier.reply("서버점검 중에는 데이터를 불러올수 없습니다."+"\n"+c)
        return
        }
        
        // var ri = ("http://dundam.xyz/"+ c)
    
        // u = Utils.getWebText("http://dundam.xyz/"+ c)
    
        // a = u.split("")
    
        // b = a[1].split(")<")
    
        // c = b[0].replace(/(<([^>]+)>)/ig,"")
    
        // c = c.trim()
    
        // c = c.replace(/amp;/g,"")
    
        var ChaR = c

    
    
        // if(ChaR.indexOf("명왕") != -1 || ChaR.indexOf("용독문주") != -1) {
    
        // a = u.split("이상")
    
        // }
    
        // else {
    
        // a = u.split("뎀")
    
        // }
    
        //     b = a[1].split("항마력")
    
        //     c = b[0].replace(/(<([^>]+)>)/ig,"")
    
        //     c = c.trim()
    
        //     var ChaB = c
    
        //     a = u.split("무기")
    
        //     b = a[1].split("")
    
        //     if(b==null){
    
        // var ChaW = "무기없음" 
    
        // }
    
        // else{
    
        // c = b[0].replace(/(<([^>]+)>)/ig,"")
    
        // c = c.trim()
    
        // var ChaW = c
    
        // a = u.split(ChaW)
    
        // b = a[1].split("")
    
        // if(b==null){
    
        //     var ChaG = "" } 

        // else{
    
        //     c = b[0].replace(/(<([^>]+)>)/ig,"")
    
        //     c = c.replace(/ /g,"")
    
        //     c = c.trim()
    
        //     var ChaG = c}
        // }
    
        //     a = u.split("")
    
        //     b = a[1].split("")
    
        //     c = b[0].replace(/(<([^>]+)>)/ig,"")
    
        //     c = c.replace(/ /g,"")
    
        //     c = c.trim()
    
        //     var ChaI = c
    
        //     var st1
    
        //     var st2
    
        // if(ChaI.indexOf("물리") != -1) {

        //     a = u.split("힘")[1].split("")[0].replace(/(<([^>]+)>)/ig,"")

        // a = a.replace(/ /g,"").trim()

        // st1 = a

        // }
    
        // else if(ChaI.indexOf("하이") != -1) {
    
        //     a = u.split("힘")[1].split("")[0].replace(/(<([^>]+)>)/ig,"")
        
        //     a = a.replace(/ /g,"").trim()
        
        //     st1 = a
        
        //     a = u.split("지능")
        
        //     b = a[1].split("")
        
        //     c = b[0].replace(/(<([^>]+)>)/ig,"")
        
        //     c = c.replace(/ /g,"")
        
        //     c = c.trim()
        
        //     st2 = c
    
        // }
    
        // else if(ChaI.indexOf("마법") != -1 ) {
    
        //     a = u.split("지능")
        
        //     b = a[1].split("")
        
        //     c = b[0].replace(/(<([^>]+)>)/ig,"")
        
        //     c = c.replace(/ /g,"")
        
        //     c = c.trim()
        
        //     st1 = c
        // }
    
        // if(ChaR.indexOf("세인트") != -1)
    
        // {
    
        //     a = u.split("체력")
    
        //     b = a[1].split("")
    
        //     c = b[0].replace(/(<([^>]+)>)/ig,"")
    
        //     c = c.replace(/ /g,"")
    
        //     c = c.trim()
    
        //     st2 = c
        // }
    
        //     a = u.split("id=\"rogen")
    
        //     b= a[1].split("")
    
        //     c = b[0].replace(/(<([^>]+)>)/ig,"")
    
        //     c = c.trim()
    
        //     c = c.split("\n")
    
        //     c.pop()
    
        //     var a=0
    
        //     var Buf
    
        //     for(var n=0; n;n++)
    
        // {
    
        // c[n] = c[n].trim()
    
        // if(c[n].indexOf("총 딜") == 0)
    
        // {
        //     a = n
        // }
        // }
    
        // chaN = chaN.replace(/&/g, "&")
    
        // if(ChaR.indexOf("헤카테") != -1 || ChaR.indexOf("세인트") != -1 || ChaR.indexOf("세라핌") != -1)
    
        //     {
    
        // if(ChaR.indexOf("세인트") != -1) { d = u.split("총 합(2각)") }
    
        // else if(ChaR.indexOf("헤카테") != -1) { d = u.split("총 합 (편애)") }
    
        // else { d = u.split("총 합 (아리아)") }
    
        // e= d[1].split("")
    
        // f = e[0].replace(/(<([^>]+)>)/ig,"")
    
        // f = f.trim()
    
        // Buf = f
    
        // if(ChaR.indexOf("세인트") != -1) { d = u.split("영광의 축복(2각)") }
    
        // else if(ChaR.indexOf("헤카테") != -1) { d = u.split("저주(편애)") }
    
        // else { d = u.split("용맹의 축복(아리아)") }
    
        // e = d[1].split("")
        // f = e[0].replace(/(<([^>]+)>)/ig,"")
        // f = f.replace(/,/g,"")
        // f = f.trim()
    
        // d = f.split("(")
    
        // e = d[1].split(")")
    
        // BufT = Number(e[0])
    
        // BufT2 = Math.floor(BufT * 0.02)
    
        // BufT4 = Math.floor(BufT * 0.04)
    
        // BufT6 = Math.floor(BufT * 0.06)
    
        // BufT8 = Math.floor(BufT * 0.08)
    
        // BufT10 = Math.floor(BufT * 0.1)
    
        // replier.reply(chaN+" 캐릭터 정보(버프/"+ChaI+")"+"\n"+ChaR+")"+"\n스위칭:"+ChaB+"\n"+"마을 지능:"+st1+"  마을 체/정:"+st2+"\n"+ChaW+" "+ChaG+"\n"+"---로젠 15초 딜표(총딜)---"+"\n"
    
        // +"0시너지: " + c[a+1] + "\n" + "1시너지: " + c[a+2]+"\n"+"---버프력 총합(룬제외)---"+"\n"+Buf+"\n룬 적용값(자신의 총 버프에 추가계산)\n2% : +"+BufT2+" | 4% : +"+BufT4+" | 6% : +"+BufT6+" | 8% : +"+BufT8+" | 10% : +"+BufT10+"\n\n던담 링크바로가기"+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+""+ri)
    
        // replier.reply(ChaR+")"+" - 버프/"+ChaI+"\n---로젠 15초 딜표(총딜)---"+"\n"
    
        // +"0시너지: " + c[a+1] + "\n" + "1시너지: " + c[a+2]+"\n"+"---버프력 총합---"+"\n"+Buf+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"\n스위칭:"+ChaB+"\n"+"마을 지능:"+st1+"  마을 체/정:"+st2+"\n"+ChaW+" "+ChaG+"\n"+"\n--던담--\n"+ri+"\n--던오프--\n"+dnof)
    
        // }
    
        // else if(ChaI.indexOf("물리") != -1)
    
        // {
    
        // replier.reply(ChaR+")"+" - "+ChaI+"\n---로젠 15초 딜표(총딜)---"+"\n"
    
        // +"0시너지: " + c[a+1] + "\n"+ "1시너지: " + c[a+2]+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"\n스위칭:"+ChaB+"\n"+"마을 힘:"+st1+"\n"+ChaW+" "+ChaG+"\n"+"\n--던담--\n"+ri+"\n--던오프--\n"+dnof)
    
        // }
    
        // else
    
        // {
    
        // replier.reply(ChaR+")"+" - "+ChaI+"\n---로젠 15초 딜표(총딜)---"+"\n"
    
        // +"0시너지: " + c[a+1] + "\n"+ "1시너지: " + c[a+2]+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"\n스위칭:"+ChaB+"\n"+"마을 지능:"+st1+"\n"+ChaW+" "+ChaG+"\n"+"\n--던담--\n"+ri+"\n--던오프--\n"+dnof)
    
        // }
    
        }catch(e){
    
        text = "불러오는중 오류가 발생했습니다.\n오류명:"
    
        switch(e.lineNumber)
    
        {
        case 29 : text += "점검중이거나 캐릭터 정보를 찾을수없습니다." ; break
    
        case 31 : text += "점검중이거나 캐릭터 정보를 찾을수없습니다." ; break
    
        case 76 : case 69 : text += "무기정보가 없습니다." ; break
    
        default : text += e.lineNumber ; break
    
        }
    
        replier.reply(text)
    
        }
    
    }
}