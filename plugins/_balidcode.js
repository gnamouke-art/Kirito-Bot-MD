// Creado por Deylin, no quites créditos.

const handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, { 
    text: ' ⚠ *Si estás conectado a otra sesión de sub-bot, por favor te recomiendo que te desconectes o no te conectes a este bot. Si estás conectado a dos, tu cuenta podría ser baneada de WhatsApp y además podrían surgir problemas en el sistema del bot.*\n\n*/CODE*\n> Vincula con código de 8 dígitos\n*/QR*\n> vincula con código QR',
    viewOnce: true,
  }, { quoted: m });
};

handler.tags = ['tools'];
handler.help = ['webinfo'];
handler.command = ['serbot'];

export default handler;