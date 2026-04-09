import nodemailer from 'nodemailer';

export async function POST(request) {
  const { naam, bedrijf, email, telefoon, pakket, bericht } = await request.json();

  if (!naam || !email) {
    return Response.json({ error: 'Naam en e-mail zijn verplicht.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const pakketLabel = {
    starter: 'Starter — €49/maand',
    business: 'Business — €79/maand',
    pro: 'Pro — €119/maand',
    'weet-nog-niet': 'Weet nog niet',
  }[pakket] || pakket || '–';

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `Nieuwe aanvraag via lease-een-website.nl — ${naam}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; color: #111;">
        <h2 style="color: #0050FF; margin-bottom: 24px;">Nieuwe website-aanvraag</h2>
        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight:600; width: 160px;">Naam</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${naam}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight:600;">Bedrijf</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${bedrijf || '–'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight:600;">E-mail</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight:600;">Telefoon</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${telefoon || '–'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight:600;">Pakket</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${pakketLabel}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight:600; vertical-align:top;">Bericht</td>
            <td style="padding: 10px 0; white-space: pre-wrap;">${bericht || '–'}</td>
          </tr>
        </table>
      </div>
    `,
  });

  return Response.json({ ok: true });
}
