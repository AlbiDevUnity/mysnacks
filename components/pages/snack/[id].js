import { PrismaClient } from "@prisma/client"
import Card from '../../components/card';
import Navbar from '../../components/NavBar';
import DefaultErrorPage from 'next/error'

export default function Snack(props){


    if(!props.snack) {
        return <>
          <Navbar></Navbar>

          <DefaultErrorPage statusCode={404} />
        </>
      }

    return(
        <>
            <Navbar></Navbar>
        
            <Card key={props.snack.id} snack={props.snack}></Card>
        </>
    )
}

export async function getServerSideProps(context) {
    const prisma = new PrismaClient();
    
    const { id } = context.params;
    const snack = await prisma.snack.findUnique({
        where:{
            id: id
        }
    });

    return {
      props: {snack}, 
    }
  }

