const ftp = require("basic-ftp");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        await client.access({
            host: "45.132.157.107",
            user: "u242475129.consultoriacx.com.br",
            password: process.env.FTP_PASSWORD,
            port: 21
        });
        console.log("Connected!");

        let currentPath = await client.pwd();
        if (currentPath !== "/public_html" && !currentPath.endsWith("/public_html")) {
            try {
                await client.cd("public_html");
            } catch (e) {
                console.log("Could not cd to public_html. Assuming root.");
            }
        }

        // ENABLED CLEANING for this specific target as requested
        console.log("Cleaning remote directory...");
        await client.clearWorkingDir();
        console.log("Directory cleaned.");

        console.log("Uploading 'out' to '.'...");
        await client.uploadFromDir("out", ".");

        console.log("✅ SUCCESS: consultoriacx.com.br");
    } catch (err) {
        console.error("❌ FAILED:", err);
    }
    client.close();
}

deploy();
