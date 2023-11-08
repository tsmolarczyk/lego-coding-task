import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../Button'

test('renders button with title', () => {
  render(<Button title="Click me" onClick={() => {}} />)
  const buttonElement = screen.getByText('Click me')
  expect(buttonElement).toBeInTheDocument()
})

test('button click calls onClick handler', () => {
  const onClickMock = jest.fn()
  render(<Button title="Click me" onClick={onClickMock} />)
  const buttonElement = screen.getByText('Click me')
  fireEvent.click(buttonElement)
  expect(onClickMock).toHaveBeenCalled()
})

test('button is disabled when isDisabled is true', () => {
  render(<Button title="Click me" onClick={() => {}} isDisabled={true} />)
  const buttonElement = screen.getByText('Click me')
  expect(buttonElement).toBeDisabled()
})
