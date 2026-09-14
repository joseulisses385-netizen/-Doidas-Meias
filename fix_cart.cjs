const fs = require('fs');
let code = fs.readFileSync('src/components/CartDrawer.tsx', 'utf8');

// Sync user data
code = code.replace(
  'if (currentUser.address) setDeliveryAddress(currentUser.address);',
  'if (currentUser.address) setDeliveryAddress(currentUser.address);\n      if (currentUser.addressNumber) setAddressNumber(currentUser.addressNumber);\n      if (currentUser.complement) setComplement(currentUser.complement);'
);

// Validation
code = code.replace(
  'if (!customerName || !customerPhone || !deliveryAddress) {',
  'if (!customerName || !customerPhone || !deliveryAddress || !addressNumber || !neighborhood || !city || !cep) {'
);

code = code.replace(
  "alert('Por favor, preencha nome, WhatsApp e endereço para a entrega.');",
  "alert('Por favor, preencha todos os campos obrigatórios de entrega (Nome, WhatsApp, CEP, Endereço, Número, Bairro, Cidade).');"
);

// Order payload
code = code.replace(
  /deliveryAddress: `\$\{deliveryAddress\}.*/,
  'deliveryAddress: `${deliveryAddress}, ${addressNumber}${complement ? ` - ${complement}` : \'\'}, ${neighborhood} - ${city} (CEP: ${cep})`,'
);

fs.writeFileSync('src/components/CartDrawer.tsx', code);
