import { db } from '@/lib/db';
import { $notes } from '@/lib/db/schema';
import { auth } from '@clerk/nextjs/server';
import { eq, and } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
    params: {
        noteId: string
    };
};

const NoteBookPage = async ({ params: { noteId } }: Props) => {

    const { userId } = await auth();

    if (!userId) {
        return redirect("/dashboard");
    }

    const notes = await db.select().from($notes).where(
        and(
            eq($notes.id, parseInt(noteId)),
            eq($notes.userId, userId),

        ));
    if(notes.length != 1){
        return redirect("/dashboard")
    }
    return <pre>{JSON.stringify(notes[0], null, 2)}</pre>
    

}

export default NoteBookPage;