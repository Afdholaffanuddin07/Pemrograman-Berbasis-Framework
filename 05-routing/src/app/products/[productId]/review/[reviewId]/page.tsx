type Props = {
    params: {
          reviewId: string
    }
  }
  
  export default function ReviewDetails({ params }: Props) {
    return (
          <h1>blog ke  {params.reviewId}</h1>
    )
  }