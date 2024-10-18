const Animals = () => {
    const allatok = ["kutya", "macska", "ló", "kecske", "kacsa"]
  return (
    <>
        { allatok.map(allat => <h1>{allat}</h1>) }
        { allatok.map((allat, idx) => <h1>{idx}.{allat}</h1>) }
        { allatok.map((allat, idx, array) => <h1>{idx+1} / {array.length} {allat}</h1>) }
    </>
  )
}

export default Animals