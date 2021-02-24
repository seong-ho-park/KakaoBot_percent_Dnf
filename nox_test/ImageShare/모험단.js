const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
const ssl = require('ssl');
const Database = DataBase;

importClass(org.jsoup.Jsoup);
importPackage(javax.net.ssl);
importPackage(java.lang);
importPackage(java.net);
importPackage(java.io);

ssl.SSL();
const room_name=["D&F 비율","test open2@","사과"];  //채팅방 이름
const user_ban = Database.getDataBase('차단').split(' ');

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    //테스트 입력
    var msg = '@모험단 사과와함께'


        // 차단목록에 유저 있는지 확인
        if(user_ban.indexOf(sender) == -1){
        //@모험단 입력  
        if(room_name.indexOf(room)!=-1 && msg.indexOf("@모험단")!=-1) {
            //모바일 인증서 다운
            if (android.os.Build.VERSION.SDK_INT > 9){
    
                var policy = new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build();
            
                android.os.StrictMode.setThreadPolicy(policy);
            }

            let sslContext = SSLContext.getInstance("SSL");
            sslContext.init(null, [new JavaAdapter(X509TrustManager, {
        
            getAcceptedIssuers : () => { return null; },
        
            checkClientTrusted : () => { return ; },
        
            checkServerTrusted : () => { return ; },
        
            })], new java.security.SecureRandom());
        
            HttpsURLConnection.setDefaultSSLSocketFactory(sslContext.getSocketFactory());
            HttpsURLConnection.setDefaultHostnameVerifier(new JavaAdapter(HostnameVerifier, {verify : (hostname, session) => { return true; }}));
            //모바일 인증서 다운-end

            //입력 순서 분석
            var chat = msg.split(" ")
            var chaN = chat[1]
            //server check detail
            chaN = chaN.replace(/&/g, "&")
            chaN = chaN.replace(/`/g, "`")
            chaN = chaN.replace(/\{/g, "%7B");    
            chaN = chaN.replace(/\}/g, "%7D");    

            //캐릭터 검색 결과 조회
            //TODO: 없을경우 수정하기
            var check = org.jsoup.Jsoup.connect("https://dundam.xyz/search?server="+'adven'+ "&name=" +chaN).ignoreContentType(true).get();
            check = check.select("body > div.container > div > div:nth-child(1)").text().split(" ");
            if(check.indexOf("없습니다.") != -1) {
                replier.reply("캐릭터 검색결과가 없습니다."+"\n닉네임을 확인해주세요.");
                return;
                //캐릭터 검색 결과 조회-end
            }else{
                //get info
                var ddam_link = 'https://dundam.xyz/search?server=adven&name='+chaN //던담 모험단 링크
                var img = 'https://img-api.neople.co.kr/df/servers/'+chaS+'/characters/'+_chaid; // 캐릭터 이미지 링크
                var ddam_info = org.jsoup.Jsoup.connect(ddam_link).ignoreContentType(true).get();

                var list_name=[];

                var temp = Utils.getWebText(ddam_link)
                var list_name = temp.split("<em name=\"닉네임\">")
                replier.reply(list_name)
                 
                

                    // server replace
                    chaN = chaN.replace(/\%7B/g, "{");    
                    chaN = chaN.replace(/\%7D/g, "}");    



                    check_battle = ddam_info.select("body > div.ct.con.container > div.tab-wrap > label:nth-child(18)").text();

                    

                    //kakao msg
                    
                    if(job_detail.indexOf("인챈트리스")!=-1){
                        
                        var chaP_p = parseFloat(chaR_B.replace(",",""))/parseFloat(chaP_B.replace(")","").replace("(","").replace(",","").replace("인구 ",""))*100 ;
                        chaP_p =  chaP_p.toFixed(2)
                        var i2 = '스탯(편애) : '+ buff + '\n' +'버프력(편애x) : '+ buff_score       //버프력
                        var char_info = '[' + chaS + ']' + chaN + ' / ' + chaJ+ ' / ' + chaR_B+'위'+chaP_B +' / 상위: '+chaP_p+'%';   //캐릭터 이름 및 정보
                        
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
                        var chaP_p = parseFloat(chaR_B.replace(",",""))/parseFloat(chaP_B.replace(")","").replace("(","").replace(",","").replace("인구 ",""))*100 ;
                        chaP_p =  chaP_p.toFixed(2)
                        var stat = ddam_info.select("body > div.ct.con.container > div.tab-wrap > div:nth-child(27) > div.cc.buffcal > table > tbody > tr:nth-child(7) > td:nth-child(2) > div").text().replace(/\s/gi, "");
                        buff_score = ddam_info.select("body > div.ct.con.container > div.tab-wrap > div:nth-child(27) > div.cc.buffcal > table > tbody > tr:nth-child(8) > td:nth-child(2)").text().replace(/\s/gi, "");
                        var char_info = '[' + chaS + ']' + chaN + ' / ' + chaJ+ ' / ' + chaR_B+'위'+chaP_B +' / 상위: '+chaP_p+'%';   //캐릭터 이름 및 정보
                        var i2 = '스탯(2각) : '+ stat + '\n' +'버프력 : '+ buff_score +'점'      //버프력
                        var i3 = '시로코(25초) : '+ s_damage25;
                        Kakao.send(room, { 
                            "link_ver": "4.0",
                            "template_object": { 
                                                "object_type" : "feed", 
                                                "button_title": "", 
    
                                                "content"     : { "title": char_info, 
                                                                "image_url":img, 
                                                                "link": { "web_url": ""}, 
                                                                "description": i2 + '\n' + i3}, 
                                                "buttons"     : [{ "title": "던담으로 보기", 
                                                                "link" : { "web_url": ddam_link,"mobile_web_url": ddam_link},},
                                                                { "title": "던오프로 보기", 
                                                                "link" : { "web_url": dnof_link,"mobile_web_url": dnof_link},},
                                                                ]
                            }
                        });
                    }else{
                        var chaP_p = parseFloat(chaR_D.replace(",",""))/parseFloat(chaP.replace(")","").replace("(","").replace(",","").replace("인구 ",""))*100 ;
                        chaP_p =  chaP_p.toFixed(2)
                        var i2 = '시로코(1시) : '+ damage1s ; 
                        var i3 = '시로코(25초) : '+ s_damage25;
                        var char_info = '[' + chaS + ']' + chaN + ' / ' + chaJ+ ' / ' + chaR_D+'위'+chaP +' / 상위: '+chaP_p+'%' ;   //캐릭터 이름 및 정보
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
                        }
                        );
                    }
                }
        }}

};
