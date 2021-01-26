


 // 플티 검색
 if(msg.indexOf("@플티") != -1) {
 
    msg = msg.replace(/@플티 /g,"")
 
    var Search = msg
 
    msg.replace(/,/g,",")
 
    if(Search == null)
 
    {
 
       replier.reply("검색하실 플래티넘을 같이 입력해주세요."+"\n"+"ex)@카드 수속,레전")
 
       return
 
    }
 
    a = org.jsoup.Jsoup.connect("http://dnfnow.xyz/emblem?emblem_search="+Search).get().select("tr")
 
    var text =''
 
    if(a.size() == 1)
 
    {
 
    replier.reply("조건에 맞는 엠블렘이 없습니다.")
 
    return
 
    }
 
    text += "아이템명      /      현재최저가격      /      경매장수량\n"
 
    for(i=1; i();i++){
 
    c = a.get(i).select("td")
 
    text += c.get(0)+"   /   "+ c.get(1) +"   /    "+c.get(2)+"\n"
 
    }
 
    //text = text.replace(//g,"")
 
    text = text.replace(/<\/td>/g,"")
 
    text = text.replace(/(<([^>])+>)/g,"")
 
    text = text.replace(/플래티넘 엠블렘/g,"")
 
    text = text.replace(/물량없음/g,"-")
 
    replier.reply(Search+"관련엠블렘 검색결과"+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+text+"\n\n정보위치:http://dnfnow.xyz")
 
    }
 
// 카드검색

 if(msg.indexOf("@카드") != -1) {
 
    var chat = msg.split(" ")
 
    var Search = chat[1]
 
    if(Search == null)
 
    {
 
       replier.reply("검색하실 옵션을 같이 입력해주세요."+"\n"+"ex)@카드 수속,레전")
 
       return
 
    }
 
    a = org.jsoup.Jsoup.connect("http://dnfnow.xyz/magic?card_search="+Search+"&optiomsort=on&onlyexist=on").get().select("tr")
 
    var text =''
 
    if(a.size() == 1)
 
    {
 
    replier.reply("조건에 맞는 카드가 없습니다.")
 
    return
 
    }
 
    text += "카드명(업글수)   /   현재최저가격   /   부여가능부위"+"\n"+"[옵션]"+"\n"
 
    for(i=1; i();i++){
 
    c = a.get(i).select("td")
 
    text += c.get(0)+" / "+ c.get(1) +"  /  "+c.get(3)+"\n"+"  ["+c.get(4)+"]"+"\n"
 
    }
 
    //text = text.replace(//g,"")
 
    text = text.replace(/<\/td>/g,"")
 
    text = text.replace(/(<([^>])+>)/g,"")
 
    text = text.replace(/속성강화/g,"속")
 
    text = text.replace(/반지/g,"반")
 
    text = text.replace(/목걸이/g,"목")
 
    text = text.replace(/팔찌/g,"팔")
 
    text = text.replace(/레전더리/g,"")
 
    text = text.replace(/유니크/g,"")
 
    text = text.replace(/언커먼/g,"")
 
    text = text.replace(/커먼/g,"")
 
    text = text.replace(/레어/g,"")
 
    text = text.replace(/물리 공격력/g,"물공")
 
    text = text.replace(/마법 공격력/g,"마공")
 
    text = text.replace(/독립 공격력/g,"독공")
 
    text = text.replace(/속성저항/g,"속저")
 
    text = text.replace(/물리 크리티컬 히트/g,"물크")
 
    text = text.replace(/마법 크리티컬 히트/g,"마크")
 
    text = text.replace(/히트리커버리/g,"힛리")
 
    text = text.replace(/HP MAX/g,"피맥")
 
    text = text.replace(/MP MAX/g,"엠맥")
 
    text = text.replace(/공격속도/g,"공속")
 
    text = text.replace(/캐스토속도/g,"캐속")
 
    text = text.replace(/공격속성 +/g,"속성부여:")
 
    text = text.replace(/회피율/g,"회피")
 
    text = text.replace(/MP 1분당 회복/g,"엠회복")
 
    text = text.replace(/HP 1분당 회복/g,"피회복")
 
    text = text.replace(/적중률/g,"적중")
 
    text = text.replace(/머리어깨/g,"어")
 
    text = text.replace(/허리/g,"벨")
 
    text = text.replace(/신발/g,"신")
 
    text = text.replace(/마법석/g,"법석")
 
    text = text.replace(/상의/g,"상")
 
    text = text.replace(/하의/g,"하")
 
    text = text.replace(/보조장비/g,"보장")
 
    text = text.replace(/귀걸이/g,"귀")
 
    replier.reply(Search+" 카드 검색결과"+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+text+"\n\n정보위치:http://dnfnow.xyz")
 
    }
 
 if(msg.indexOf("@검색") != -1 ) {
 
    msg = msg.replace(/@검색 /g,"")
 
    var Search = msg
 
    Search.replace(/ /g,"+")
 
    if(msg == "")
 
    {
 
       replier.reply("검색하실 아이템을 같이 입력해주세요.")
 
       return
 
    }
 
    if(msg.indexOf("플래티넘") != -1)
 
    {
 
          replier.reply("플래티넘 엠블검색은 @플티 명령어 뒷부분에 직업명,이름 등으로 검색해주세요")
 
          return
 
       }
 
       if(msg.indexOf("카드") != -1)
 
       {
 
             replier.reply("카드 검색은 @카드 명령어 뒷부분에 옵션,부위,이름 등으로 검색해주세요")
 
             return
 
          }
 
    if(msg == "남친" || msg == "여친" || msg == "애인" || msg == "남자친구" || msg== "여자친구")
 
    {
 
       replier.reply("현생에서는 구할수없거나 매우 비싼물품입니다.\n다시 태어나거나 돈을많이버세요.")
 
       return
 
    }
 
    var GoSearch = ""
 
    var u = Utils.getWebText("http://dnfnow.xyz/search?item_name="+Search)
 
    var a = u.split("검색어 : "+msg)
 
    var b = a[1].split("")
 
    c = b[0].replace(/(<([^>]+)>)/g,"")
 
    c = c.replace(/ /g,"")
 
    c = c.replace(/ /g,"")
 
    c = c.trim()
 
    c = c.split("\n")
 
    if(c == "×")
 
    {
 
       replier.reply("검색된 물품이 없습니다.\n아이템명,띄어쓰기등 한번더 확인해주세요.")
 
       return
 
    }
 
    var m = 0
 
    var esearch = ''
 
    for(var n=0; n;n++)
 
    {
 
       if(c[n].indexOf(Search) != -1)
 
       {
 
          esearch += c[n] +"\n"
 
          m++
 
       }
 
    }
 
    if(m<2)
 
    {
 
       var u = Utils.getWebText("http://dnfnow.xyz/search?item_name="+Search)
 
       var a = u.split("idx\" value=\"")
 
       var b = a[1].split("\">")
 
       c = b[0].replace(/(<([^>]+)>)/g,"")
 
       GoSearch = c
 
       var u = Utils.getWebText("http://dnfnow.xyz/item?item_idx="+GoSearch)
 
       var a = u.split("\"20\">")
 
       var b = a[1].split("<")
 
       c = b[0].replace(/(<([^>]+)>)/g,"")
 
       Sname = c
 
       a = org.jsoup.Jsoup.connect("http://dnfnow.xyz/item?item_idx="+GoSearch).get().select("tr")
 
       var text =''
 
       text += "등록시간    물량    가격    개당가격"+"\n"
 
       if(a.size() > 24)
 
       {
 
          for(i=3; i<23;i++){
 
             c = a.get(i).select("td")
 
             text += c.get(0)+"     "+ c.get(1) +"     "+c.get(2)+"     "+c.get(3)+"\n"
 
             }
 
          }
 
          else{
 
             for(i=3; i();i++){
 
             c = a.get(i).select("td")
 
             text += c.get(0)+"     "+ c.get(1) +"     "+c.get(2)+"    "+c.get(3)+"\n"
 
             }
 
          }
 
          //text = text.replace(//g,"")
 
          text = text.replace(/<\/td>/g,"")
 
          replier.reply(Sname+" 검색결과"+"\n\n"+"\u200b".repeat(500)+text+"\n\n정보위치:http://dnfnow.xyz")
 
       }
 
       else
 
       {
 
          replier.reply("한종류이상 물품이 검색 되었습니다."+"\n"+"아래의 물품중 필요한물품으로 좀더 자세하게 검색해주세요."+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+esearch)
 
       }
 
    }
 
 if(msg.indexOf("@날씨") != -1) {
 
      var chat = msg.split(" ")
 
      var Search = chat[1]
 
      if(Search == null)
 
      {
 
         replier.reply("검색하실 지역을 함께 입력해주세요.")
 
         return
 
      }
 
      var text =''
 
      var text1 =''
 
         a = org.jsoup.Jsoup.connect("http://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=날씨+"+Search).get()
 
         b = a.select("dd.weather_item._dotWrapper")
 
         if(b.size() ==0)
 
         {
 
            replier.reply("제공되는 날씨정보가 없습니다.\n국내지역만 검색가능합니다.")
 
            return
 
         }
 
         var now = a.select("span.todaytemp")
 
         var tem = a.select("span.num")
 
         text += "-----------------------\n"
 
         text += "현재온도:"+now.get(0)+" 체감온도:"+tem.get(2)+"\n"
 
         text += "-----------------------\n나머지 자세히보기\n"+"\u200b".repeat(500)+"\n"
 
         text += "오전:"+tem.get(0)+"°C "+"오후 : "+tem.get(1)+"°C\n"
 
         text += "미세먼지:"+tem.get(4)+" 초미세먼지:"+tem.get(5)+"\n"
 
         text += "자외선지수:"+tem.get(3)+" 오존지수:"+tem.get(6)+"\n"
 
         text += "\n\n-----------------------\n시간대별 날씨\n-----------------------\n"
 
         text += "              08시  09시  10시  11시  12시  15시  18시  21시\n"
 
      for(i=0; i<8; i++)
 
         {
 
         c = b.get(i).select("span")
 
         text1 += c.get(0)+"°C"+"  "
 
         }
 
         text += "온    도  :  "+ text1+"\n"
 
         text1=''
 
         for(i=8; i<16; i++)
 
         {
 
            c = b.get(i).select("span")
 
            text1 += c.get(0)+"%"+"   "
 
            }
 
            text += "강수확률: "+text1+"\n"
 
            text1 = ''
 
            for(i=24; i<32; i++)
 
            {
 
               c = b.get(i).select("span")
 
               text1 += c.get(0)+"%"+"   "
 
               }
 
               text += "습    도  :  "+text1
 
         text = text.replace(/(<([^>]+)>)/g,"")
 
         
 
         replier.reply(Search+"의 날씨\n"+text+"\n\n정보위치:http://www.naver.com")
 
         }
 
         if(msg.indexOf("@인구수") == 0){
 
            var text = ''
 
            a = org.jsoup.Jsoup.connect("http://dundam.xyz/statistics.jsp").get().select("tr")
 
            for(i=1; i<62;i++){
 
            b = a.get(i).select("td")
            
            text += b.get(1)+" "+b.get(2)+"(명)\n"+b.get(3)+"(창) "+b.get(4)+"(계) "+b.get(5)+"(억) "+b.get(6)+"(온) "+b.get(7)+"(오)\n"
 
       }
 
       //text = text.replace(//g,"")
 
       text = text.replace(/<\/td>/g,"")
 
       replier.reply("현재 던파인구 및 장비분포도\n(장비는 테이베르스 방어구 기준)"+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+text+"\n\n정보위치:http://dundam.xyz")
 
            }
 
            if(msg.indexOf("@장비") != -1)
 
         {
 
            var Cha = msg.replace(/@장비 /g,"")
 
            var Cha2 = ""+Cha+"<\/td>"
 
            var text = ''
 
            a = org.jsoup.Jsoup.connect("http://dundam.xyz/statistics.jsp").get().select("tr")
 
            for(i=1; i<62;i++){
 
       b = a.get(i).select("td")
 
       if(Cha2 == b.get(1))
 
       {
 
          text += "총 인원 : "+b.get(2)+"(명)\n창천 : "+b.get(3)+"\n계절 : "+b.get(4)+"\n억년 : "+b.get(5)+"\n온슬 : "+b.get(6)+"\n오광 : "+b.get(7)
 
          }
 
       }
 
       if(text == "")
 
       {
 
             for(i=1; i<62;i++){
 
                b = a.get(i).select("td")
 
                text += b.get(1)+"\n"
 
                }
 
                //text = text.replace(//g,"")
 
        text = text.replace(/<\/td>/g,"")
 
             replier.reply("전직명이 없거나 틀립니다.\n아래 전직명으로 검색해주세요"+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+text+"\n\n정보위치:http://dundam.xyz")
 
             return
 
             }
 
       //text = text.replace(//g,"")
 
       text = text.replace(/<\/td>/g,"")
 
       replier.reply(Cha+" 장비분포\n"+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+text+"\n\n정보위치:http://dundam.xyz")
 
            }
 
      if(msg.indexOf("@세라") == 0) {
 
         a = org.jsoup.Jsoup.connect("http://dnfnow.xyz/invest").get().select("tr")
 
         var text = "상시판매 세라템으로 100만골드 벌기위한 요구세라\n[]안의 수가 낮을수록 높은효율\n※참고표 입니다. 맹신하지 마세요!"+"\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"\n아이템 명 / 세라 가격 / 경매장 가격 / 현재 매물수\n[100만골드당 요구세라]\n"
 
         for(i=1; i();i++){
 
    c = a.get(i).select("td")
 
    text += c.get(0)+" / "+ c.get(1) +" / "+ c.get(2) +"  /  "+c.get(3)+"\n"+"  ["+c.get(4)+" 세라]"+"\n"
 
    }
 
    //text = text.replace(//g,"")
 
    text = text.replace(/<\/td>/g,"")
 
    text = text.replace(/(<([^>])+>)/g,"")
 
       text += "\n\n정보위치:http://dnfnow.xyz"
 
       replier.reply(text)
 
       }
 
 function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
 
     if(msg.indexOf("@초테이") != -1) {
 
    var Cho = msg.split(" ")
 
    var text = ''
 
    if(Cho[1] == null) {
 
    text += "超 테이 업글효율 / 최적칭호"+"\n"+"\u200b".repeat(500)
 
    }
 
    else {
 
    text += "超 테이("+Cho[1]+") 업글효율 / 최적칭호"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)
 
    }
 
    switch(Cho[1]) {
 
    case "억년" : case "경갑" : text += "\n최적칭호 : 크리티컬 데미지 증가\n업글효율 : 하의 - 벨트 - 상의 - 어깨 - 신발"; break
 
    case "오광" : case "판금" : text += "\n최적칭호 : 데미지 증가\n업글효율 : 벨트 - 어깨 - 상의 - 하의 - 신발"; break
 
    case "계절" : case "가죽" : text += "\n최적칭호 : 크리티컬 데미지 증가\n업글효율 : 벨트 - 신발 - 상의 - 하의 - 어깨"; break
 
    case "온슬" : case "온슬롯" : case "중갑" : text += "\n최적칭호 : 추가 데미지 증가\n업글효율 : 어깨 - 상의 - 신발 - 벨트 - 하의"; break
 
    case "창천" : case "천" : text += "\n최적칭호 : 추가 데미지 증가\n업글효율 : 상의 - 어깨 - 신발 - 벨트 - 하의"; break
 
    case "홀리" : case "헤카테" : case "세라핌" : case "라핌" : case "버퍼" : text += "\n최적칭호 : 버프 칭호\n업글효율\n1. 독공파티\n벨트 - 상의 - 하의 - 신발 - 어깨\n2. 퍼뎀파티\n상의/하의 - 신발 - 어깨 - 벨트"; break
 
    default : text += "※세트별 확인은 @초테이 뒤에 세트명, 재질명으로 재검색 해주세요.\n\n억년[경갑] (칭호 : 크증)\n하의 - 벨트 - 상의 - 어깨 - 신발\n오광[판금] (칭호 : 증뎀)\n벨트 - 어깨 - 상의 - 하의 - 신발\n계절[가죽] (칭호 : 크증)\n벨트 - 신발 - 상의 - 하의 - 어깨\n온슬롯[중갑] (칭호 : 추뎀)\n어깨 - 상의 - 신발 - 벨트 - 하의\n창천[천] (칭호 : 추뎀)\n상의 - 어깨 - 신발 - 벨트 - 하의\n버퍼[홀리/라핌/헤카테] (칭호 : 버프)\n1. 독공파티\n벨트 - 상의 - 하의 - 신발 - 어깨\n2. 퍼뎀파티\n상의/하의 - 신발 - 어깨 - 벨트"
 
    }
 
    replier.reply(text)
 
 }
 
 if(msg.indexOf("@만크") != -1) {
 
    var Critical = msg.split(" ")
 
    switch(Critical[1]) {
 
    case "남귀" : case "남귀검사" : replier.reply("남귀검사 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷웨펀마스터(검신)◁\n마을만크 : 58~68%\n\n오버드라이브 : 15 ~ 25 % (스위칭)\n류심 강 : 14 + Lv x 1 % (인던전)\n\n▷소울브링어(다크로드)◁\n마을만크 : 97%\n\n사슬해제 : 15 + Lv x 1.5 % (마을)\n\n▷버서커(블러드이블)◁\n마을만크 : 83.8% (최소)\n\n선혈의 추억 : 13.2 + Lv x 0.6 % (인던전)\n▷아수라(인다라천)◁\n마을만크 : 77~82%\n\n살의의 파동 : 15 ~ 20 % (스위칭)\n사슬 해제 : Lv x 1.5 % (마을) ※ 스킬훔치기\n\n▷검귀(악귀나찰)◁\n마을만크 : 97%\n\n청혈투귀 : 10 + Lv x 0.5 % (마을)\n야차라 불리는자 : 11 + Lv x 0.5 % (마을)"); break
 
    case "여귀" : case "여귀검사" : replier.reply("여귀검사 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷소드마스터(마제스티)◁\n마을만크 : 57 ~ 77%\n\n신검합일 : 20 ~ 40 % (스위칭)\n\n▷데몬슬레이어(디어사이드)◁\n마을만크 : 97%\n\n마검제어 : 10 % (마을)\n\n▷베가본드(검제)◁\n마을만크 : 97%\n\n삼화취정 : 10 % (마을)\n\n▷다크템플러(네메시스)◁\n마을만크 : 97%\n\n충실한 종 : 10.5 + Lv x 0.5 % (마을)"); break
 
    case "남거" : case "남거너" : replier.reply("남거너 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷레인저(레이븐)◁\n마을만크 : 78.6% (최소)\n\n리볼버 강화 : 10 + Lv x 1 % (마을)\n죽음의 표식 : 18.4 + Lv x 1.1 % (인던전)\n\n▷메카닉(마이스터)◁\n마을만크 : 97%\n\n아크리액터 : 10 + Lv x 0.5 % (마을)\n\n▷스핏파이어(커맨더)◁\n마을만크 : 87%\n\n섬광류탄 : 10% (인던전) ※액티브\n\n▷런처(디스트로이어)◁\n마을만크 : 97%\n\n스펙트럴 서치 아이 : 24% (마을)"); break
 
    case "여거" : case "여거너" : replier.reply("여거너 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷레인저(크림슨로제)◁\n마을만크 : 97%\n\n리볼버 강화 : 10 + Lv x 1 % (마을)\n\n▷메카닉(옵티머스)◁\n마을만크 : 97%\n\n트랜스 포메이션 : 10 % (마을)\n\n▷스핏파이어(프레이야)◁\n마을만크 : 87%\n\n섬광류탄 : 10 % (인던전) ※액티브\n\n▷런처(스톰트루퍼)◁\n마을만크 : 97%\n\nAPG-63 : 13 + Lv x 1 % (마을)"); break
 
    case "남격" : case "남격투가" : replier.reply("남격투가 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷넨마스터(염황광풍제월)◁\n마을만크 : 97%\n\n넨의 극의 : 23 + Lv x 1 % (마을)\n\n▷스트라이커(패황)◁\n마을만크 : 97%\n\n급소 지정 : 26 + Lv x 2 % (마을)\n\n▷스트리트파이터(명왕)◁\n마을만크 : 97%\n\n천수 천안 : 11.5 + Lv x 0.5 % (마을)\n\n▷그래플러(그랜드마스터)◁\n마을만크 : 97%\n\n가장 강한 녀석은 누구냐? : 30 + Lv x 2 % (마을)"); break
 
    case "여격" : case "여격투가" : replier.reply("여격투가 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷넨마스터(염제폐월수화)◁\n마을만크 : 97%\n\n흩날리는 천염화 : 16.5 + Lv x 0.5 % (마을)\n\n▷스트라이커(카이저)◁\n마을만크 : 97%\n\n급소 지정 : 32 + Lv x 1.6 % (마을)\n\n▷스트리트파이터(용독문주)◁\n마을만크 : 71% (최소)\n\n용독술 : 26 + Lv x 2 % (인던전)\n\n▷그래플러(얼티밋디바)◁\n마을만크 : 97%\n\n파워 슬램 : 10 + Lv x 0.5 % (마을)\n옷깃 잡기 : 12 + Lv x 0.5 % (마을)"); break
 
    case "남법" : case "남마법사" : replier.reply("남마법사 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷엘레멘탈바머(오블리비언)◁\n마을만크 : 97%\n\n페이탈 엘레멘트 : 11.5 + Lv x 0.5 % (마을)\n\n▷빙결사(이터널)◁\n마을만크 : 97%\n\n발현 : 12 + Lv x 1 % (마을)\n\n▷블러드메이지(뱀파이어로드)◁\n마을만크 : 97%\n\n트루 블러드 : 10 %\n\n▷스위프트마스터(아이올로스)◁\n마을만크 : 97%\n\n질풍의 봉 마스터리 : 10 + Lv x 0.5 % (마을)\n\n▷디멘션 워커(어센션)◁\n마을만크 : 82.5 ~ 97%\n\n도그마 디바이스 : 10 + Lv x 0.5 (마을)\n운명 왜곡 : Lv18 기준 (진동수별 1 = 7% / 2 = 10.8% / 3 = 14.5%)"); break
 
    case "여법" : case "여마법사" : replier.reply("여마법사 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷엘레멘탈마스터(오버마인드)◁\n마을만크 : 92% (최소)\n\n마력증폭 : 16.5 + Lv x 0.5 % (마을)\n초월의 룬 : 마력증폭 증가의 30% 추가 증가 (인던전)\n\n▷배틀메이지(아슈타르테)◁\n마을만크 : 54.9%\n\n암 체이서 : 42.1 + Lv x 1 % (인던전)\n니우의 전투술 : 20 + Lv x 0.5 % (마을)\n창 마스터리 : 12 + Lv x 0.6 % (마을)\n\n▷소환사(이클립스)◁\n마을만크 : 97%\n\n환수강화 오라 : 10 + Lv x 0.5 % (마을)\n\n▷마도학자(지니워즈)◁\n마을만크 : 97%\n\n성공예감 : 12.1 + Lv x 0.7 % (마을)\n\n▷인챈트리스(헤카테)◁\n마을만크 : 97%\n\n사악한 호기심 : 20 + Lv x 2 % (마을)"); break
 
    case "남프리" : case "남프리스트" : replier.reply("남프리스트 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷크루세이더(배틀크루)◁\n마을만크 : 82~87%\n\n성령의 메이스 : 10 ~ 15 % (스위칭)\n\n▷인파이터(저스티스)◁\n마을만크 : 82% (최소)\n\n윌 드라이버 : 15 + Lv x 1.5 % (인던전) ※액티브\n\n▷퇴마사(태을선인)◁\n마을만크 : 69% (최소)\n\n신선의 경지 : 28 + Lv x 2 % (인던전) ※액티브\n\n▷어벤저(이모탈)◁\n마을만크 : 97%\n\n낫 마스터리 : 15.5 + Lv x 0.5 % (마을)"); break
 
    case "여프리" : case "여프리스트" : replier.reply("여프리스트 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷크루세이더(세라핌)◁\n마을만크 : 97%\n\n십자가 마스터리 : 10 + Lv x 0.5 % (마을)\n라파엘의 축복 : 13 + Lv x 1 % (마을)\n\n▷미스트리스(리디머)◁\n마을만크 : 75.5% (최소)\n\n죄를 고하는 자 : 21.5 + Lv x 0.5 % (인던전)\n\n▷이단심판관(인페르노)◁\n마을만크 : 77 ~ 87%\n\n광적인 믿음 : 10 ~ 20 % (스위칭)\n\n▷무녀(천선낭랑)◁\n마을만크 : 97%\n\n법력 : 15 + Lv x 1.5 % (마을)"); break
 
    case "출렁이" : case "나이트" : replier.reply("나이트 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷팔라딘(세이비어)◁\n마을만크 : 67% (최소)\n\n세라픽 페더 : 30 + Lv x 0.5 % (인던전)\n\n▷카오스(마신)◁\n마을만크 : 97%\n\n혼혈 : 10 % (마을)\n\n▷엘븐나이트(가이아)◁\n마을만크 : 97%\n\n강인한 신념 : 10 + Lv x 1 % (마을)\n\n▷드래곤나이트(드레드노트)◁\n마을만크 : 97%\n\n슬레이어 : 15 + Lv x 1 % (마을)\n계승자 : 11.5 + Lv x 0.5 % (마을)"); break
 
    case "도적" : case "돚거" : replier.reply("도적 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷로그(알키오네)◁\n마을만크 : 59% (최소)\n\n문아크 : 38 + Lv x 2 % (인던전)\n\n▷사령술사(타나토스)◁\n마을만크 : 97%\n\n학살자의 공포 : 11.5 + Lv x 0.5 % (마을)\n\n▷쿠노이치(시라누이)◁\n마을만크 : 97%\n\n초염혼폭술 : 11.5 + Lv x 0.5 % (마을)\n\n▷섀도우 댄서(그림리퍼)◁\n마을만크 : 66.1 ~ 77.1%\n\n암살자의 마음가짐 : 19.9 ~ 30.9 % (스위칭)\n배후 습격 : 19 + Lv x 1 % (인던전) ※백어택한정"); break
 
    case "마챙" : case "마창사" : replier.reply("마창사 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷뱅가드(워로드)◁\n마을만크 : 67 ~ 77%\n\n마창 해방 : 20 ~ 30 % (스위칭)\n\n▷듀얼리스트(듀란달)◁\n마을만크 : 97%\n\n무형의 창술사 : 11.5 + Lv x 0.5 % (마을)\n\n▷드래고니안랜서(제노사이더)◁\n마을만크 : 97%\n\n광창 마스터리 : 11.5 + Lv x 0.5 % (마을)\n\n▷다크랜서(에레보스)◁\n마을만크 : 77 ~ 87%\n\n다크니스 : 10 ~ 20 % (스위칭)"); break
 
    case "총검" : case "총검사" : replier.reply("총검사 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷요원(레퀴엠)◁\n마을만크 : 97%\n\n요원의 전투술 : 15 + Lv x 1 % (마을)\n냉혈 : 13 + Lv x 1 % (마을)\n\n▷히트맨(갓파더)◁\n마을만크 : 97%\n\n숙련된 전문가 : 15 + Lv x 1 % (마을)\n\n▷트러블슈터(언터처블)◁\n마을만크 : 97%\n\n리인포스 파이어 : 11.5 + Lv x 0.5 % (마을)\n\n▷스페셜리스트(패스파인더)◁\n마을만크 : 77 ~ 82%\n\n코어 프렉시스 : 15 ~ 20 % (스위칭)"); break
 
    case "외전" : replier.reply("외전 만크목록"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"▷다크나이트(닥나)◁\n마을만크 : 97%\n\n차원 일치 : 11.5 + Lv x 0.5 % (마을)\n\n▷크리에이터(크리)◁\n마을만크 : 77 ~ 87%\n\n증폭 : 10 ~ 20 % (스위칭)"); break
 
    default : replier.reply("아래의 클래스별로 재검색해주세요.\n\n↓자세히 보기↓\n"+"\u200b".repeat(500)+"남귀 / 남귀검사\n여귀 / 여귀검사\n남거 / 남거너\n여거 / 여거너\n남격 / 남격투가\n여격 / 여격투가\n남법 / 남마법사\n여법 / 여마법사\n남프리 / 남프리스트\n여프리 / 여프리스트\n출렁이 / 나이트\n도적 / 돚거\n마챙 / 마창사\n총검 / 총검사\n외전"); break
 
    }
 
 }

 if(msg.indexOf("@등급") != -1) {

    var day = new Date()
 
    var grade = msg.split(" ")
 
    var text =''
 
    if(grade[1] == null)
 
    {
 
     grade[1] = "악세"
 
    }
 
    var text1 = day.getMonth()+1+"월"+day.getDate()+"일 "+grade[1]+" 세트 등급\n옵션보는방법\n아이템 명[부위] 등급(%)\n오늘옵션(최대옵션)"+"\n↓자세히 보기↓\n"+"\u200b".repeat(500)
 
    var t = false;
 
  
 
    switch(grade[1]) {
 
    case "영광" : a = org.jsoup.Jsoup.connect("https://dunfaoff.com/Grade.df").get().select("div.QuestionWrap");
      break;
 
    case "청화" : a = org.jsoup.Jsoup.connect("https://dunfaoff.com/Grade.df?type=Accessory&setName=臾댁쓽+毅곸뿭+:+泥?솕+淫명듃").get().select("div.QuestionWrap"); 
    break;
    }
   }
}s