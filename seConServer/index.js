var express = require('express');
var app = express();




var ServerName="localhost:3000"
numberOfPeddingPix=7;

app.get('/seConLogin/:userName', function (req, res)
 {
  //Extract data from the db in order to check the user existence
  //var queryResult= query the mongoDB
  //  if(req.params.userName== queryResult){res.send('{success:'+queryResult+'}');}
  
  // res.send('{failed: user '+queryResult+' does not exist}');
  
 })


/*
login to seCon.
api: "api/seCon/auth"
method: POST
payload: { userName(string), password(string) }
response: success: "ok", fail:"wrong password!"
on success: getClickableImages api call dispatched.

*/
app.get('/api/seCon/auth', function (req, res) {
	//Extract data from the db in order to check the user existence
  //var queryResult= query the mongoDB

  //if((req.params.userName== queryResult.userName) && (req.params.password== queryResult.password))
    {
      var queryResult=callForImages();
      res.send('{success:'+queryResult+'}');
      
    }
  
 // res.send('{failed: user '+queryResult+' does not exist}');
 // res.send('Hello World!');
})

app.get('/avi/:id', function (req, res) {
	
  res.send('Hello avi!');
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})





//////////////////////////////////////FUNCTIONS///////////////////////////////
//This function provides array of 9 elements ,every element is an img url
function callForImages()
{
  return getRandomImgMap();
}

//return imgMAP (urls)
function getRandomImgMap()
{
  var ImgDictionary;//local folder translation 1/1.jpg circle pix 
  var imgKeyurl; //the pix which need to be pressed 
  var myObj;

  myObj = {"questionKey":"","Imgurls":[]};
  ImgDictionary={"circle":"1", "square":"2"};
  
  myObj.questionKey= GetMAPquestionKey(); //the query for what to look/press within the ImgMap (ex- press over the pix which contains circle)
  imgKeyurl=ServerName+"/imgMAP/"+ImgDictionary[myObj.questionKey]+"/1.png";
  myObj.Imgurls=getPeddingImglist();
  
  myObj=blendImg(myObj,imgKeyurl);

  //blending the Imgurls with the imgKeyurl and saving the imgKeyurl position into the db

  return myObj;
}

function GetMAPquestionKey()
{
  var questionKeyArr = ["circle", "square"];
  var questionKey = questionKeyArr[Math.floor(Math.random() * questionKeyArr.length)];
  return questionKey;
}


function getPeddingImglist()
{
  
  var ImgBasicPath=ServerName+"/imgMAP/10/";
  var ImgUrlsList=new Array();

  for(var i=0;i<numberOfPeddingPix;i++)
    {ImgUrlsList.push(ImgBasicPath+(Math.floor(Math.random() * numberOfPeddingPix))+".png");}

  return ImgUrlsList;
}

//this function responsible to blend the pix position and to save the ImgKey position within keysPosition.
function blendImg(myObj,imgKeyurl)
{
   myObj.keysPosition= new Array();
  for(var i=0;i<2;i++)
  {
    var positionForImgKey=Math.floor(Math.random() * myObj.Imgurls.length);
    myObj.Imgurls.splice(positionForImgKey,0, imgKeyurl);
  }
     var index=0;
     myObj.Imgurls.forEach(function(element) {
      if(element==imgKeyurl){myObj.keysPosition.push(index);}
      index++;  
      }, this);
   

  console.log(myObj)

return myObj;
}















/*
express-
https://expressjs.com/en/guide/using-middleware.html/?KO=67


start server-
nodemon index.js


check for change-
npm install nodemon -g

install express
npm install express --save

*/