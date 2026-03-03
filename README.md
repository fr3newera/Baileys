@fr3newera/baileys
<p align="center">
<img src="https://www.google.com/search?q=https://img.shields.io/npm/v/%40fr3newera/baileys%3Fstyle%3Dfor-the-badge" alt="npm version">
<img src="https://www.google.com/search?q=https://img.shields.io/npm/dt/%40fr3newera/baileys%3Fstyle%3Dfor-the-badge" alt="downloads">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/License-MIT-yellow.svg%3Fstyle%3Dfor-the-badge" alt="license">
</p>
<p align="center">
<video width="600" controls>
<source src="https://files.catbox.moe/1xh4qz.mp4" type="video/mp4">
Browser kamu tidak mendukung pemutaran video.
</video>
</p>
WhatsApp Baileys is an open-source library designed to help developers build automation solutions and integrations with WhatsApp efficiently and directly. Using websocket technology without the need for a browser, this library supports a wide range of features such as message management, chat handling, group administration, as well as interactive messages and action buttons for a more dynamic user experience.
Table of Contents
 * Installation
 * Quick Start
 * Main Features
 * Add Function
 * SendMessage Documentation
   * Status Group V2
   * Album Message
   * Event Message
   * Interactive Messages
 * To Buy Coffee
 * Contact Developer
Installation
Install the package using npm:
npm install @fr3newera/baileys

Or using yarn:
yarn add @fr3newera/baileys

Quick Start
Here is a basic example of how to connect to WhatsApp:
import { makeWASocket, useMultiFileAuthState, DisconnectReason } from '@fr3newera/baileys';
import { Boom } from '@hapi/boom';

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
    
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        browser: ["fr3newera", "Safari", "3.0"]
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if(connection === 'close') {
            const shouldReconnect = (lastDisconnect.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect);
            if(shouldReconnect) {
                connectToWhatsApp();
            }
        } else if(connection === 'open') {
            console.log('opened connection');
        }
    });
}

connectToWhatsApp();

Main Features and Advantages
 * Enhanced Pairing: Supports automatic and custom pairing processes with high stability.
 * Interactive UI: Full support for interactive messages, action buttons, and native flow.
 * Optimized Performance: Lightweight and modular design for fast execution.
 * Session Management: Efficient automatic session handling to prevent frequent disconnections.
 * Latest Tech: Compatible with the latest multi-device features from WhatsApp.
Add Function ( Simple code )
Check ID Channel
Get ID channel
await sock.newsletterId(url)

Check banned number
You can see the status of blocked numbers here
await sock.checkWhatsApp(jid)

SendMessage Documentation
Status Group Message V2
await sock.sendMessage(jid, {
     groupStatusMessage: {
          text: "Hello World"
     }
});

Album Message (Multiple Images)
await sock.sendMessage(jid, { 
    albumMessage: [
        { image: { url: "IMAGE_URL_1" }, caption: "Foto pertama" },
        { image: { url: "IMAGE_URL_2" }, caption: "Foto kedua" }
    ] 
}, { quoted: m });

Event Message
await sock.sendMessage(jid, { 
    eventMessage: { 
        isCanceled: false, 
        name: "Hello World", 
        description: "fr3 native", 
        location: { 
            degreesLatitude: 0, 
            degreesLongitude: 0, 
            name: "rowrrrr" 
        }, 
        joinLink: "[https://call.whatsapp.com/video/fr3newera](https://call.whatsapp.com/video/fr3newera)", 
        startTime: "1763019000", 
        endTime: "1763026200", 
        extraGuestsAllowed: false 
    } 
}, { quoted: m });

Interactive Message with Native Flow
await sock.sendMessage(jid, {    
    interactiveMessage: {      
        header: "Hello World",
        title: "Hello World",      
        footer: "telegram: @fr3newera",      
        image: { url: "[https://example.com/image.jpg](https://example.com/image.jpg)" },      
        nativeFlowMessage: {        
            messageParamsJson: JSON.stringify({          
                limited_time_offer: {            
                    text: "Special Offer",            
                    url: "[https://t.me/fr3newera](https://t.me/fr3newera)",            
                    copy_code: "fr3",            
                    expiration_time: Date.now() + 86400000          
                }
            }),        
            buttons: [          
                {            
                    name: "cta_copy",            
                    buttonParamsJson: JSON.stringify({              
                        display_text: "copy code",              
                        id: "123456789",              
                        copy_code: "ABC123XYZ"            
                    })          
                }        
            ]      
        }    
    }  
}, { quoted: m });

To Buy Coffee
Jika library ini membantu Anda, Anda bisa memberikan dukungan melalui donasi di bawah ini:
<p align="left">
<img src="https://www.google.com/url?sa=E&source=gmail&q=https://files.catbox.moe/your_qr_image_here.png" width="200" alt="QR Payment">


<i>Scan QR di atas untuk berdonasi. Terima kasih atas dukungannya!</i>
</p>
Contact Developer
Hubungi pengembang untuk pertanyaan, saran, atau kerja sama:
 * WhatsApp: 62882008771871
 * Telegram: @fr3newera
 * TikTok: @rendyindraperatama3
 * YouTube: @fr3newera
 * Github: fr3newera
Disclaimer: This library is NOT affiliated with WhatsApp. Use it responsibly and at your own risk.
Thank you for choosing @fr3newera/baileys!
