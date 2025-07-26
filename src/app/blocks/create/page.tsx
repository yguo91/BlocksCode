import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createBlock } from "@/actions"
import Link from "next/link"

export default function CreateBlockPage() {  
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div>
        <Link href="/" className="text-blue-600 underline">
          ← Back to Home
        </Link>
      </div>
      <form action={createBlock} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Enter a title for your code block" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="code">Code</Label>
          <Textarea id="code" name="code" placeholder="Type your code here..." className="min-h-[200px] font-mono" />
        </div>

        <Button type="submit" className="w-full">
          Create Block
        </Button>
      </form>
    </div>
  )
}