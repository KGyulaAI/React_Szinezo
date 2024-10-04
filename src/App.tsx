import Colors from "./components/Colors"
import Modal from "./components/Modal"

function App() {
  let li = []
  for (let i = 0; i < 100; i++) {
    li.push(i)
  }

  return (
    <>
    <Modal/>
    <div className="maingrid">
    {li.map(idx => <Colors key={idx}/>)}
    </div>
    </>
  )
}

export default App
