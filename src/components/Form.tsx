import React, { useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useFormContext } from '../context/FormContext'

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

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  phoneNumber: yup
    .string()
    .matches(/^\+?\d+$/, 'Phone number is invalid')
    .required('Phone number is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  dateOfBirth: yup
    .date()
    .nullable()
    .transform((value, originalValue) =>
      originalValue === '' ? null : yup.date().cast(value)
    )
    .max(new Date(), 'Date must be today or earlier')
    .required('Date of birth is required')
    .typeError('Date of birth is invalid'),

  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipCode: yup
    .string()
    .matches(/^\d{2}-?\d{3}$/, 'Zip code is invalid')
    .required('Zip code is required'),
})

const Form = () => {
  const { setOnSubmit, setIsValid } = useFormContext()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(schema) as any,
  })

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        )

        if (!response.ok) throw new Error('Network response was not ok.')
        navigate('/')
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    },
    [navigate]
  )

  useEffect(() => {
    setOnSubmit(() => handleSubmit(onSubmit))
    setIsValid(isValid)
  }, [setOnSubmit, handleSubmit, onSubmit, isValid])

  return (
    <>
      <h1 className="text-2xl pl-20 mb-12 font-bold text-white ">
        SHIPPING DETAILS{' '}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="font-sans space-y-4 px-20 pb-20"
      >
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              {...register('name')}
              id="name"
              className="p-2 border border-gray-300 rounded shadow-sm w-full"
            />
            <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>
          </div>
          <div className="flex-1">
            <label
              htmlFor="surname"
              className="block text-sm font-medium text-gray-300"
            >
              Surname
            </label>
            <input
              {...register('surname')}
              id="surname"
              className="p-2 border border-gray-300 rounded shadow-sm w-full"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.surname?.message}
            </p>
          </div>
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-300"
          >
            Phone Number
          </label>
          <input
            {...register('phoneNumber')}
            id="phoneNumber"
            className="p-2 border border-gray-300 rounded shadow-sm w-full"
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.phoneNumber?.message}
          </p>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            {...register('email')}
            id="email"
            className="p-2 border border-gray-300 rounded shadow-sm w-full"
          />
          <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
        </div>

        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-300"
          >
            Date of Birth
          </label>
          <input
            type="date"
            {...register('dateOfBirth')}
            id="dateOfBirth"
            className="p-2 border border-gray-300 rounded shadow-sm w-full"
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.dateOfBirth?.message}
          </p>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-300"
          >
            Address
          </label>
          <input
            {...register('address')}
            id="address"
            className="p-2 border border-gray-300 rounded shadow-sm w-full"
          />
          <p className="text-red-500 text-xs mt-1">{errors.address?.message}</p>
        </div>

        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-300"
          >
            City
          </label>
          <input
            {...register('city')}
            id="city"
            className="p-2 border border-gray-300 rounded shadow-sm w-full"
          />
          <p className="text-red-500 text-xs mt-1">{errors.city?.message}</p>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-300"
            >
              State
            </label>
            <input
              {...register('state')}
              id="state"
              className="p-2 border border-gray-300 rounded shadow-sm w-full"
            />
            <p className="text-red-500 text-xs mt-1">{errors.state?.message}</p>
          </div>
          <div className="flex-1">
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-300"
            >
              Zip Code
            </label>
            <input
              {...register('zipCode')}
              id="zipCode"
              className="p-2 border border-gray-300 rounded shadow-sm w-full"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.zipCode?.message}
            </p>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
