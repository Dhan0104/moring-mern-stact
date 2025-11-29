// import fs from 'fs';




// export const removeFile = (imagePath) => {

// fs.unlinkSync(`./uploads/${imagePath}`, async (err)=> {
//     await isExist.deleteOne();
//     return res.status(200).json({ message: 'Product Deleted Successfully' });
//   });



// }

import fs from "fs";

export const removeFile = (imagePath) => {
  try {
    if (!imagePath) return;

    const fullPath = `./uploads/${imagePath}`;

    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  } catch (err) {
    console.log("Error deleting file:", err.message);
  }
};
