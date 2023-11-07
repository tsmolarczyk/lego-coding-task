import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  phoneNumber: yup
    .string()
    .matches(/^\+?\d+$/, "Phone number is invalid")
    .required("Phone number is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  dateOfBirth: yup.date().typeError("Date of birth is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup
    .string()
    .matches(/^\d{2}-?\d{3}$/, "Zip code is invalid")
    .required("Zip code is required")
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-20">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            {...register("name")}
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
            {...register("surname")}
            id="surname"
            className="p-2 border border-gray-300 rounded shadow-sm w-full"
          />
          <p className="text-red-500 text-xs mt-1">{errors.surname?.message}</p>
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
          {...register("phoneNumber")}
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
          {...register("email")}
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
          {...register("dateOfBirth")}
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
          {...register("address")}
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
          {...register("city")}
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
            {...register("state")}
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
            {...register("zipCode")}
            id="zipCode"
            className="p-2 border border-gray-300 rounded shadow-sm w-full"
          />
          <p className="text-red-500 text-xs mt-1">{errors.zipCode?.message}</p>
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 disabled:bg-blue-300"
        disabled={Object.keys(errors).length > 0}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
