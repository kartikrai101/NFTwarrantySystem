import axios from 'axios';
import NextCors from 'nextjs-cors';
const { Metaplex, irysStorage, toMetaplexFile, keypairIdentity } = require("@metaplex-foundation/js");
const { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL } = require("@solana/web3.js");

const main = async (donationData) => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const metaplex = Metaplex.make(connection);
    const pr = [243, 113, 150, 28, 17, 250, 47, 13, 251, 176, 218, 188, 242, 97, 179, 39, 141, 165, 224, 60, 58, 165, 18, 129, 142, 29, 15, 33, 255, 54, 235, 224, 255, 152, 202, 100, 3, 63, 133, 57, 174, 102, 143, 188, 86, 162, 165, 44, 185, 20, 222, 165, 227, 135, 150, 197, 86, 154, 77, 15, 130, 61, 117, 4];
    const wallet = Keypair.fromSecretKey(new Uint8Array(pr));

    metaplex.use(keypairIdentity(wallet));
    metaplex.use(irysStorage({
        address: 'https://devnet.irys.xyz',
        providerUrl: 'https://api.devnet.solana.com',
        timeout: 60000,
    }));
    console.log("wallet", wallet.publicKey.toBase58());
    console.log("balance", await connection.getBalance(wallet.publicKey));

    const { uri } = await metaplex.nfts().uploadMetadata({
        name: `NFT Digital Warranty System`,
        attributes: [
            {
                trait_type: "First Name",
                value: donationData.first_name
            },
            {
                trait_type: "Last Name",
                value: donationData.last_name
            },
            {
                trait_type: "Email Address",
                value: donationData.email
            },
            {
                trait_type: "Contact Number",
                value: donationData.contact
            }
        ],
        description: "This is a transfer authorised by NFT Digital",
        image: "https://arweave.net/zRzXcV4jsD_-7yUWLA6NcTUhv_CwhBL3MusrI1d97ik",
        symbol: "NFTdigital",
    });

    console.log("uri", uri);

    const { nft } = await metaplex.nfts().create({
        uri,
        name: `NFT Digital Warranty System`,
        description: "This is a transfer authorised by NFT Digital",
        image: "https://av3tgtfdokzx7ofkgjgn3bnjtqfymypaeldxckxsv5pozt4no72a.arweave.net/BXczTKNys3-4qjJM3YWpnAuGYeAix3Eq8q9e7M-Nd_Q",
        symbol: "NFTdigital",
        sellerFeeBasisPoints: 500,
    },
        { commitment: "finalized" }
    );

    console.log("nft", nft, "\n\n");

    console.log(nft.mint.address.toBase58());

    donationData.blockchainToken = nft.mint.address.toBase58();
    return donationData;
}

async function handler(req, res){
  await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

  if(req.method === 'POST'){
      const data = req.body; // extracting data from the req body
      const resp = await main(data)
      console.log(resp)
  }
  res.status(201).json({message: "Everything is perfect till here!"})
};

export default handler; 
