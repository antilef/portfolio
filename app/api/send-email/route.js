import nodemailer from 'nodemailer'

export async function POST (req){
    console.log(req.method)
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { firstname, lastname, email,phoneNumber,subject,message } = await req.json();


  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    
    await transporter.sendMail({
      from: `${firstname} ${lastname} <${email}>`, // Sender info
      to: process.env.EMAIL_USER, // Your email address
      subject: `Portfolio: ${subject}`,
      text: `New message from  website contact form:\n\nName: ${firstname}\nEmail: ${email}\nPhone: ${phoneNumber}\n\nMessage:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true, message: "Mail sended succesfully" }),{
      status: 200
    })
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ success: false, error: error.message }),{
      status: 500
    })
  }
}
