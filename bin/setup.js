// bin/setup.js
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const filesToReplace = [
    'package.json',
    'package-lock.json',
    'README.md',
];

rl.question('Masukkan nama project baru: ', (projectName) => {
    if (!projectName.trim()) {
        console.log('Nama project tidak boleh kosong!');
        rl.close();
        process.exit(1);
    }

    const formattedName = projectName.toLowerCase().replace(/\s+/g, '-');
    console.log(`\nStarting setup untuk project: ${formattedName}...`);

    filesToReplace.forEach(file => {
        const filePath = path.join(__dirname, '..', file);
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            content = content.replace(/{{PROJECT_NAME}}/g, formattedName);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✓ Updated: ${file}`);
        }
    });

    try {
        console.log('\nResetting Git repository...');
        const gitFolder = path.join(__dirname, '..', '.git');
        if (fs.existsSync(gitFolder)) {
            fs.rmSync(gitFolder, { recursive: true, force: true });
        }
        execSync('git init', { stdio: 'inherit' });
        console.log('✓ Git repository re-initialized.');
    } catch (error) {
        console.warn('⚠ Gagal mereset git:', error.message);
    }

    try {
        fs.unlinkSync(__filename);
        const binFolder = path.dirname(__filename);
        if (fs.readdirSync(binFolder).length === 0) {
            fs.rmdirSync(binFolder);
        }
        console.log('✓ Setup script removed.');
    } catch (err) {
        console.warn('⚠ Gagal membersihkan setup script:', err.message);
    }

    console.log('\n🎉 Setup selesai! Happy coding!\n');
    rl.close();
});
