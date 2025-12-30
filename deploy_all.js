const ftp = require("basic-ftp");
const { execSync } = require("child_process");

// 1. Define Deployment Targets & Variants
// Maps each domain to a specific SEO variant defined in lib/seo-config.ts
const targets = [
    // Default Variant (ATVEZA)
    { user: "u242475129.atveza.com", name: "atveza.com", variant: "default" },
    { user: "u242475129.lp.atveza.com", name: "lp.atveza.com", variant: "default" },

    // Personal Brand (Athos Alves)
    { user: "u242475129.athos.cx", name: "athos.cx", variant: "personal" },
    { user: "u242475129.athossouza.com.br", name: "athossouza.com.br", variant: "personal" },

    // Service Specific
    { user: "u242475129.consultoria.cx", name: "consultoria.cx", variant: "consultoria" },
    { user: "u242475129.consultoriacx.com.br", name: "consultoriacx.com.br", variant: "consultoria" }, // New Target
    { user: "u242475129.consultor.cx", name: "consultor.cx", variant: "consultor" },
    { user: "u242475129.consultorcx.com.br", name: "consultorcx.com.br", variant: "consultor" }, // New Target
    { user: "u242475129.clientfy.cx", name: "clientfy.cx", variant: "clientfy" },
    { user: "u242475129.mentoria.cx", name: "mentoria.cx", variant: "mentoria" },
    { user: "u242475129.mentorcx.com.br", name: "mentorcx.com.br", variant: "mentoria" }, // New Target
];

async function deployTarget(client, target) {
    console.log(`\n========================================`);
    console.log(`🚀 Starting Deployment for: ${target.name} (Variant: ${target.variant})`);
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

        let currentPath = await client.pwd();
        // console.log(`Current path on login: ${currentPath}`);

        if (currentPath !== "/public_html" && !currentPath.endsWith("/public_html")) {
            try {
                await client.cd("public_html");
                // console.log("Navigated to public_html");
            } catch (e) {
                console.log("Could not cd to public_html. Assuming root.");
            }
        }

        // console.log("Cleaning remote directory...");
        // await client.clearWorkingDir();
        // console.log("Directory cleaned.");

        console.log("Uploading 'out' to '.'...");
        await client.uploadFromDir("out", ".");

        console.log(`✅ SUCCESS: ${target.name}`);

    } catch (err) {
        console.error(`❌ FAILED: ${target.name}`, err);
    }
}

async function deployAll() {
    const client = new ftp.Client();
    client.ftp.verbose = false; // Less noise

    // 2. Group Targets by Variant to minimize Builds
    // We want to build ONCE for "personal", then deploy to both athos.cx and athossouza.com.br
    const variants = [...new Set(targets.map(t => t.variant))];

    console.log(`📋 Found ${variants.length} unique variants to build: ${variants.join(", ")}\n`);

    for (const variant of variants) {
        console.log(`\n🔨 BUILDING VARIANT: [${variant.toUpperCase()}]`);
        console.log(`-----------------------------------`);

        try {
            // Run build with specific env var
            execSync(`NEXT_PUBLIC_SITE_VARIANT=${variant} npm run build`, { stdio: 'inherit' });
            console.log(`✅ Build complete for ${variant}.`);
        } catch (error) {
            console.error(`❌ Build failed for variant ${variant}. Stopping.`);
            process.exit(1);
        }

        // Find all targets that use this variant
        const variantTargets = targets.filter(t => t.variant === variant);

        for (const target of variantTargets) {
            await deployTarget(client, target);
        }
    }

    client.close();
    console.log("\n🏁 All deployments completed.");
}

deployAll();
