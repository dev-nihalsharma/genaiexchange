const { hash } =  require("@node-rs/argon2");

async function generate(username,password) {
    const passwordHash = await hash(password, {
        // recommended minimum parameters
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1
    });
    console.log(`Username:${username}\nPassword Hash:${passwordHash}`);
}

generate("admin","test1234")