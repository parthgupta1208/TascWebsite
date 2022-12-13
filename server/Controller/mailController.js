
const nodemailer = require("nodemailer");



const generateMail = async (message, name, email) => {

    let htmlText = `
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
                <div style="border-bottom:1px solid #eee">
                    <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">StudentDB</a>
                </div>
                <p style="font-size:1.1em">User name -> ${name} </p>
                <p>Thank you for registering for our NMAMIT Site. Use the following OTP to complete your Sign Up procedure.
                </p>
                <h2 

                    User email--> ${email}
                    style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">
                    Message -> ${message}</h2>

                <p style="font-size:0.9em;">Regards,<br />StudentDB</p>
                <hr style="border:none;border-top:1px solid #eee" />
            </div>
        </div>
    `

    let transporter = await nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: process.env.PORT_SENDGRID,
        auth: {
            user: 'apikey', // generated ethereal user
            pass: process.env.SENDGRID_API_KEY, // generated ethereal password
        },
    });

    var mailOptions = await {
        from: 'studentdb23@gmail.com',
        to: 'guptaparth.1208@gmail.com',
        subject: `${name} wants to reach out to Tasc`,
        html: htmlText
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Error: " + error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


const getMail = async (req, res) => {

    const { message, name, email } = req.body

    try {
        await generateMail(message, name, email)
        res.status(200).json("Mail sent")
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getMail }