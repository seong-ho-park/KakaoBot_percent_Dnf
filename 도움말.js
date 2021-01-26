const ssl = require('ssl');

importClass(org.jsoup.Jsoup);

ssl.SSL;

const room_name=["D&F 비율","test open2@","사과"];  //채팅방 이름
const admin_sender=['안톤/사과와마카롱'];

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {

    if(room_name.indexOf(room)!=-1 && msg.indexOf("@도움말")!=-1) {
            
        replier.reply('       '+'※비율봇 명령어 모음※\n'
        +'▼던담조회(25초)▼ \n @던담 서버 캐릭터이름\n\n'
        +'▼던담조회(40초)▼ \n !던담 서버 캐릭터이름\n\n'
        +'▼기린조회▼ \n @기린 서버 캐릭터이름\n\n'
        +'▼만크명령어▼ \n @만크\n\n'
        +'▼만크조회▼ \n @만크 캐릭터클래스\n\n'
        );
     

    };
    
    if(room_name.indexOf(room)!=-1 && msg.indexOf("@명령어")!=-1) {
            
        replier.reply('       '+'※비율봇 명령어 모음※\n'
        +'▼던담조회(25초)▼ \n @던담 서버 캐릭터이름\n\n'
        +'▼던담조회(40초)▼ \n !던담 서버 캐릭터이름\n\n'
        +'▼기린조회▼ \n @기린 서버 캐릭터이름\n\n'
        +'▼만크명령어▼ \n @만크\n\n'
        +'▼만크조회▼ \n @만크 캐릭터클래스\n\n'
        );
    };

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
    };
    if(room_name.indexOf(room)!=-1 && msg.indexOf("@야")!=-1 ) {
        for( i=1; i<=admin_sender.length;i++){
            if(sender === admin_sender[i-1] ){
                replier.reply('네 주인님');
                
            };

        };
    };
};