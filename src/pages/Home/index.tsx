import './styles.css'
import { useState } from 'react'
import NewNoteCard from '../../components/NewNoteCard'
import logo from '../../../src/assets/logo.png'
import NoteCard from '../../components/NoteCard'
import { toast } from 'sonner'

interface Note {
  id: string
  date: Date
  content: string
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')

    if (notesOnStorage)
      return JSON.parse(notesOnStorage)

    return []
  })

  
  function handleSaveNote(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const noteArray = [...notes, newNote]

    setNotes(noteArray)

    localStorage.setItem('notes', JSON.stringify(noteArray))

    toast.success('Nota criada com sucesso.')
  }

  function handleDeleteNote(id: string) {
    const newArray = notes.filter((note) => note.id !== id)

    setNotes(newArray)

    localStorage.setItem('notes', JSON.stringify(newArray))

    toast.success('Nota deletada com sucesso.')
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
          handleDeleteNote={handleDeleteNote}
          />
        ))}

      </div>
    </div>
  )
}