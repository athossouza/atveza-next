const ftp = require("basic-ftp");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        console.log("Connecting to FTP (atveza.com)...");
        await client.access({
            host: "45.132.157.107",
            user: "u242475129.atveza.com",
            password: process.env.FTP_PASSWORD,
            port: 21
        });

        console.log("Connected!");

        // Ensure we are deploying to the root of the user's home (which seems to be public_html based on previous logs)
        // or explicitly CD to public_html if the user lands in root.
        // In previous successful attempts (Step 1183), it seemed to work fine.
        // Let's list the directory first to be sure where we are.
        console.log("Current Directory:");
        await client.list(".").then(console.log);

        console.log("Uploading 'out' to root '.'...");
        // Use "." to upload to the current working directory.
        await client.uploadFromDir("out", ".");

        console.log("DEPLOYMENT SUCCESSFUL!");

    } catch (err) {
        console.error("DEPLOYMENT FAILED:", err);
    } finally {
        client.close();
    }
}

deploy();
