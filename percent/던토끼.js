const ssl = require('ssl');

importClass(org.jsoup.Jsoup);

ssl.SSL;
const Database = DataBase;
const room_name=["D&F 비율","test open2@","사과"];  //채팅방 이름
const user_ban = Database.getDataBase('차단').split(' ');

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {

    
    try{    
        if(room_name.indexOf(room)!=-1 && msg.indexOf("@기린")!=-1) {
        
            if(user_ban.indexOf(sender) == -1){  
                // @기린 안톤 사과와마카롱
                var chat = msg.split(" ")
                var chaS = chat[1]
                var chaN = chat[2]

                //server check if not
                if(chat[1] != "카인" && chat[1] != "디레지에" && chat[1] != "시로코" && chat[1] != "프레이" && chat[1] != "카시야스" && chat[1] != "힐더" && chat[1] != "안톤" && chat[1] != "바칼") {
                replier.reply("서버를 잘못입력하셨습니다.")
                return
                }
            
                //server check detail
                chaN = chaN.replace(/\%/g, "%25");
                chaN = chaN.replace(/\&/g, "%26");
                chaN = chaN.replace(/\!/g, "%21");
                chaN = chaN.replace(/\#/g, "%23");
                chaN = chaN.replace(/\$/g, "%24");
                chaN = chaN.replace(/\^/g, "%5E");

                
                var check = org.jsoup.Jsoup.connect("http://duntoki.xyz/giraffe?serverNm="+chaS+"&charNm="+chaN).get();
                check = check.select("body > center:nth-child(1) > font").text();


                if(check.indexOf("않는") != -1 || check.indexOf("존재하지") != -1 || check.indexOf("캐릭터입니다.") != -1 ) {
                    replier.reply("캐릭터 검색결과가 없습니다."+"\n닉네임을 확인해주세요.\n 참고: 조회가 안 될 경우 @던담 조회 후 조회해보세요");
                    return;
                }else{
                    //get info
                    var dtoki = org.jsoup.Jsoup.connect("http://duntoki.xyz/giraffe?serverNm="+chaS+"&charNm="+chaN).get();

                    //server check detail
                    chaS = chaS.replace(/카인/g, "cain");
                    chaS = chaS.replace(/디레지에/g, "diregie");
                    chaS = chaS.replace(/시로코/g, "siroco");
                    chaS = chaS.replace(/프레이/g, "prey");
                    chaS = chaS.replace(/카시야스/g, "casillas");
                    chaS = chaS.replace(/힐더/g, "hilder");
                    chaS = chaS.replace(/안톤/g, "anton");
                    chaS = chaS.replace(/바칼/g, "bakal");

                    var doff = Utils.getWebText("https://dunfaoff.com/CharacterSearchList.df?server="+chaS+"&id="+chaN );
                    var chaid = doff.split("card\" data-id=\"");
                    chaid = chaid[1].split("\" data-server");
                    const _chaid = chaid[0];
                    
                    var img = 'https://img-api.neople.co.kr/df/servers/'+chaS+'/characters/'+_chaid; // 캐릭터 이미지 링크

                    // server replace
                    chaS = chaS.replace(/cain/g, "카인");
                    chaS = chaS.replace(/diregie/g, "디레지에");
                    chaS = chaS.replace(/siroco/g, "시로코");
                    chaS = chaS.replace(/prey/g, "프레이");
                    chaS = chaS.replace(/casillas/g, "카시야스");
                    chaS = chaS.replace(/hilder/g, "힐더");
                    chaS = chaS.replace(/anton/g, "안톤");
                    chaS = chaS.replace(/bakal/g, "바칼");
                    
                    //현재 기린점수
                    var info1 = dtoki.select("body > center:nth-child(1) > div.informationDiv > table.giraffeScore > tbody > tr > td:nth-child(2)").text().replace(" ","");
                    //에픽, 신화개수
                    var info2 = dtoki.select("body > center:nth-child(1) > div.informationDiv > table.getItemInfo1 > tbody > tr > td:nth-child(1)").text().replace(" ","");
                    //첫 신화 얻기까지 에픽 개수
                    var info3 = dtoki.select("body > center:nth-child(1) > div.informationDiv > table.getItemInfo2 > tbody > tr > td:nth-child(1)").text().replace(" ","").replace("번째에득템!","");
                    // 획득한 신화 수  
                    var info4 = dtoki.select("body > center:nth-child(1) > div.informationDiv > table.getItemInfo2 > tbody > tr > td:nth-child(2)").text().replace(" ","");
                    // 드랍 산물 획득 수
                    var info5 = dtoki.select("body > center:nth-child(1) > div.informationDiv > table.getItemInfo2 > tbody > tr > td:nth-child(3)").text().replace(" ","");
                    // 에픽 수집 도감 완성률
                    var info6 = dtoki.select("body > center:nth-child(1) > div.informationDiv > table.getItemInfo3 > tbody > tr > td:nth-child(1)").text().split("/");
                    info6 = parseFloat(info6[0].trim()) / parseFloat(info6[1].trim()) * 100;
                    info6 = parseInt(info6);
                    // 하루 최대 획득 에픽 수
                    var info7 = dtoki.select("body > center:nth-child(1) > div.informationDiv > table.getItemInfo4 > tbody > tr > td:nth-child(2)").text().replace(" ","");
                    // 시로코 골드카드 수
                    var info8 = dtoki.select("body > center:nth-child(1) > div.informationDiv > table.getItemInfo3 > tbody > tr > td:nth-child(2)").text().replace(" ","");
                    // 잔향 획득 여부
                    var info9 = dtoki.select("body > center:nth-child(1) > div.informationDiv > table.getItemInfo3 > tbody > tr > td:nth-child(3)").text().replace(" ","");
                    
                    //get img
                    getImg = search => {
                        parse = Jsoup.connect("https://img-api.neople.co.kr/df/servers/'+chaS+'/characters/'+chaid").get().select("img[alt=" + search + "]");
                        if (parse.size()) {
                        img = parse.get(Math.random() * parse.size() | 0).attr("data-source");
                        return img;
                        }    
                        return ""
                    };

                    chaN = chaN.replace(/\%25/g, "%");
                    chaN = chaN.replace(/\%26/g, "&");
                    chaN = chaN.replace(/\%21/g, "!");
                    chaN = chaN.replace(/\%23/g, "#");
                    chaN = chaN.replace(/\%24/g, "$");
                    chaN = chaN.replace(/\%5E/g, "^");

                    replier.reply(chaS+' '+chaN+'님의 ... \n\n'+ '★기린점수 : ' +info1 +'★\n'+
                    '=====================\n'+'<상세정보>\n'+
                    '■획득한 신화 수 : ' + info4 + '\n'+
                    '■에픽,신화 개수 : ' +info2+ '\n'+
                    '■첫 신화 얻기까지 에픽 개수 : ' + info3 + '\n'+
                    '■드랍 산물 획득 수 : ' + info5 +'\n'+
                    '■시로코 골드카드 횟수 : ' + info8 + '\n'+
                    '■시로코 잔향 획득 여부 : ' + info9 + '\n'+
                    '■에픽 수집 도감 완성률 : ' + info6 +'%\n'+ 
                    '■하루 최대 획득 에픽 수 : ' + info7 +'\n'+
                    '=====================\n'
                    );

                };
            
        };
    }
    
    }catch(e){
        replier.reply(e)
        };
};