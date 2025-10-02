import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    const emailBody = `
                    <!DOCTYPE html>
                            <html lang="en">
                            <head>
                            <meta charset="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <title>New Contact Submission</title>
                            <style>
                                body {
                                background-color: #f7f9fc;
                                color: #333;
                                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                                min-height: 100vh;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                margin: 0;
                                padding: 1rem;
                                }
                                .container {
                                max-width: 36rem;
                                margin: auto;
                                background: #ffffff;
                                border-radius: 1.25rem;
                                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
                                padding: 2.5rem;
                                border: 1px solid #e5e7eb;
                                animation: fadeIn 0.6s ease-in-out;
                                }
                                @keyframes fadeIn {
                                from { opacity: 0; transform: translateY(10px); }
                                to { opacity: 1; transform: translateY(0); }
                                }
                                .title {
                                margin-bottom: 2rem;
                                text-align: center;
                                }
                                .title h1 {
                                font-size: 1.75rem;
                                font-weight: 700;
                                letter-spacing: 0.04rem;
                                background: linear-gradient(90deg, #2563eb, #0ea5e9);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                }
                                .content {
                                margin-bottom: 1.5rem;
                                font-size: 1rem;
                                line-height: 1.7rem;
                                color: #4b5563;
                                }
                                .message-box {
                                background: #f9fafb;
                                padding: 1.75rem;
                                border-radius: 1rem;
                                border: 1px solid #e5e7eb;
                                box-shadow: inset 0 2px 6px rgba(59, 130, 246, 0.05);
                                margin: 1.5rem 0;
                                }
                                .message-box h2 {
                                font-size: 1.25rem;
                                font-weight: 600;
                                color: #1f2937;
                                margin-bottom: 1rem;
                                border-left: 4px solid #3b82f6;
                                padding-left: 0.5rem;
                                }
                                .message-box p {
                                margin: 0.5rem 0;
                                font-size: 1rem;
                                color: #374151;
                                }
                                .message-box p span {
                                font-weight: 600;
                                color: #111827;
                                }
                                .message-box p.italic {
                                font-style: italic;
                                color: #6b7280;
                                margin-top: 0.75rem;
                                }
                                .button {
                                display: inline-block;
                                background: linear-gradient(90deg, #2563eb, #3b82f6, #0ea5e9);
                                color: #fff;
                                font-weight: 600;
                                padding: 0.75rem 2.25rem;
                                border-radius: 0.75rem;
                                text-decoration: none;
                                font-size: 1rem;
                                transition: all 0.3s ease-in-out;
                                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
                                }
                                .button:hover {
                                background: linear-gradient(90deg, #0ea5e9, #2563eb);
                                transform: translateY(-2px);
                                box-shadow: 0 6px 16px rgba(59, 130, 246, 0.35);
                                }
                                .footer {
                                margin-top: 2rem;
                                text-align: center;
                                font-size: 0.85rem;
                                color: #6b7280;
                                border-top: 1px solid #e5e7eb;
                                padding-top: 1rem;
                                }
                                .footer a {
                                color: #2563eb;
                                font-weight: 600;
                                text-decoration: none;
                                }
                                .footer a:hover {
                                text-decoration: underline;
                                }
                            </style>
                            </head>
                            <body>
                            <div class="container" role="main" aria-labelledby="email-title" aria-describedby="email-content">
                                <div class="content" id="email-content">
                                <p>
                                    Hello,<br />
                                    You have received a new message from someone interested in collaborating with you.
                                </p>
                                <div class="message-box">
                                    <h2>Their Message</h2>
                                    <p><span>Name:</span> ${name}</p>
                                    <p><span>Message:</span> ${message}</p>
                                    <p><span>Email:</span> ${email}</p>
                                    <p class="italic">"I am excited to get started and look forward to your response!"</p>
                                </div>
                                <p>
                                    This request was submitted through your contact form on 
                                    <strong>Thursday, October 02, 2025, at 1:03 PM IST</strong>.  
                                    Please review and reply to <strong>${email}</strong>.
                                </p>
                                <div style="text-align:center; margin-top:1.5rem;">
                                    <a href="mailto:${email}" class="button">Reply to ${name}</a>
                                </div>
                                </div>
                                <div class="footer">
                                Powered by <a href="#">Your Portfolio</a>
                                </div>
                            </div>
                            </body>
                        </html>
                    `;

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "developeraromal@gmail.com",
      subject: `New proposal from ${name}`,
      html: emailBody,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
