import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from 'react'

type FormData = {
  name: string
  surname: string
  phoneNumber: string
  email: string
  dateOfBirth: Date | null
  address: string
  city: string
  state: string
  zipCode: string
}

type FormContextType = {
  onSubmit: (data?: FormData) => void
  setOnSubmit: React.Dispatch<React.SetStateAction<(data?: FormData) => void>>
  isValid: boolean
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}

interface FormProviderProps {
  children: ReactNode
}

export const FormProvider: FC<FormProviderProps> = ({ children }) => {
  const [onSubmit, setOnSubmit] = useState<(data?: FormData) => void>(() => {})
  const [isValid, setIsValid] = useState<boolean>(false)

  return (
    <FormContext.Provider
      value={{ onSubmit, setOnSubmit, isValid, setIsValid }}
    >
      {children}
    </FormContext.Provider>
  )
}
