const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
const ssl = require('ssl');

Kakao.init('');
Kakao.login('','');

importClass(org.jsoup.Jsoup);

ssl.SSL;

const room_name=["D&F 비율","test open2@","사과"];  //채팅방 이름

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {


    if(room_name.indexOf(room)!=-1 && msg.indexOf("@던담")!=-1) {

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
                var ddam_link = 'https://dundam.xyz/view?image='+_chaid+ '&server='+chaS+'&name='+chaN; //던담 링크
                var img = 'https://img-api.neople.co.kr/df/servers/'+chaS+'/characters/'+_chaid; // 캐릭터 이미지 링크
                var ddam_info = org.jsoup.Jsoup.connect(ddam_link).ignoreContentType(true).get();
                var chaJ = ddam_info.select("body > div.c.con.container > div.ih > div.in > li.job").text();
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
                if (damage1s.length === 12){
                    var damage1s = damage1s.match(/.{1,4}/g);
                    damage1s = damage1s[0]+'억 '+damage1s[1]+'만 '+damage1s[2]; }
                else if(damage1s.length === 13){
                    damage1s = damage1s.slice(0,1)+ '조 ' + damage1s.slice(-12,-8) + '억 ' + damage1s.slice(-8,-4)+ '만 ' + damage1s.slice(-4);
                }else if(damage1s.length === 14){
                    damage1s = damage1s.slice(0,2)+'조 ' + damage1s.slice(-12,-8)+'억 ' +damage1s.slice(-8,-4)+'만 ' + damage1s.slice(-4);
                }
                
                var ddam_info2 = org.jsoup.Jsoup.connect(dnof_link).ignoreContentType(true).get();
                var damage25s = ddam_info2.select("#skill_damage > div:nth-child(5) > div.dmgRow > b.sinergeDmg1").text();
                
                //replier.reply(buff_score);
                //replier.reply(buff);
                //replier.reply(damage1s);
                //replier.reply(damage25s);

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

                //kakao msg
                var i2 = '버프력(종합) : '+ buff + '\n' +'버프점수(편애x) : '+ buff_score       //버프력
                if(job_detail.indexOf("인챈트리스")!=-1){
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
                }else if(job_detail.indexOf(job_detail.indexOf("크루세이더")!=-1)){
                    buff = ddam_info.select("body > div.ct.con.container > div.tab-wrap > div:nth-child(27) > div.cc.buffcal > table > tbody > tr:nth-child(8) > td:nth-child(2)").text().replace(" ","");
                    var char_info = '[' + chaS + ']' + chaN + ' / ' + chaJ+ ' / ' + chaR_B+'위'+chaP_B ;   //캐릭터 이름 및 정보
                    var i2 = '버프력(종합) : '+ buff + '\n' +'버프점수 : '+ buff_score ;      //버프력
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
                }else{
                    var i2 = '시로코(1시) : '+ damage1s ; 
                    var char_info = '[' + chaS + ']' + chaN + ' / ' + chaJ+ ' / ' + chaR_D+'위'+chaP ;   //캐릭터 이름 및 정보
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
                }
            }
    }
}



 
