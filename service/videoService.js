const instagramGetUrl = require("../config/instagramGetUrl");

// const ufileName = require("unique-filename");
// const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
// const ffmpeg = require("fluent-ffmpeg");
// ffmpeg.setFfmpegPath(ffmpegPath);
// const path = require('path');
// const fs = require('fs')
// const https = require("https");

const videoService = async (req, res)=>{

    // const videoUrl =  req.query.url

    const videoUrl = "https://www.instagram.com/reel/Ci8N8rEDQvL/"
    
    try {
        const igvideoUrl = await instagramGetUrl(videoUrl)
    console.log(igvideoUrl, "igvideoUrl");
    res.status(200).json(igvideoUrl)
    } catch (error) {
        res.send(error)
    }
//     const igReelUrl = igvideoUrl.url_list[0]

//     console.log(igReelUrl, "igReelUrl");

//     // take a screenshort of the downloded video 

//     const localPath = ufileName("/data", "igreel"); 

//     console.log(localPath, "localPath");

//   // download the video from URL

//     https.get(igReelUrl, localPath, (res) => {

//     const mp4filePath = "data" + localPath.slice(5) + ".mp4"

//     console.log(mp4filePath, "mp4filePath");

//     const writeStream = fs.createWriteStream(mp4filePath);
 
//     res.pipe(writeStream);
 
//     writeStream.on("finish", () => {
//        writeStream.close();
//        console.log("Download Completed!");
//     })

//     // take a screenshort of the downloded video 

//     console.log("taking a screenshort....");

//     new ffmpeg(igReelUrl).takeScreenshots({
//       filename: localPath,
//       count: 1,
//       timemarks: ["1"],
//       size: "3150x?"
//       });

//       console.log("screenshort taken")

//       console.log(localPath, "localPath");

//   })

//     const mp4filePath = localPath.slice(7) + ".mp4"

//     const reelfilePath = mp4filePath.toString()

//     console.log(reelfilePath, "reelfilePath");

//     const thFilePath = localPath.slice(7) + ".png"

//     const pngfilePath = thFilePath.toString()

//     console.log(pngfilePath, "pngfilePath");

//     res.json({ igReelUrl: igReelUrl, thName: pngfilePath, reelName: reelfilePath})
}

module.exports = {videoService}