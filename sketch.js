var jsondata;
var ssobj=[];
function preload(){
  // 取得spreadsheet
  jsondata = loadJSON('https://spreadsheets.google.com/feeds/list/1uqmsjYCWFtCzjVCr-zdLIE7WN6XwVY_oD17bDN1NH6Y/od6/public/values?alt=json');
}
function setup() {
  let temp = jsondata.feed.entry;
  console.log(jsondata);
  console.log(jsondata.feed.entry[0].gsx$name.$t);
            //第一筆資料的name的內容 
  /*
  console.log('第'+(i+2)+'行資料的tel欄位：'+jsondata.feed.entry[i].gsx$note.$t);
  */
  
  let str='';
  let str1='';
  
  // 把所有name的資料抓出來 排在燈箱上
  for(let i=0;i<jsondata.feed.entry.length;i+=1){
    str += '<div class="slide-'+i+'">'+
              '<a href="'+ jsondata.feed.entry[i].gsx$url.$t +'" target="_blank">'+
                '<img src="./asset/'+jsondata.feed.entry[i].gsx$id.$t+'.jpg" class="img-fluid"><img>'+
                '<p>'+jsondata.feed.entry[i].gsx$name.$t+'</p>'+
              '</a>'+
           '</div>';
    
    str1 += '<div class="slide-'+i+'">'+
'<img src="./asset/'+jsondata.feed.entry[i].gsx$id.$t+'.jpg" class="img-fluid"><img>'+
           '</div>';
  }
  
   //將演算的資料 str 插入 index 裡面 id= hw1 的 tag 物件
   //window.document.getElementById("hw1").innerHTML=str;
   $('#hw1').html(str);
   $('#hwfor').html(str1);
    
    // jquery 
    $(document).ready(()=>{
      $('#hw1').slick({
          centerMode: true,
          arrows: false,
          fade: true,
          asNavFor: '#hwfor',
          adaptiveHeight: true,
        
      });
      $('#hwfor').slick({
  centerMode: true,
  centerPadding: '180px',
          asNavFor: '#hw1',
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 2000,

});
          
    }); 
      
  
}

function draw() {
  
  
}