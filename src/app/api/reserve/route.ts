import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, governorate, size, quantity, notes } = body;

    // Validate fields
    if (!fullName || !phone || !governorate || !size || !quantity) {
      return NextResponse.json(
        { error: "الرجاء ملء جميع الحقول المطلوبة." },
        { status: 400 }
      );
    }

    const createdAt = new Date().toISOString();
    const payload = {
      fullName,
      phone,
      governorate,
      size,
      quantity: Number(quantity),
      notes: notes || "",
      createdAt,
    };

    // 1. If a Google Sheet Webhook URL is set in env, send data there
    const googleSheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    let sheetSent = false;
    
    if (googleSheetUrl) {
      try {
        const response = await fetch(googleSheetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        if (response.ok) {
          sheetSent = true;
        }
      } catch (err) {
        console.error("Failed to post to Google Sheets Webhook:", err);
      }
    }

    // 2. Premium feature: save locally to a JSON file (reservations.json) for instant offline testing and logs
    try {
      const filePath = path.join(process.cwd(), "reservations.json");
      let reservations = [];
      
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf-8");
        try {
          reservations = JSON.parse(data);
        } catch {
          reservations = [];
        }
      }
      
      reservations.push(payload);
      fs.writeFileSync(filePath, JSON.stringify(reservations, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("Failed to save reservation locally:", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "تم تسجيل اهتمامك بنجاح",
      savedLocally: true,
      sheetSent,
      data: payload,
    });
  } catch (error) {
    console.error("Reserve API error:", error);
    return NextResponse.json(
      { error: "حدث خطأ داخلي في الخادم أثناء معالجة طلبك." },
      { status: 500 }
    );
  }
}
