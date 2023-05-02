interface Props {
  data: {
    title: string,
    description: string,
    image: string,
  }
}

export default function ProjectCard({ data }: Props) {
  return <div className="card-project">
    <div className="card-project--image">
      <img src={data.image} alt={data.title} />
    </div>
    <div className="card-project--body">
      <h3 className="card-project--title">{data.title}</h3>
    </div>
  </div>
}