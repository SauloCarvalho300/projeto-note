import './styles.css'

import NewNoteCard from '../../components/NewNoteCard'

import logo from '../../../src/assets/logo.png'
import NoteCard from '../../components/NoteCard'

export default function Home() {
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
        <NewNoteCard />

        <NoteCard />
        <NoteCard />
      </div>
    </div>
  )
}