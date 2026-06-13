import photo from './assets/profile.jpeg'
import './App.css'

function App () {
  return (
    <div className='Wrapper'>
      <img src={photo} alt='Profile'/>
      <h1>Hi i'm Peniel</h1>

      <div className='github'>
        <a
          href='https://github.com/peniel001'
          target='_blank'
          rel='noopener noreferrer'
        >
          View My GitHub
        </a>
      </div>
    </div>
  )
}
export default App
