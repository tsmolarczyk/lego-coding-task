import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MinifigCard from '../MinifigCard'

describe('MinifigCard', () => {
  const mockProps = {
    imgUrl: 'minifig-image.jpg',
    alt: 'minifig-alt',
    name: 'Minifig Name',
    details: 'http://example.com/details',
    onClick: jest.fn(),
    isActive: false,
  }

  it('renders image with correct src and alt text', () => {
    render(<MinifigCard {...mockProps} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', mockProps.imgUrl)
    expect(image).toHaveAttribute('alt', mockProps.alt)
  })

  it('renders name', () => {
    render(<MinifigCard {...mockProps} />)
    expect(screen.getByText(mockProps.name)).toBeInTheDocument()
  })

  it('calls onClick when card is clicked', () => {
    render(<MinifigCard {...mockProps} />)
    fireEvent.click(screen.getByText(mockProps.name))
    expect(mockProps.onClick).toHaveBeenCalled()
  })

  it('applies active style when isActive is true', () => {
    render(<MinifigCard {...mockProps} isActive={true} />)
    const card = screen.getByText(mockProps.name).parentNode
    expect(card).toHaveStyle('boxShadow: 0 0 15px 5px rgba(255, 165, 0, 1)')
  })
})
