import tw, { styled } from 'twin.macro'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  isSmall?: boolean
}

export const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  // The common button styles added with the tw import
  tw`btn`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-yellow-400)`,

  // Use props to conditionally style your components
  variant === 'primary' && tw`btn-primary`,

  // Combine regular css with tailwind classes within backticks
  variant === 'secondary' && tw`btn-secondary`,

  // Conditional props can be used
  isSmall ? tw`btn-sm` : tw`btn-lg`,
])
