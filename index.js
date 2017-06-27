var fs = require('fs');
var qr = require('qr-image');

url = process.argv[2]; //Variable to store the user's url argument. 
fileType = process.argv[3]; //Variable to store the user's filetype argument.

//Checking to see if the user did not indicate file type since its optional. If it is, it defaults to png.
if(fileType == undefined){
     qr.image(url, {type : 'png'})
    .pipe(fs.createWriteStream('MyQRCode.png'));

//If file type is not undefined, checking to see if the filetype indicated is supported. 
}else if(fileType != 'png' && fileType != 'svg' && fileType != 'eps' && fileType  != 'pdf'){
       console.log('Sorry the filetype you indicated is not supported. Supported file types are png, svg, eps and pdf.')

// If file type is supported., creating file for user.
}else{
    qr.image(url, {type : fileType})
    .pipe(fs.createWriteStream(`MyQRCode.${fileType}`));
}
 
