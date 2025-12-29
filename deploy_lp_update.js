const ftp = require("basic-ftp");

async function deployLPUpdate() {
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

        console.log("Uploading 'out' to root (overwriting existing files)...");
        // We do NOT clear the directory, preserving the 'wp-content' we just restored.
        await client.uploadFromDir("out", ".");

        console.log("LP UPDATE SUCCESSFUL!");

    } catch (err) {
        console.error("LP UPDATE FAILED:", err);
    } finally {
        client.close();
    }
}

deployLPUpdate();
