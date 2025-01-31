import axios from "axios";



// export const BaseUrl = "https://api.themoviedb.org/3/";


// export const BearerToken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQxMWVlNzkzNzNhYmU3OWRiNGRiYTNmZjkzYTJkZCIsInN1YiI6IjY2NTAxOTI1YmMyMjhiZWI5MjA2ODU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM9Ycvg4HIOfMbqZ6SzAv7fkC-pPDfRSRw9wpvZqB24";


// const client = axios.create({
//   baseURL: BaseUrl,
// });

// export default client


export default function arrayData(props) {

  const BaseUrl = "https://api.themoviedb.org/3/";

  const endPoint = props

  const BearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQxMWVlNzkzNzNhYmU3OWRiNGRiYTNmZjkzYTJkZCIsInN1YiI6IjY2NTAxOTI1YmMyMjhiZWI5MjA2ODU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM9Ycvg4HIOfMbqZ6SzAv7fkC-pPDfRSRw9wpvZqB24";


  const data = axios.get( BaseUrl + endPoint, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BearerToken}`,
    },
  })
  .then((resp)=> {
    // console.log(resp);
    return resp
  })
  .catch((err) => {
    // console.log(err);
    return err;
  });


  return(data)
}

