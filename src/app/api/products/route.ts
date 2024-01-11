export async function GET() {
  const res = await fetch('https://fake-coffee-api.vercel.app/api')
  const products = await res.json()
  return Response.json({products})
}

