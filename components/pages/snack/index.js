import { PrismaClient } from "@prisma/client"
import Card from '../../components/card';
import Navbar from '../../components/NavBar';

export default function Snack(props){
    console.log(props);
    return(
        <>
            <Navbar></Navbar>
            <div class="card-group">
            {props.snack.map((snack) =>(
                <Card key={snack.id} snack={snack}></Card>
            ))}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const prisma = new PrismaClient();
    
    const snack = await prisma.snack.findMany();
    return {
      props: {snack}, 
    }
  }

