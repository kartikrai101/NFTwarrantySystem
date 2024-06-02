import axios from 'axios';
import NextCors from 'nextjs-cors';

async function handler(req, res){
  await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

  if(req.method === 'POST'){
      const data = req.body; // extracting data from the req body
      axios.post(
      "https://flipkart-grid-shub.herokuapp.com/api/v1/flip/auth/adduser",
      {
          name: data.first_name,
          flipkart_id: "21314e3#kr786",
          email: data.email,
          phone: data.contact,
      }
    )
    .then((res) => {
      console.log(res);
    });  
  }
  res.status(201).json({message: "Everything is perfect till here!"})
};

export default handler; 
