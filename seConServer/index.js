var express = require('express');
var app = express();
var sessions = require("client-sessions");
var bodyParser = require('body-parser')
var mongo = required('mongodb');


//Global Vars
var ServerName="localhost:3000"
numberOfPeddingPix=7;

/*
app.use(sessions({
  cookieName: 'mySession', // cookie name dictates the key name added to the request object
  secret: 'blargadeeblargblarg', // should be a large unguessable string
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
  activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
}));
*/
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

//------------------------------End Initialization--------------------------



app.use('/seConLogin/:userName',function(req, res, next) {
  if (req.mySession.seenyou) {
    res.setHeader('X-Seen-You', 'true');
    res.setHeader('Location', '/api/seCon/auth');
  } else {
    // setting a property will automatically cause a Set-Cookie response
    // to be sent
   // req.mySession.seenyou = true;
    res.setHeader('X-Seen-You', 'false');
    res.send();
  }
   res.send();
});
/////////////////////////////////////// APIs //////////////////////////////////////////////////////////////
app.get('/seConLogin/:userName', function (req, res)
 {
   console.log('s');
  //Extract data from the db in order to check the user existence
  //var queryResult= query the mongoDB
  //  if(req.params.userName== queryResult){res.send('{success:'+queryResult+'}');}
  
  // res.send('{failed: user '+queryResult+' does not exist}');
  
 })


/*
  API description-    
    login to seCon.
    api: "api/seCon/auth"
    method: POST
    payload: { userName(string), password(string) }
    response: success: "ok", fail:"wrong password!"
    on success: getClickableImages api call dispatched.
*/

/*******************************************************************Done*************************************/


app.post('/api/seCon/auth', function (req, res) {
	//Extract data from the db in order to check the user existence
  var userName=req.body.userName;
  var password=req.body.password;
  var queryResult= query the mongoDB



  //if((req.params.userName== queryResult.userName) && (req.params.password== queryResult.password))
    {
      var queryResult=callForImage();
      console.log(queryResult);
      res.send('{success:'+queryResult+'}');
      
    }
  
 // res.send('{failed: user '+queryResult+' does not exist}');
 // res.send('Hello World!');
})
/*******************************************************************END*************************************/


app.get('/avi/:id', function (req, res) {
	
  res.send('Hello avi!');
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

















//////////////////////////////////////FUNCTIONS///////////////////////////////
//This function provides array of 9 elements ,every element is an img url
function callForImage()
{
  return getRandomImgMap();
}

//return imgMAP
function getRandomImgMap()
{
  var ImgDictionary;//local folder translation 1/1.jpg circle pix 
  var imgKeyurl; //the pix which need to be pressed
  var NumOfPixsUnderEveryFolder=2; 
  var myObj;

  myObj = {"questionKey":"","Imgurl":""}; 
  ImgDictionary={"Coffe":"1",
                 "Ice Creame":"2"};
  
  
  var tempquestionkey=GetMAPquestionKey();
  imgKeyurl=ServerName+"/imgMAP/"+ImgDictionary[tempquestionkey]+"/"+Math.floor(Math.random() * NumOfPixsUnderEveryFolder)+".png";
  myObj.questionKey= "Please click over the pictures which involved with "+tempquestionkey; //the query for what to look/press within the ImgMap (ex- press over the pix which contains coffe)
  myObj.Imgurl=imgKeyurl;


  //getPeddingImglist();
  //myObj=blendImg(myObj,imgKeyurl);
  //blending the Imgurls with the imgKeyurl and saving the imgKeyurl position into the db

  return myObj;
}

function GetMAPquestionKey()
{
  var questionKeyArr = ["Coffe", "Ice Creame"];
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


//correct errors-
 npm install -g npm@latest

*/