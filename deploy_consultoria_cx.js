const ftp = require("basic-ftp");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        console.log("Connecting to FTP (consultoria.cx)...");
        await client.access({
            host: "45.132.157.107",
            user: "u242475129.consultoria.cx",
            password: process.env.FTP_PASSWORD,
            port: 21
        });

        console.log("Connected!");

        // Try to navigate to public_html, if it exists
        try {
            await client.cd("public_html");
            console.log("Navigated to public_html");
        } catch (e) {
            console.log("Could not cd to public_html (maybe already there or doesn't exist), staying in root.");
        }

        console.log("Current Directory:");
        await client.list(".").then(console.log);

        console.log("Cleaning remote directory...");
        await client.clearWorkingDir();
        console.log("Directory cleaned.");

        console.log("Uploading 'out' to '.'...");
        await client.uploadFromDir("out", ".");

        console.log("DEPLOYMENT SUCCESSFUL!");

    } catch (err) {
        console.error("DEPLOYMENT FAILED:", err);
    } finally {
        client.close();
    }
}

deploy();
