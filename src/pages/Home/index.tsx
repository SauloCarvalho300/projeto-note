import './styles.css'
import { useState } from 'react'
import NewNoteCard from '../../components/NewNoteCard'
import logo from '../../../src/assets/logo.png'
import NoteCard from '../../components/NoteCard'

interface Note {
  id: string
  date: Date
  content: string
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])
  
  function handleSaveNote(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    setNotes((prev) => [...prev, newNote])
  }

  return (

    <div className='container'>
      <img src={logo} alt="Notes" />

      <form>
        <input
          type="text"
          placeholder='Busque em suas notas...'
        />
      </form>

      <div className='separator'></div>

      <div className='cards'>
        <NewNoteCard handleSaveNote={handleSaveNote} />

        {notes.map((note) => (
          <NoteCard
          key={note.id}
          id={note.id}
          date={note.date}
          content={note.content}
          />
        ))}

      </div>
    </div>
  )
}