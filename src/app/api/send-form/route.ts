import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Получены данные формы:', body);
    const { amount, currency, country, city, telegram } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'capri.lion.777@gmail.com',
        pass: 'yoyy dxre nexd shrr',
      },
    });

    await transporter.sendMail({
      from: 'capri.lion.777@gmail.com',
      to: 'capri.lion.777@gmail.com',
      subject: 'New request from Fiat24',
      text: `Сумма: ${amount}\nВалюта: ${currency}\nСтрана: ${country}\nГород: ${city}\nTelegram: ${telegram}`,
    });

    console.log('Письмо успешно отправлено');
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Ошибка при отправке письма:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } else {
      console.error('Ошибка при отправке письма:', error);
      return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 500 });
    }
  }
}
