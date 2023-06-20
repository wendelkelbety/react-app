import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

function deprecentes (valor) {
  return valor < 0
}

test('teste de titulo', () => {
  render(<App />);
  const testCase = document.querySelector('.App h1');
  expect(testCase).toHaveTextContent(/meu painel de controle/i);
});

test('teste grafico atualizado', () => {
  render(<App />);
  const testCase = document.querySelector('.App div');
  expect(testCase).toHaveTextContent(/gráfico atualizado/i);
});

test('teste deposito recente', () => {
  render(<App />);
  const testCase = document.querySelector('.App .deprecente');
  expect(deprecentes(parseFloat(testCase.innerHTML.replace('$','')))).toBeTruthy()
});