const ftp = require("basic-ftp");

const targets = [
    { user: "u242475129.atveza.com", name: "atveza.com" },
    { user: "u242475129.lp.atveza.com", name: "lp.atveza.com" },
    { user: "u242475129.athos.cx", name: "athos.cx" },
    { user: "u242475129.consultoria.cx", name: "consultoria.cx" },
    { user: "u242475129.consultor.cx", name: "consultor.cx" },
    { user: "u242475129.clientfy.cx", name: "clientfy.cx" },
    { user: "u242475129.mentoria.cx", name: "mentoria.cx" },
    { user: "u242475129.athossouza.com.br", name: "athossouza.com.br" }
];

async function deployTarget(client, target) {
    console.log(`\n========================================`);
    console.log(`🚀 Starting Deployment for: ${target.name}`);
    console.log(`========================================`);

    try {
        console.log(`Connecting as ${target.user}...`);
        await client.access({
            host: "45.132.157.107",
            user: target.user,
            password: process.env.FTP_PASSWORD,
            port: 21
        });
        console.log("Connected!");

        // Consolidated logic: Try to enter public_html
        // Some users start in /, some in /public_html. 
        // We want to be in public_html to clean and upload.

        let currentPath = await client.pwd();
        console.log(`Current path on login: ${currentPath}`);

        if (currentPath !== "/public_html" && !currentPath.endsWith("/public_html")) {
            try {
                await client.cd("public_html");
                console.log("Navigated to public_html");
            } catch (e) {
                console.log("Could not cd to public_html (maybe it does not exist as subdirectory). Assuming we are in the right place.");
            }
        } else {
            console.log("Already in public_html.");
        }

        console.log("Cleaning remote directory...");
        await client.clearWorkingDir();
        console.log("Directory cleaned.");

        console.log("Uploading 'out' to '.'...");
        await client.uploadFromDir("out", ".");

        console.log(`✅ SUCCESS: ${target.name}`);

    } catch (err) {
        console.error(`❌ FAILED: ${target.name}`, err);
    }
}

async function deployAll() {
    const client = new ftp.Client();
    client.ftp.verbose = true; // Set to false to reduce noise if preferred, but good for debugging

    for (const target of targets) {
        await deployTarget(client, target);
        // client.access() automatically closes previous connection if open, 
        // but explicit close/reopen is safer/cleaner logic sometimes.
        // basic-ftp handles reuse well though.
    }

    client.close();
    console.log("\n🏁 All deployments completed.");
}

deployAll();
