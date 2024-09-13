
import './styles.css'
import { X } from 'lucide-react'
import { useState } from 'react'

import { formatDistanceToNow } from 'date-fns'
import { ptBR} from 'date-fns/locale'

interface NoteCardProps {
  id: string
  date: Date
  content: string
  handleDeleteNote(id: string): void
}

export default function NoteCard({ id, content, date, handleDeleteNote }: NoteCardProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className='note-card'>
      <button onClick={() => setOpen(true)}>
        <span>{formatDistanceToNow(date, { locale: ptBR, addSuffix: true })}</span>
        <p>{content}</p>

        <div className='gradient-overlay' />
      </button>

      {
        open ? (
          <div
            onClick={() => setOpen(false)}
            className='modal-overlay'>
            <div
              onClick={(e) => e.stopPropagation()}
              className='modal-content'>
              <button
                onClick={() => setOpen(false)}
                className='modal-close'>
                <X />
              </button>
              <form>
                <div>
                  <span>{formatDistanceToNow(date, { locale: ptBR, addSuffix: true })}</span>

                  <p>{content}</p>
                </div>

                <button onClick={() => handleDeleteNote(id)}>
                  deseja <span>apagar essa nota?</span>
                </button>
              </form>
            </div>
          </div>
        ) : null
      }

    </div>
  )
}
