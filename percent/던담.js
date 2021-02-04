const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
const ssl = require('ssl');
const Database = DataBase;

Kakao.init('70a2fb416a8b04e9ff151b4c0a1d66ac');
Kakao.login('as12q12pst@kakao.com','as12q12pst');

importClass(org.jsoup.Jsoup);

ssl.SSL;

const room_name=["D&F 비율","test open2@","사과"];  //채팅방 이름
var day = new Date().getDate();
const user_ban = Database.getDataBase('차단').split(' ');

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    try{
        if(user_ban.indexOf(sender) == -1){ 
        if(room_name.indexOf(room)!=-1 && msg.indexOf("!던담")!=-1) {
                
                if (day != new Date().getDate()) {
                    Api.compile('던담.js')
                }

                var chat = msg.split(" ")
                var chaS = chat[1]
                var chaN = chat[2]

                //server check if not
                if(chat[1] != "카인" && chat[1] != "디레지에" && chat[1] != "시로코" && chat[1] != "프레이" && chat[1] != "카시야스" && chat[1] != "힐더" && chat[1] != "안톤" && chat[1] != "바칼") {
                replier.reply("서버를 잘못입력하셨습니다.")
                return
                }
            
                //server check detail
                chaN = chaN.replace(/&/g, "&")
                chaN = chaN.replace(/`/g, "`")    
                chaS = chaS.replace(/카인/g, "cain")
                chaS = chaS.replace(/디레지에/g, "diregie")
                chaS = chaS.replace(/시로코/g, "siroco")
                chaS = chaS.replace(/프레이/g, "prey")
                chaS = chaS.replace(/카시야스/g, "casillas")
                chaS = chaS.replace(/힐더/g, "hilder")
                chaS = chaS.replace(/안톤/g, "anton")
                chaS = chaS.replace(/바칼/g, "bakal")
                
                var check = org.jsoup.Jsoup.connect("https://dundam.xyz/searchActionTest.jsp?server="+chaS+ "&name=" +chaN).ignoreContentType(true).get();
                check = check.select("body > div.container > div > div:nth-child(1)").text().split(" ");
                
                if(check.indexOf("없습니다.") != -1) {
                    replier.reply("캐릭터 검색결과가 없습니다."+"\n닉네임을 확인해주세요.");
                    return;
                }else{
                    //get info
                    var doff = Utils.getWebText("https://dunfaoff.com/CharacterSearchList.df?server="+chaS+"&id="+chaN );
                    var chaid = doff.split("card\" data-id=\"");
                    chaid = chaid[1].split("\" data-server");
                    const _chaid = chaid[0];
                    var dnof_link = ("https://dunfaoff.com/SearchResult.df?server="+chaS+"&characterid="+chaid[0]); //던오프 링크
                    var ddam_link = 'https://dundam.xyz/view40s?image='+_chaid+ '&server='+chaS+'&name='+chaN; //던담 링크
                    var img = 'https://img-api.neople.co.kr/df/servers/'+chaS+'/characters/'+_chaid; // 캐릭터 이미지 링크
                    var ddam_info = org.jsoup.Jsoup.connect(ddam_link).ignoreContentType(true).get();
                    var chaJ = ddam_info.select("body > div.c.con.container > div > div.in > li.job").text();
                    var chaR_D = ddam_info.select("body > div.c.con.container > div > div.icr > ul > li > con").text().split(" ")[0];
                    var chaR_B = ddam_info.select("body > div.c.con.container > div > div.icr > ul > li > con").text().split(" ")[1];
                    var chaP = ddam_info.select("body > div.c.con.container > div > div.icr > ul > li > span").text(); 
                    var chaP_B = ddam_info.select("body > div.c.con.container > div > div.icr > ul > li > span").text().split(") ")[1];

                    //buff
                    var buff_score = ddam_info.select("body > div.ct.con.container > div.tab-wrap > div:nth-child(27) > div.cc.buffcal > table > tbody > tr:nth-child(7) > td:nth-child(2)").text().replace(" ","");
                    var buff = ddam_info.select("body > div.ct.con.container > div.tab-wrap > div:nth-child(27) > div.cc.buffcal > table > tbody > tr:nth-child(6) > td:nth-child(2) > div").text().replace(" ","");
                    //damage
                    var damage1s = ddam_info.select("body > div.ct.con.container > div.tab-wrap > div.tab__content.damtab > div.damage > div > div:nth-child(18) > div.csw > table.adamage > tbody > tr > td > div").text().split(",");
                    damage1s = damage1s.join('');
                    if(damage1s.length > 4 && damage1s.length <= 8){
                        damage1s = damage1s.slice(-8,-4)+ '만 ' + damage1s.slice(-4); } 
                    else if (damage1s.length > 8 && damage1s.length <= 12){
                        damage1s = damage1s.slice(-12,-8) + '억 ' + damage1s.slice(-8,-4)+ '만 ' + damage1s.slice(-4); }
                    else if(damage1s.length > 12 && damage1s.length <= 16){
                        damage1s = damage1s.slice(-15,-12)+ '조 ' + damage1s.slice(-12,-8) + '억 ' + damage1s.slice(-8,-4)+ '만 ' + damage1s.slice(-4);
                    }

                    //시로코 25초 
                    var ddam_info2 = Utils.getWebText(ddam_link);
                    var s_damage = ddam_info2.split("siroco_25s.set(\'");
                    let s_damage_b = [];
                    for ( i= 1; i < s_damage.length; i++){
                        var s_damage_a = s_damage[i].split("\', \'");
                        s_damage_a = s_damage_a[1];
                        s_damage_a = s_damage_a.split("\'");
                        s_damage_a = s_damage_a[0].replace(',','').replace(',','').replace(',','').replace(',','').replace(',','');
                        s_damage_b.push(parseFloat(s_damage_a));
                    }
                    const result = s_damage_b.reduce(function add(sum, currValue) {
                        return sum + currValue;
                    }, 
                    0);

                    //시로코 40초
                    var ddam_info3 = Utils.getWebText(ddam_link);
                    var s_damage40s = ddam_info3.split("siroco_40s.set(\'");
                    let s_damage40_b = [];
                    // replier.reply(s_damage40s)
                    for ( i= 1; i < s_damage40s.length; i++){
                        var s_damage40_a = s_damage40s[i].split("\', \'");
                        s_damage40_a = s_damage40_a[1];
                        s_damage40_a = s_damage40_a.split("\'");
                        s_damage40_a = s_damage40_a[0].replace(',','').replace(',','').replace(',','').replace(',','').replace(',','');            
                        // replier.reply(s_damage40_a)        
                        s_damage40_b.push(parseFloat(s_damage40_a));
                        // replier.reply(s_damage40_b[i-1]);
                    }
                    const result40s = s_damage40_b.reduce(function add(sum, currValue) {
                        return sum + currValue;
                    }, 
                    0);


                    var jinplus = parseFloat(ddam_info2.split("jinPlus *=")[1].split(';')[0]);
                    var check_is_jin = chaJ.split(' ')[0];

                    if(check_is_jin.indexOf("眞")!=-1){
                        //진각 25초
                        var s_damage25 = result * 1.34 * jinplus;
                        s_damage25 = parseInt(s_damage25);
                        s_damage25 = String(s_damage25);
                        if(s_damage25.length > 4 && s_damage25.length <= 8){
                            s_damage25 = s_damage25.slice(-8,-4)+ '만 ' + s_damage25.slice(-4); } 
                        else if (s_damage25.length > 8 && s_damage25.length <= 12){
                            s_damage25 = s_damage25.slice(-12,-8) + '억 ' + s_damage25.slice(-8,-4)+ '만 ' + s_damage25.slice(-4); }
                        else if(s_damage25.length > 12 && s_damage25.length <= 16){
                            s_damage25 = s_damage25.slice(-15,-12)+ '조 ' + s_damage25.slice(-12,-8) + '억 ' + s_damage25.slice(-8,-4)+ '만 ' + s_damage25.slice(-4);
                        }
                        
                    }else {
                        //비진각 25초
                        s_damage25 = Math.round(result * 1.34 * 1.15 * jinplus);
                        s_damage25 = String(s_damage25);
                        if(s_damage25.length > 4 && s_damage25.length <= 8){
                            s_damage25 = s_damage25.slice(-8,-4)+ '만 ' + s_damage25.slice(-4); } 
                        else if (s_damage25.length > 8 && s_damage25.length <= 12){
                            s_damage25 = s_damage25.slice(-12,-8) + '억 ' + s_damage25.slice(-8,-4)+ '만 ' + s_damage25.slice(-4); }
                        else if(s_damage25.length > 12 && s_damage25.length <= 16){
                            s_damage25 = s_damage25.slice(-15,-12)+ '조 ' + s_damage25.slice(-12,-8) + '억 ' + s_damage25.slice(-8,-4)+ '만 ' + s_damage25.slice(-4);
                        }
                    }

                    if(check_is_jin.indexOf("眞")!=-1){
                        //진각 40초
                        var s_damage40 = result40s * 1.34 * jinplus;
                        s_damage40 = parseInt(s_damage40);
                        s_damage40 = String(s_damage40);
                        if(s_damage40.length > 4 && s_damage40.length <= 8){
                            s_damage40 = s_damage40.slice(-8,-4)+ '만 ' + s_damage40.slice(-4); } 
                        else if (s_damage40.length > 8 && s_damage40.length <= 12){
                            s_damage40 = s_damage40.slice(-12,-8) + '억 ' + s_damage40.slice(-8,-4)+ '만 ' + s_damage40.slice(-4); }
                        else if(s_damage40.length > 12 && s_damage40.length <= 16){
                            s_damage40 = s_damage40.slice(-15,-12)+ '조 ' + s_damage40.slice(-12,-8) + '억 ' + s_damage40.slice(-8,-4)+ '만 ' + s_damage40.slice(-4);
                        }
                        
                    }else {
                        //비진각 40초
                        s_damage40 = Math.round(result40s * 1.34 * 1.15 * jinplus);
                        s_damage40 = String(s_damage40);
                        if(s_damage40.length > 4 && s_damage40.length <= 8){
                            s_damage40 = s_damage40.slice(-8,-4)+ '만 ' + s_damage40.slice(-4); } 
                        else if (s_damage40.length > 8 && s_damage40.length <= 12){
                            s_damage40 = s_damage40.slice(-12,-8) + '억 ' + s_damage40.slice(-8,-4)+ '만 ' + s_damage40.slice(-4); }
                        else if(s_damage40.length > 12 && s_damage40.length <= 16){
                            s_damage40 = s_damage40.slice(-15,-12)+ '조 ' + s_damage40.slice(-12,-8) + '억 ' + s_damage40.slice(-8,-4)+ '만 ' + s_damage40.slice(-4);
                        }
                    }

                    //get img
                    getImg = search => {
                        parse = Jsoup.connect("https://img-api.neople.co.kr/df/servers/'+chaS+'/characters/'+chaid").get().select("img[alt=" + search + "]");
                        if (parse.size()) {
                        img = parse.get(Math.random() * parse.size() | 0).attr("data-source");
                        return img;
                        }    
                        return ""
                    };

                    // server replace
                    chaS = chaS.replace(/cain/g, "카인");
                    chaS = chaS.replace(/diregie/g, "디레지에");
                    chaS = chaS.replace(/siroco/g, "시로코");
                    chaS = chaS.replace(/prey/g, "프레이");
                    chaS = chaS.replace(/casillas/g, "카시야스");
                    chaS = chaS.replace(/hilder/g, "힐더");
                    chaS = chaS.replace(/anton/g, "안톤");
                    chaS = chaS.replace(/bakal/g, "바칼");

                    job_detail = chaJ.split(" ");

                    check_battle = ddam_info.select("body > div.ct.con.container > div.tab-wrap > label:nth-child(18)").text();
                    //kakao msg
                    
                    if(job_detail.indexOf("인챈트리스")!=-1){
                        var i2 = '버프력(종합) : '+ buff + '\n' +'버프점수(편애x) : '+ buff_score       //버프력
                        var char_info = '[' + chaS + ']' + chaN + ' / ' + chaJ+ ' / ' + chaR_B+'위'+chaP_B ;   //캐릭터 이름 및 정보
                        Kakao.send(room, { 
                            "link_ver": "4.0",
                            "template_object": { 
                                                "object_type" : "feed", 
                                                "button_title": "", 

                                                "content"     : { "title": char_info, 
                                                                "image_url":img, 
                                                                "link": { "web_url": ""}, 
                                                                "description": i2 }, 
                                                "buttons"     : [{ "title": "던담으로 보기", 
                                                                "link" : { "web_url": ddam_link,"mobile_web_url": ddam_link},},
                                                                { "title": "던오프로 보기", 
                                                                "link" : { "web_url": dnof_link,"mobile_web_url": dnof_link},},
                                                                ]
                            }
                        }
                        );
                    }else if(job_detail.indexOf("크루세이더")!=-1 && check_battle === '버프계산' ){
                        buff = ddam_info.select("body > div.ct.con.container > div.tab-wrap > div:nth-child(27) > div.cc.buffcal > table > tbody > tr:nth-child(7) > td:nth-child(2) > div").text().replace(" ","");
                        buff_score = ddam_info.select("body > div.ct.con.container > div.tab-wrap > div:nth-child(27) > div.cc.buffcal > table > tbody > tr:nth-child(8) > td:nth-child(2)").text().replace(" ","");
                        var char_info = '[' + chaS + ']' + chaN + ' / ' + chaJ+ ' / ' + chaR_B+'위'+chaP_B ;   //캐릭터 이름 및 정보
                        var i2 = '스탯(2각) : '+ buff + '\n' +'버프점수 : '+ buff_score      //버프력
                        var i3 = '시로코(25초) : '+ s_damage25;
                        Kakao.send(room, { 
                            "link_ver": "4.0",
                            "template_object": { 
                                                "object_type" : "feed", 
                                                "button_title": "", 
    
                                                "content"     : { "title": char_info, 
                                                                "image_url":img, 
                                                                "link": { "web_url": ""}, 
                                                                "description": i2 + '\n' + i3 }, 
                                                "buttons"     : [{ "title": "던담으로 보기", 
                                                                "link" : { "web_url": ddam_link,"mobile_web_url": ddam_link},},
                                                                { "title": "던오프로 보기", 
                                                                "link" : { "web_url": dnof_link,"mobile_web_url": dnof_link},},
                                                                ]
                            }
                        });
                    }else{
                        var i2 = '시로코(1시) : '+ damage1s ; 
                        var i3 = '시로코(25초) : '+ s_damage25;
                        var i4 = '시로코(40초) : '+ s_damage40;
                        var char_info = '[' + chaS + ']' + chaN + ' / ' + chaJ+ ' / ' + chaR_D+'위'+chaP ;   //캐릭터 이름 및 정보
                        Kakao.send(room, { 
                            "link_ver": "4.0",
                            "template_object": { 
                                                "object_type" : "feed", 
                                                "button_title": "", 

                                                "content"     : { "title": char_info, 
                                                                "image_url":img, 
                                                                "link": { "web_url": ""}, 
                                                                "description": i2 + '\n' + i4  }, 
                                                "buttons"     : [{ "title": "던담으로 보기", 
                                                                "link" : { "web_url": ddam_link,"mobile_web_url": ddam_link},},
                                                                { "title": "던오프로 보기", 
                                                                "link" : { "web_url": dnof_link,"mobile_web_url": dnof_link},},
                                                                ]
                            }
                        }
                        );
                    }
                }
        }
    }
    }catch(e){
        
        var text = ""
        switch(e.lineNumber)
        
        {
        
    
        case 58 : text += "던파 점검중이거나 캐릭터 정보를 찾을수없습니다." ; break
        
     
        default : text = e ; break
    
        }
        replier.reply(text)
        
    }
};