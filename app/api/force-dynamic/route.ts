// Force dynamic API route to prevent static generation
export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  return Response.json({
    timestamp: new Date().toISOString(),
    message: "This forces dynamic rendering",
    random: Math.random(),
  })
}
