import { createCanvas, loadImage } from 'canvas';
import axios from 'axios';
import fs from 'fs';

async function generarLogoImagen(texto, imagenURL, m, conn) {
    try {
        const ancho = 500; 
        const alto = 300; 

        const canvas = createCanvas(ancho, alto);
        const ctx = canvas.getContext('2d');

        const imagen = await loadImage(imagenURL);
        ctx.drawImage(imagen, 0, 0, ancho, alto);

        ctx.font = 'bold 40px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(texto, ancho / 2, alto / 2);

        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync('./temp/logo.png', buffer);

        await conn.sendMessage(m.chat, { 
            image: fs.readFileSync('./temp/logo.png'), 
            caption: `Aquí tienes tu logo con imagen y texto: *${texto}*`
        }, { quoted: m });

    } catch (error) {
        console.error('Error al generar el logo:', error);
        await conn.sendMessage(m.chat, { text: '❌ Error al generar el logo. Intenta de nuevo.' }, { quoted: m });
    }
}

// Handler para el bot
const handler = async (m, { conn, args }) => {
    if (!args || args.length < 2) {
        return conn.sendMessage(m.chat, { 
            text: '❌ Uso incorrecto. Ejemplo: /logopic Kirito-Bot https://imagen.com/kirito.jpg' 
        }, { quoted: m });
    }

    const texto = args.slice(0, -1).join(' ');  
    const imagenURL = args[args.length - 1];  

    await generarLogoImagen(texto, imagenURL, m, conn);
};

handler.help = ['logo'];
handler.tags = ['fun'];
handler.command = ['logop'];

export default handler;