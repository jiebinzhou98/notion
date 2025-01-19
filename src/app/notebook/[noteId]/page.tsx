import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { clerk } from '@/lib/db/clerk-server';
import { $notes } from '@/lib/db/schema';
import { auth } from '@clerk/nextjs/server';
import { eq, and } from 'drizzle-orm';
import { Link } from 'lucide-react';
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

    const user = await clerk.users.getUser(userId);

    const notes = await db.select().from($notes).where(
        and(
            eq($notes.id, parseInt(noteId)),
            eq($notes.userId, userId),

        ));
    if(notes.length != 1){
        return redirect("/dashboard")
    }
    const note = notes[0];

    return (
        <div className='min-h-screen grainy p-8'>
            <div className='max-w-4xl max-auto'>
                <div className='board shadow-xl boarder-stone-200 rounded -lg p-4 flex items-center'>
                    <Link href='/dashboard'>
                        <Button className='bg-green-600' size={'sm'}>
                            Back
                        </Button>
                    </Link>
                        <div className='w-3'></div>
                        <span className='font-semibold'>
                            {user.firstName} {user.lastName}
                        </span>
                        <span className='inline-block mx-1'>/</span>
                        <span className='text-stone-500 font-semibold'>{note.name}</span>
                </div>  
            </div>
        </div>
    )
    

}

export default NoteBookPage;