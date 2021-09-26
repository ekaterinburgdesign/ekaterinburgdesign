import { getNotionDatabaseItems } from '../../lib/notion'

import Layout from '../../components/Layout'
import Head from 'next/head'
import Image from 'next/image'

export default function Partners({ partners }) {
  return (
    <Layout>
      <Head>
        <title>Партнеры</title>
      </Head>
      {partners.map(({ link, name, image, description }) =>
        <div key={name} style={{ marginBottom: 20 }}>
          <a href={link} target="_blank">
            <Image src={image} alt="" style={{ backgroundColor: 'black' }} width={100} height={100} />
            {name}
          </a>
          <div>{description}</div>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  return { props: { partners: await getNotionDatabaseItems('Partners') } }
}