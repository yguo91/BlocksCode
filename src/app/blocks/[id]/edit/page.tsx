// app/blocks/[id]/edit/page.tsx
import { db } from "@/db";
import { notFound } from "next/navigation";
import { updateBlock } from "@/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CodeEditor from "@/components/ui/CodeEditor";


export default async function EditBlockPageWrapper({ params }: { params: { id: string } }) {
  const rep = await params;
  const id = parseInt(rep.id, 10);
  return <EditBlockPage id={id} />;
}

async function EditBlockPage({ id }: { id: number }) {
  if (isNaN(id)) return notFound();

  const block = await db.block.findUnique({ where: { id } });
  if (!block) return notFound();

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Edit Code Block</h1>

      <form action={updateBlock} className="space-y-4">
        <input type="hidden" name="id" value={block.id} />

        <div>
          <label className="block mb-1 font-medium">Title</label>
          <Input type="text" name="title" defaultValue={block.title} required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Code</label>
          <CodeEditor defaultCode={block.code} />
        </div>

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}