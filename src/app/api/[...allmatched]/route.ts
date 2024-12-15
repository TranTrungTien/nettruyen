import { NextRequest, NextResponse } from "next/server";

//req is short for request
export async function GET(req: NextRequest) {
  const [_, query] = req.url.split("/api/");
  const data = await fetch(`https://api.mangadex.org/${query}`).then((res) =>
    res.json(),
  );

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  return NextResponse.json(
    { message: "This is a post request" },
    { status: 200 },
  );
}
// you can also handle PATCH, DELETE, PUT
