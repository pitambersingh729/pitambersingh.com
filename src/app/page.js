import Homepage from './Homepage/Homepage'

export default function Home() {
  console.log(process.env.NODE_ENV)
  return (
    <>
      {
        process.env.NODE_ENV == "development"?
        <h1>You are on development mode</h1>
        : <h1>You are on production mode</h1>
      }
      <Homepage />
    </>
  )
}
