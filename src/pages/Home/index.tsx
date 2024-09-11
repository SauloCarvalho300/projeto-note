import './styles.css'

import NewNoteCard from '../../components/NewNoteCard'

import logo from '../../../src/assets/logo.png'

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
      </div>
    </div>
  )
}