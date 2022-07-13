export default function removeDupes(arr: Array<{title: string, description: string, slug: string, keywords: string[]}>) {
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