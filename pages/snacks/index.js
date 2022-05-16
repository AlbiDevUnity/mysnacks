import Card from '../../components/card';
import Navbar from '../../components/NavBar';

export default function Snack(props){
    return(
        <>
            <Navbar></Navbar>
            <div class="card-group">
            {props.snacks.map((snack) =>(
                <Card key={snack.id} snack={snack}></Card>
            ))}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    
    const data = await fetch(process.env.DEV_URL+ '/api/snacks');

    const snacks = await data.json();
    return {
      props: {snacks},
    }
  }

