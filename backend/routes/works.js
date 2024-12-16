const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// Base directory for images (ensure this is correct)
const baseDir = path.join(__dirname, "../captureSites");
const works = [
  {
    id: '1',
    name_site: 'Paolo Dream',
    img_site: 'paolo',
    
    technologie: 'Wordpress , Woocommerce',
    url_site:'https://paolo-dream.com/',
    date_creation:'12/10/2024',
  },
  {
    id: '2',
    name_site: 'ConnectXperts',
    img_site: 'expert',
    
    technologie: 'Angular , NodeJs , ExpressJs , Bootstrap',
    url_site:'https://connectxperts.de/',
    date_creation:'07/09/2024',
  },
  {
    id: '3',
    name_site: 'Le paillaret',
    img_site: 'lepaillaret',
    
    technologie: 'Wordpress',
    url_site:'https://www.lepaillaret.fr/',
    date_creation:'01/09/2024',
  },
  {
    id: '4',
    name_site: 'Aefe liban',
    img_site: 'Aefe',
    
    technologie: 'Wordpress',
    url_site:'https://aefe-liban.fr/',
    date_creation:'14/09/2023',
  },
  {
    id: '5',
    name_site: 'Restaurant lac pavin',
    img_site: 'lac-pavin',
    
    technologie: 'Wordpress',
    url_site:'https://www.restaurant-lac-pavin.fr/',
    date_creation:'20/08/2023',
  },
  {
    id: '6',
    name_site: 'La tour de rochefort',
    img_site: 'latour',
    
    technologie: 'Wordpress',
    url_site:'https://www.latourderochefort.fr/',
    date_creation:'20/08/2023',
  },
  {
    id: '7',
    name_site: 'Jiotify',
    img_site: 'Jiotify',
    
    technologie: 'Wordpress',
    url_site:'https://jiotify.com/',
    date_creation:'12/08/2023',
  },
  {
    id: '8',
    name_site: 'Vttauvergne',
    img_site: 'vtta',
    
    technologie: 'Wordpress',
    url_site:'https://www.vttauvergne.fr/',
    date_creation:'05/08/2023',
  },
  {
    id: '9',
    name_site: 'Lumtec',
    img_site: 'lumtec',
    
    technologie: 'Wordpress',
    url_site:'http://www.lumtec.fr/',
    date_creation:'05/08/2023',
  },
  {
    id: '10',
    name_site: 'Eurep',
    img_site: 'eurep',
    
    technologie: 'Wordpress',
    url_site:'https://www.eurep-sas.fr/',
    date_creation:'16/01/2023',
  },
  {
    id: '11',
    name_site: 'Cl-avocat',
    img_site: 'avocat',
    
    technologie: 'Wordpress',
    url_site:'https://www.cl-avocat.com/',
    date_creation:'22/12/2022',
  },
  {
    id: '12',
    name_site: 'Rent property',
    img_site: 'rent',
    
    technologie: 'HTML , CSS , Bootstarp , PHP native',
    url_site:null,
    date_creation:'10/05/2023',
  },
  {
    id: '13',
    name_site: 'Rouchy',
    img_site: 'rouchy',
    
    technologie: 'Wordpress',
    url_site:'https://www.rouchy.fr/',
    date_creation:'11/11/2023',
  },
];

// Route to get works with dynamic images
router.get("/", (req, res) => {
  const updatedWorks = works.map((work) => {
    const folderPath = path.join(baseDir, work.img_site);
    let images = [];

    // Dynamically read the image files in each folder
    if (fs.existsSync(folderPath)) {
      images = fs
        .readdirSync(folderPath)
        .filter((file) => /\.(png|jpg|jpeg|gif)$/i.test(file)) // Only image files
        .map((file) => `/captureSites/${work.img_site}/${file}`); // Map to accessible paths
    }

    return { ...work, images };
  });

  res.json(updatedWorks);
});

// Route to get a single work by its ID with dynamic images
router.get("/:id", (req, res) => {
  const workId = req.params.id;  // Extract the ID from the URL parameter

  // Find the work matching the provided ID
  const work = works.find((work) => work.id === workId);
  
  if (!work) {
    return res.status(404).json({ message: "Work not found" });  // If no work found, return a 404 error
  }

  const folderPath = path.join(baseDir, work.img_site);
  let images = [];

  // Dynamically read the image files in the corresponding folder
  if (fs.existsSync(folderPath)) {
    images = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(png|jpg|jpeg|gif)$/i.test(file))  // Only image files (png, jpg, etc.)
      .map((file) => `/captureSites/${work.img_site}/${file}`);  // Map to accessible paths
  }

  // Return the work details along with its images
  res.json({ ...work, images });
});


module.exports = router;