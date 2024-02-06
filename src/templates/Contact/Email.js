var nodemailer=require('nodemailer');
var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'kalyankumarreddydoragacharla12@gmail.com',
        pass:'shcbhujaeweitmwk'
    }
});
var mailOptions={
    from:'kalyankumarreddydoragacharla12@gmail.com',
    to:'',
    subject:'',
    text:'', 
};
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email Sent'+info.response);
    }
}