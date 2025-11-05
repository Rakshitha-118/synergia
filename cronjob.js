const cronjob=require('node-cron')
const nodemailer=require('nodemailer')
const password='process.env.password'                                                                
                                                                            
async function sendEmail(){
    let transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"rakshithan1111@gmail.com",
            pass:password
        }
    })
    const mailOptions={
        from:'"skill lab" <rakshithan1111@gmail.com>',
        to:'varshak7881@gmail.com',
        subject:'Your report is ready',
        text:'Congratulations your have won lottery'
}
const info=await transporter.sendMail(mailOptions)
console.log(info)
}

cronjob.schedule('*/10 * * * * *',()=>{
    console.log('executing every 10 second')
    sendEmail()
})