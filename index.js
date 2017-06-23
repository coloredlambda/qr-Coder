var fs = require('fs');
var qr = require('qr-image');
url = process.argv[2];
fileType = process.argv[3];

if(fileType == undefined){
     qr.image(url, {type : 'png'})
    .pipe(fs.createWriteStream('MyQRCode.png')); 
}else if(fileType != 'png' && fileType != 'svg' && fileType != 'eps' && fileType  != 'pdf'){
       console.log('Sorry the filetype you indicated is not supported. Supported file types are png, svg, eps and pdf.')
}else{
    qr.image(url, {type : fileType})
    .pipe(fs.createWriteStream(`MyQRCode.${fileType}`));
}
 