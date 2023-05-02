import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    projects: [
      {
        id: 1,
        name: "Project 1",
        description: "This is project 1",
        image: "https://picsum.photos/200/300",
      }
    ]
  })
}
