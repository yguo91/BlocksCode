import { db } from "@/db"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Plus } from "lucide-react"

export default async function Home() {
  const blocks = await db.block.findMany();
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Code Blocks</h1>
          <p className="text-muted-foreground mt-2">Manage and organize your code snippets</p>
        </div>
        <Button asChild>
          <Link href="/blocks/create">
            <Plus className="w-4 h-4 mr-2" />
            Create Block
          </Link>
        </Button>
      </div>

      {/* Blocks Grid */}
      {blocks.length === 0 ? (
        <div className="text-center py-12">
          <Code2 className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No code blocks yet</h3>
          <p className="text-muted-foreground mb-4">Get started by creating your first code block</p>
          <Button asChild>
            <Link href="/blocks/create">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Block
            </Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {blocks.map((block) => (
            <Card key={block.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code2 className="w-4 h-4" />
                  <Link href={`/blocks/${block.id}`} className="hover:underline truncate">
                    {block.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-md p-3 mb-3">
                  <code className="text-sm text-muted-foreground line-clamp-3">
                    {block.code.slice(0, 100)}
                    {block.code.length > 100 && "..."}
                  </code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
