import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {PrismaClient} from '@prisma/client';




export async function getServerSideProps() {
const prisma = new PrismaClient();

const player = await prisma.contact.create({
  data: {
    name: "hi"
  }
})
  const contacts = await prisma.contact.findMany();
  return {
    props: {
      initialContacts: contacts
    }
  };
}

export default function Home({initialContacts}:any) {
  console.log(initialContacts)
  return (
    <div className="h-screen w-screen flex flex-col">
      <div>
        LLLL
        {/* <div>{...initialContacts}</div> */}
      </div>
    </div>
  )
}