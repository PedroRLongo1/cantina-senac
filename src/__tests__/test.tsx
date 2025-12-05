import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import  CardPrato  from '../components/CardPrato'
import React from 'react'
import Home from '../components/Home'


test('loads CardPrato and check if the values are correct', async () => {

  // ARRANGE
    render(
        <CardPrato
            nome="Prato Exemplo"
            descricao="Descrição do prato exemplo"
            preco={29.90}
            disponivel={true}
        />
    )

  // ASSERT
  expect(screen.getByText('Prato Exemplo')).toHaveClass('title');
  expect(screen.getByText('Descrição do prato exemplo')).toHaveClass('description');
  expect(screen.getByText('pedir')).toHaveClass('order-button');
})
test('loads CardPrato and check if the values are correct whith button in mode “indisp-text”', async () => {

  // ARRANGE
    render(
        <CardPrato
            nome="Prato Exemplo"
            descricao="Descrição do prato exemplo"
            preco={29.90}
            disponivel={false}
        />
    )

  // ASSERT
  expect(screen.getByText('Prato Exemplo')).toHaveClass('title');
  expect(screen.getByText('Descrição do prato exemplo')).toHaveClass('description');
  expect(screen.getByText('Indisponível')).toHaveClass('indisp-text');
})