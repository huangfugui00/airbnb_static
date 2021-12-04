import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    
    const { id,name } = req.query

    res.status(200).json({message:`your post id is ${id} your name ${name}`})
}
