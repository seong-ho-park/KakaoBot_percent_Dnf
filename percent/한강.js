const ssl = require('ssl');

ssl.SSL;

const room_name=["D&F 비율","test open2@","사과"];  //채팅방 이름

function response(room, msg, sender, isGroupChat, replier, ImageDB) { 
    if (room_name.indexOf(room)!=-1 && msg == "한강" || room_name.indexOf(room)!=-1 && msg == "수온" || room_name.indexOf(room)!=-1 && msg == "한강 수온" || room_name.indexOf(room)!=-1 && msg == "한강수온"){
        let temp = Utils.getWebText("https://hangang.ivlis.kr/api.php?type=dgr").replace(/<[^>]+>/g, "").trim();
        let time = Utils.getWebText("https://hangang.ivlis.kr/api.php?type=time").replace(/<[^>]+>/g, "").trim();
        try {
        replier.reply(k + "현재 한강 수온은 " + temp + " 입니다." + "\n" + time);
        }
        catch(e) {
        replier.reply(k + "현재 한강 수온을 가져오지 못했습니다. 잠시 후 다시 시도해주세요.");
        }
    }
}