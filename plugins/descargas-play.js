
import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `${emoji} Por favor ingresa la música que deseás descargar.`;

  const isVideo = /vid|2|mp4|v$/.test(command);
  const search = await yts(text);

  if (!search.all || search.all.length === 0) {
    throw "No se encontraron resultados para tu búsqueda.";
  }

  const videoInfo = search.all[0];
  const body = `「✦」ძᥱsᥴᥲrgᥲᥒძ᥆ *<${videoInfo.title}>*\n\n> ✦ ᥴᥲᥒᥲᥣ » *${videoInfo.author.name || 'Desconocido'}*\n*◆━━━━━━◆✰◆━━━━━━◆*\n> ✰ ᥎іs𝗍ᥲs » *${videoInfo.views}*\n*◆━━━━━━◆✰◆━━━━━━◆*\n> ⴵ ძᥙrᥲᥴі᥆ᥒ » *${videoInfo.timestamp}*\n*◆━━━━━━◆✰◆━━━━━━◆*\n> ✐ ⍴ᥙᑲᥣіᥴᥲძ᥆ » *${videoInfo.ago}*\n*◆━━━━━━◆✰◆━━━━━━◆*\n> 🜸 ᥣіᥒk » ${videoInfo.url}\n`;
  
  if (Object.keys(global.play).length >= 100) global.play = {};
  
    if (command === 'play' || command === 'play2' || command === 'playvid') {
      let msg = await conn.sendMessage(m.chat, {
      image: { url: videoInfo.thumbnail },
      caption: body,
      footer: dev,
      buttons: [
        {
          buttonId: `.udiv ${videoInfo.url}`,
          buttonText: {
            displayText: '⏤͟͟͞͞👑 𝑨𝒖𝒅𝒊𝒐',
          },
        },
        {
          buttonId: `.vids ${videoInfo.url}`,
          buttonText: {
            displayText: '⏤͟͟͞͞🔥  𝑽𝒊𝒅𝒆𝒐',
          },
        },
      ],
      viewOnce: true,
      headerType: 4,
    }, { quoted: fkontak });
    m.react('🕒');
    
    global.play[msg.key.id] = { url: videoInfo.url };

    } else if (command === 'yta' || command === 'ytmp3') {
    m.react(rwait)
      let audio = await (await fetch(`https://api.alyachan.dev/api/youtube?url=${videoInfo.url}&type=mp3&apikey=Gata-Dios`)).json()
      
      conn.sendFile(m.chat, audio.data.url, videoInfo.title, '', m, null, { mimetype: "audio/mpeg", asDocument: false })
    m.react(done)
    } else if (command === 'ytv' || command === 'ytmp4') {
    m.react(rwait)
      let video = await (await fetch(`https://api.alyachan.dev/api/youtube?url=${videoInfo.url}&type=mp4&apikey=Gata-Dios`)).json()
    await conn.sendMessage(m.chat, {
      video: { url: video.data.url },
      mimetype: "video/mp4",
      caption: ``,
    }, { quoted: m });
    m.react(done)
    } else {
      throw "Comando no reconocido.";
    }
};

handler.help = ['play', 'playvid', 'ytv',  'yta', 'play2',];
handler.command = ['play4', 'playvid', 'ytv',  'yta', 'play23',];
handler.tags = ['dl'];
handler.group = true;
handler.register = true;

export default handler;

const getVideoId = (url) => {
  const regex = /(?:v=|\/)([0-9A-Za-z_-]{11}).;
  const match = url.match(regex);
  if (match) {
    return match[1];
  }
  throw new Error("Invalid YouTube URL");
};*/