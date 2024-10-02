import { ApodRouteParams } from "@/types";
import { NextResponse } from "next/server";

const API_KEY = "bpnBztVfKdsKXHLGKkcQGuxtpix0UXW0ZAlQHawy";

export async function GET(
  request: Request,
  requestParams: ApodRouteParams
): Promise<NextResponse> {
  const { params } = requestParams;

  const regex = /\d{4}-\d{2}-\d{2}/;
  if (!regex.test(params.date)) {
    return NextResponse.json(
      {
        error: "Formato inválido, use YYYY-MM-DD.",
      },
      {
        status: 400,
      }
    );
  }

  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${params.date}`
  );
  const data = await response.json();

  return NextResponse.redirect(data.url);
}
