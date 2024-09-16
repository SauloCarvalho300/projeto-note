import { FormEvent, useState, useRef } from 'react'
import { toast } from 'sonner'

import './styles.css'

import { X } from 'lucide-react'
import NoteCard from '../NoteCard'

interface NewNoteCardProps {
  handleSaveNote(content: string): void
}

export default function NewNoteCard({ handleSaveNote }: NewNoteCardProps) {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<string>('')

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!content) {
      return toast.error('O conteúdo não pode estar vazio.')
    }

    handleSaveNote(content)

    setContent('')
    textareaRef.current?.focus()
  }

  return (
    <div className='new-note-card'>
      <button onClick={() => setOpen(true)}>
        <span>Adicionar Nota</span>
        <p>Crie uma nota para lembrete, lista de compras, tarefas e muito mais.</p>
      </button>

      {
        open ? (
          <div onClick={() => setOpen(false)} className='modal-overlay'>
             <div onClick={(e) => e.stopPropagation()} className='modal-content'> {/* onClick={(e) => e.stopPropagation()} Para a propagação do click */}
              <button onClick={() => setOpen(false)} className='modal-close'>
                <X  />
              </button>

              <form onSubmit={handleSubmit}>
                <div>
                  <span>Adicionar nota</span>
                  <textarea ref={textareaRef} value={content} onChange={(e) => setContent(e.target.value)} autoFocus></textarea>
                </div>
                <button type='submit'>Salvar essa nota</button>
              </form>
            </div>
          </div>
        ) : null
      }

    </div>
  )
}