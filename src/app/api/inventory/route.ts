export const runtime = "nodejs";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const response = await fetch(`${process.env.WEBFLOW_REQUEST_URL}`, {
      headers: {
        Authorization: `Bearer ${process.env.WEBFLOW_BEARER_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://gringos.webflow.io",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error(`Fetch failed: ${error}`);
    throw error;
  }
}
