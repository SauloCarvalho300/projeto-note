
import './styles.css'
import { X } from 'lucide-react'
import { useState } from 'react'

interface NoteCardProps {
  id: string
  date: Date
  content: string
}

export default function NoteCard({ id, content, date }: NoteCardProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className='note-card'>
      <button onClick={() => setOpen(true)}>
        <span>{date.toDateString()}</span>
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
                  <span>Adicionar nota</span>

                  <p>Texto de um exemplo  que criei para aparecer aqui</p>
                </div>

                <button>
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
