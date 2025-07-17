const { create } = require('venom-bot');

create({
  session: 'chatbotpeluqueria',
  headless: true
})
.then(client => start(client))
.catch(error => {
  console.error('Error al iniciar Venom:', error);
});

function start(client) {
  client.onMessage(async (message) => {
    if (!message.isGroupMsg) {
      const texto = message.body.toLowerCase();

      if (texto.includes('hola')) {
        await client.sendText(message.from, '¡Hola! 👋 Bienvenido a nuestra peluquería. ¿En qué podemos ayudarte? Escribí una de estas opciones:\n\n1️⃣ Servicios\n2️⃣ Precios\n3️⃣ Dirección\n4️⃣ Sacar turno');
      }

      else if (texto.includes('servicio') || texto.includes('qué hacen')) {
        await client.sendText(message.from, 'Ofrecemos estos servicios:\n- Corte de pelo\n- Barba\n- Corte + Barba\n- Afeitado\n- Tintura\n- Perfilado de cejas');
      }

      else if (texto.includes('precio') || texto.includes('cuánto sale') || texto.includes('$')) {
        await client.sendText(message.from, 'Nuestros precios aproximados son:\n- Corte de pelo: $3000\n- Barba: $2000\n- Corte + Barba: $4500\n- Tintura: $3500');
      }

      else if (texto.includes('dónde están') || texto.includes('dirección') || texto.includes('ubicación')) {
        await client.sendText(message.from, '📍Estamos en Av. Siempreviva 742, Buenos Aires. Podés vernos en Google Maps: https://maps.google.com/');
      }

      else if (texto.includes('sacar turno') || texto.includes('quiero turno') || texto.includes('agenda')) {
        await client.sendText(message.from, 'Perfecto, podés sacar turno en este link: https://tuweb.com/turnos');
      }

      else {
        await client.sendText(message.from, 'No entendí tu mensaje 🤔. Escribí "hola" para ver las opciones disponibles.');
      }
    }
  });
}
