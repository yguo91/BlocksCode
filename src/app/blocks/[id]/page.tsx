import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/ui/DeleteButton"; // <- import self-defined DeleteButton component

type ShowBlockProps = {
  params: { id: string };
};

export default async function ShowBlock({ params }: ShowBlockProps) {
  const rep = await params;
  const id = Number(rep.id);
  const block = await db.block.findUnique({ where: { id } });

  if (!block) return notFound();

  return (
    <div className="max-w-2xl mx-auto space-y-6 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{block.title}</h1>
        <Link href="/" className="text-blue-500 underline">← Back to Home</Link>
      </div>

      <pre className="bg-gray-100 p-4 rounded border">{block.code}</pre>

      <div className="flex gap-4">
        <Link href={`/blocks/${block.id}/edit`}>
          <Button>Edit</Button>
        </Link>

        <DeleteButton blockId={block.id} />
      </div>
    </div>
  );
}
