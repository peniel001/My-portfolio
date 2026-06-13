import photo from './assets/profile.jpeg'

function App () {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px'
      }}
    >
      <img
        src={photo}
        alt='Profile'
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%', // Makes the image round
          objectFit: 'cover', // Prevents stretching
          border: '4px solid white',
          backgroundColor: '#000000' // Optional: adds a background color around the image
        }}
      />
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
