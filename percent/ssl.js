importPackage(javax.net.ssl);
importPackage(java.lang);
importPackage(java.net);
importPackage(java.io);
importPackage(org.jsoup);

module.exports = {
SSL: function() {
    const Bot = {};
    const PHP ={
    
     getData : function(type, value){
      // Https 허용
    
     
    
      if (android.os.Build.VERSION.SDK_INT > 9){
    
        var policy = new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build();
    
        android.os.StrictMode.setThreadPolicy(policy);
      }
      // javax.net.ssl.SSLHandshakeException (SSL 인증서 오류 방지)
      javax.net.ssl.SSLHandshakeException();
      
      let sslContext = SSLContext.getInstance("SSL");
      sslContext.init(null, [new JavaAdapter(X509TrustManager, {
    
       getAcceptedIssuers : () => { return null; },
    
       checkClientTrusted : () => { return ; },
    
       checkServerTrusted : () => { return ; },
    
      })], new java.security.SecureRandom());
    
     
    
      HttpsURLConnection.setDefaultSSLSocketFactory(sslContext.getSocketFactory());
    
      HttpsURLConnection.setDefaultHostnameVerifier(new JavaAdapter(HostnameVerifier, {verify : (hostname, session) => { return true; }}));
    
     
    
      let connect = new URL("https://ttyy3388.josbar.io/getData.php?type=" + type + ((value) ? "&value=" + value : "")).openConnection();
    
     
    
      if(connect != null)
    
      {
    
       connect.setConnectTimeout(5000);
    
       connect.setUseCaches(false);
    
     
    
       var inputStreamReader = new InputStreamReader(connect.getInputStream()),
    
        bufferedReader = new BufferedReader(new InputStreamReader(connect.getInputStream())),
    
        text = bufferedReader.readLine(), line = "";
    
     
    
       while((line = bufferedReader.readLine()) != null)
    
       {
    
        text += "\n" + line;
    
       }
    
     
    
       inputStreamReader.close();
    
       bufferedReader.close();
    
       connect.disconnect();
    
      }
    
     
    
      return text.toString();
    
     },
    
     
    
     postData : function(type, value)
    
     {
    
      Jsoup.connect("https://ttyy3388.josbar.io/postData.php").data("type", type, "value", value).method(Connection.Method.POST).execute().parse();
    
     },
    
    };
    
    const DB ={
    
     StartWord : {}, // JSON Object
    
     GameData : {}, // JSON Object
    
     WordList : [], // JSON Array
    
     
    
     load : () =>{
    
      DB.StartWord = JSON.parse(PHP.getData("StartWord", null));
    
      DB.WordList = JSON.parse(PHP.getData("WordList", null));
    
      DB.GameData = JSON.parse(PHP.getData("GameData", null));
    
     },
    };

}
} 