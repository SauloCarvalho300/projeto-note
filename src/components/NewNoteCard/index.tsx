import { useState } from 'react'

import './styles.css'

import { X } from 'lucide-react'

export default function NewNoteCard() {
  const [open, setOpen] = useState(false)

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
              <form>
                <div>
                  <span>Adicionar nota</span>
                  <textarea autoFocus></textarea>
                </div>
                <button>Salvar essa nota</button>
              </form>
            </div>
          </div>
        ) : null
      }

    </div>
  )
}