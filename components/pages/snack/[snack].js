import { useRouter } from 'next/router'
import { PrismaClient } from "@prisma/client"
import Card from '../../components/card';
import Navbar from '../../components/NavBar';

export default function DrawSnack(props){
    return(
        <>
            <Navbar></Navbar>
        
            <Card key={props.id} snack={props}></Card>
        </>
    )
}

export async function getServerSideProps(context) {
    const router = useRouter();    const prisma = new PrismaClient();

    const { snackId } = router.query;
    const snack = prisma.snack.findUnique({
        where:{
            id: snackId
        }
    });

    return {
      props: {snack}, 
    }
  }

