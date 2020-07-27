const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:"nitin_21813024@nitkkr.ac.in",
        subject:'Thanks for joining.',
        text:`Welcome to the Task manager app ${name}.`
    })
}

const sendDeleteEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'nitin_21813024@nitkkr.ac.in',
        subject:'We are sorry to see you leave.',
        text:`GoodBye ${name}. Tell us why you left.`
    })
}
module.exports={
    sendWelcomeEmail,
    sendDeleteEmail
}