// Temporarily disabled auth route for deployment
export async function GET() {
  return Response.json({ message: "Auth is temporarily disabled" });
}

export async function POST() {
  return Response.json({ message: "Auth is temporarily disabled" });
}