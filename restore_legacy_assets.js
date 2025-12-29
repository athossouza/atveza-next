const ftp = require("basic-ftp");
const path = require("path");

async function restoreLegacy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        console.log("Connecting to lp.atveza.com FTP...");
        await client.access({
            host: "45.132.157.107",
            user: "u242475129.lp.atveza.com",
            password: process.env.FTP_PASSWORD,
            port: 21
        });

        console.log("Connected!");

        // Define path: /wp-content/uploads/2024/02/
        const targetDir = "wp-content/uploads/2024/02";

        console.log(`Ensuring directory exists: ${targetDir}`);
        await client.ensureDir(targetDir);

        console.log("Uploading legacy logo...");
        await client.uploadFrom(
            "public/images/cropped-atveza-logo-03.png",
            "cropped-atveza-logo-03.png"
        );

        console.log("LEGACY ASSET RESTORED SUCCESSFUL!");

    } catch (err) {
        console.error("RESTORE FAILED:", err);
    } finally {
        client.close();
    }
}

restoreLegacy();
