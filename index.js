import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs'; //regular
import fsp from 'fs/promises'; //promise based


inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'))

    fsp.writeFile('Url.txt', url)
      .then(()=> console.log ('The file has been saved!'))
      .catch((err) => {throw err});
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });

