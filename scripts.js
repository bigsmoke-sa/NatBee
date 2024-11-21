// Função para abrir o formulário de compra
function openForm(productName, productPrice) {
  document.getElementById('productName').value = productName;
  document.getElementById('productPrice').value = productPrice;

  // Calcular preço com imposto (adicionando 15% de imposto como exemplo)
  const tax = 0.15;
  const priceWithTax = parseFloat(productPrice) * (1 + tax);
  document.getElementById('productPriceWithTax').value = priceWithTax.toFixed(2);

  // Definir o valor do frete
  const shippingCost = 20.00; // exemplo de valor fixo para o frete
  document.getElementById('shipping').value = shippingCost.toFixed(2);

  // Calcular o preço total
  const totalPrice = priceWithTax + shippingCost;
  document.getElementById('totalPrice').value = totalPrice.toFixed(2);

  // Mostrar o formulário de compra
  document.getElementById('purchaseForm').style.display = 'block';
}

// Função para fechar o formulário de compra
function closeForm() {
  document.getElementById('purchaseForm').style.display = 'none';
}

// Função para validar o CPF
function validateCPF() {
  const cpf = document.getElementById('cpf').value;
  const cpfPattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

  if (!cpfPattern.test(cpf)) {
      alert('CPF inválido! Use o formato XXX.XXX.XXX-XX.');
      return false;
  }
  return true;
}

// Função para validar a forma de pagamento
function validatePaymentMethod() {
  const paymentMethod = document.getElementById('paymentMethod').value;

  if (paymentMethod === 'creditCard') {
      // Código para validar cartão de crédito (número e segurança, se necessário)
      alert('Por favor, insira os dados do cartão de crédito corretamente.');
  }
}

// Função para processar a compra
function submitPurchase(event) {
  event.preventDefault();

  // Verificar CPF e forma de pagamento antes de prosseguir
  if (!validateCPF()) return;

  const paymentMethod = document.getElementById('paymentMethod').value;
  if (paymentMethod === 'creditCard') {
      validatePaymentMethod();
  }

  alert('Compra finalizada com sucesso!');
  closeForm(); // Fecha o formulário após finalizar a compra
}
