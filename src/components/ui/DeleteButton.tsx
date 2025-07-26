"use client";

import { deleteBlock } from "@/actions";
import { Button } from "@/components/ui/button";

type Props = {
  blockId: number;
};

export default function DeleteButton({ blockId }: Props) {
  return (
    <form
      action={deleteBlock}
      onSubmit={(e) => {
        if (!confirm("Are you sure you want to delete this block?")) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={blockId} />
      <Button variant="destructive" type="submit">
        Delete
      </Button>
    </form>
  );
}
