// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getPages from '../../seaboard/helpers/getPages';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pages = getPages();
  
  const searchList: string[] = (req.query.search as unknown as string).split("-")

  //if (search.length > 20)

  let r: Array<{title: string, description: string, slug: string, keywords: string[]}> = []
  pages.map((page) => {
    searchList.map((search) => {
      if (page.slug.toLowerCase().includes(search)) {
        r.push({title: page.data.title, description: page.data.description, slug: page.slug, keywords: page.data.keywords})
       
        
      }
      else if (page.data.keywords) {
        page.data.keywords.map((keyword: string) => {
          if (keyword.toLowerCase().includes(search as unknown as string)) {
            r.push({title: page.data.title, description: page.data.description, slug: page.slug, keywords: page.data.keywords})
            
          }
        })
      }
    })
    
    
  });
  

  res.status(200).json({ success: (r.length != 0), data: removeDupes(r)} )
  
}

function removeDupes(arr: Array<{title: string, description: string, slug: string, keywords: string[]}>) {
  let names: string[] = []
  let r: Array<{title: string, description: string, slug: string, keywords: string[]}>  = []
  arr.map((v) => {
    if (!(names.includes(v.title))) {
      r.push(v)
      names.push(v.title)
    }
    

  })
  return r
}
