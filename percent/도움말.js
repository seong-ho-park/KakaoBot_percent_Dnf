const ssl = require('ssl');
const Admin = require('admin.js')
const Database = DataBase;

importClass(org.jsoup.Jsoup);

ssl.SSL;
const admin_sender = Database.getDataBase('bot_admin').split(' ');
const super_admin = Database.getDataBase('bot_superAdmin').split(' ');
const user_ban = Database.getDataBase('차단').split(' ');
const allsee="\u200b".repeat(500);
const room_name=["D&F 비율","test open2@","사과"];  //채팅방 이름




function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    if(user_ban.indexOf(sender) == -1){ 

        if(room_name.indexOf(room)!=-1 && msg.indexOf("@도움말")!=-1) {
                
            replier.reply('       '+'※비율봇 명령어 모음※\n'
            +'▼던담조회(25초)▼ \n @던담 서버 캐릭터이름\n\n'
            +'▼던담조회(40초)▼ \n !던담 서버 캐릭터이름\n\n'
            +'▼기린조회▼ \n @기린 서버 캐릭터이름\n\n'
            +'▼만크명령어▼ \n @만크\n\n'
            +'▼만크조회▼ \n @만크 캐릭터클래스\n\n'
            +'▼관리자 명령어▼ \n @관리자 명령어\n\n'
            );
        

        };
        
        if(room_name.indexOf(room)!=-1 && msg.indexOf("@명령어")!=-1) {
                
            replier.reply('       '+'※비율봇 명령어 모음※\n'
            +'▼던담조회(25초)▼ \n @던담 서버 캐릭터이름\n\n'
            +'▼던담조회(40초)▼ \n !던담 서버 캐릭터이름\n\n'
            +'▼기린조회▼ \n @기린 서버 캐릭터이름\n\n'
            +'▼만크명령어▼ \n @만크\n\n'
            +'▼만크조회▼ \n @만크 캐릭터클래스\n\n'
            +'▼관리자 명령어▼ \n @관리자 명령어\n\n'
            );
        };

        //관리자 명령어
        if(room_name.indexOf(room)!=-1 && msg.indexOf("@일해")!=-1 ) {
            for( i=1; i<=admin_sender.length;i++){
                if(sender === admin_sender[i-1] ){
                    replier.reply('네 주인님');
                    var check = Api.reload();
                    if(check === true){
                        replier.reply('모든 Api를 리로드 하였습니다.');
                    }else{
                        replier.reply('Api 리로드 실패하였습니다.');
                    };
                };

            };
        }else if(room_name.indexOf(room)!=-1 && msg.indexOf("@야")!=-1 ) {
            for( i=1; i<=admin_sender.length;i++){
                if(sender === admin_sender[i-1] ){
                    replier.reply('네 주인님');
                    
                };

            };
        }else if(room_name.indexOf(room)!=-1 && msg.indexOf("@잘하자")!=-1 ) {
            for( i=1; i<=admin_sender.length;i++){
                if(sender === admin_sender[i-1] ){
                    replier.reply('네..');
                    
                };

            };
        //@관리자 명령어
        }else if(room_name.indexOf(room)!=-1 && msg.indexOf("@관리자 명령어")!=-1 ){
            for( i=1; i<=admin_sender.length;i++){
                if(sender === admin_sender[i-1] ){
                    replier.reply(
                        '※비율봇 관리자 명령어※\n'+
                        allsee
                        +'봇 호출 : @야\n'
                        +'봇 혼내기 : @잘하자\n'
                        +'[오류시]리소스 리로드 : @일해 \n'
                        +'[주의]봇 사용 차단 : @차단 채팅방닉네임 \n'
                        +'[주의]차단 유저 조회 : @차단 조회 \n'
                    );
                };

            };
           
        }else if(room_name.indexOf(room)!=-1 && msg.indexOf("@차단")!=-1 ){
            for( i=1; i<=admin_sender.length;i++){
                if(sender === admin_sender[i-1] ){
                    var chat2 = msg.split(" ")
                     //@차단 조회
                    if(chat2.indexOf("조회") != -1){
                        var ban_list = Database.getDataBase('차단')
                        replier.reply('차단된 유저:'+ban_list);
                        replier.reply(
                            '차단 해제를 원한다면 길마 또는 사과님에게 문의바랍니다.'
                        );
                    }else{
                        //@차단 [유저]
                        var chat2 = msg.split(" ")
                        DataBase.appendDataBase('차단', chat2[1]+' ')
                        replier.reply(
                            chat2[1]+'님은 더이상 봇을 사용할수 없습니다.\n'
                            +'차단 해제를 원한다면 길마 또는 사과님에게 문의바랍니다.'
                        );
                    }
                };

            };
        }

        //슈퍼 관리자 명령어
        if(room_name.indexOf(room)!=-1 && msg.indexOf("@관리자")!=-1 ) {
            for( i=1; i<=super_admin.length;i++){
                if(sender === super_admin[i-1] ){
                    var chat = msg.split(" ")
                    //@관리자 조회
                    if(chat.indexOf("조회")!=-1){
                        var admin_list = Database.getDataBase('bot_admin')
                        replier.reply('봇 관리자:'+admin_list);
                    };
                    //@관리자 추가 [닉네임]   
                    if(chat.indexOf("추가")!=-1){
                        DataBase.appendDataBase('bot_admin', chat[2]+' ')
                        replier.reply(chat[2]+'님을 봇 관리자로 추가하였습니다.')
                    };
                };
            };
        };
    }
};