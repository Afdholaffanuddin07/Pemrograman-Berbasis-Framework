type Props = {
    params: {
          blogId: string
    }
  }
  
  export default function BlogDetails({ params }: Props) {
    return (
          <h1>blog ke  {params.blogId}</h1>
    )
  }