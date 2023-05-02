import Image from 'next/image'
import Head from 'next/head';
import projects from "@/data/projects.json";
import ProjectCard from '@/components/Project/Card';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <section>
          <h1 className='page-title'>Süleyman Kandilci</h1>
          <p className='page-subtitle'>
            I'm a software developer for 10 years. I'm interested in web technologies and I'm trying to improve myself in this field.
          </p>
        </section>
        <div className='divider'></div>
        <section>
          <h2 className='title'>My last projects</h2>
          <p className='text'>
            You can find my last projects on
          </p>
          <div className='row row-cols-lg-2 rows-cols-md-2 row-cols-1'>
            {projects.map((project, index) => {
              return <div key={index} className='col'>
                <ProjectCard data={project} />
              </div>
            })}
          </div>

        </section>
      </main>
    </>
  )
}

Home.Layout = "default";
export default Home;