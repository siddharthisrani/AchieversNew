import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex =
  /^(\+91)?[6-9]\d{9}$/;

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const phone = body.phone?.replace(/\s+/g, "");
    const course = body.course?.trim();
    const message = body.message?.trim();
    const inquiryType = body.inquiryType?.trim();
    const source = body.source?.trim();

    // Required Fields

    if (!name || !phone || !course) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // Email Validation

    if (email && !emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        { status: 400 }
      );
    }

    // Phone Validation

    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid phone number.",
        },
        { status: 400 }
      );
    }

    // Prevent duplicate inquiry within 5 minutes

    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

    const existingLead = await Lead.findOne({
      phone,
      inquiryType,
      createdAt: {
        $gte: fiveMinutesAgo,
      },
    });

    if (existingLead) {
      return NextResponse.json(
        {
          success: false,
          message:
            "You've recently submitted an inquiry. Please wait a few minutes before submitting again.",
        },
        {
          status: 409,
        }
      );
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      course,
      message,
      inquiryType,
      source,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully.",
        data: lead,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Lead API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}