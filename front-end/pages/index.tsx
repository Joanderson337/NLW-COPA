interface HomeProps {
  count: number;
}


export default function Home({count}: HomeProps) {

  return (
    <div>
      <h1>Hello NEXT</h1>
      <h1>{count}</h1>
    </div>
  )
}


export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()


  return {
    props: {
      count: data.count
    }
  }
}