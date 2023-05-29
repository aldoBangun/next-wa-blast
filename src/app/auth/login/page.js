'use client'
import { useState } from 'react'
import { useFormik } from 'formik'
import { signIn } from 'next-auth/react'
import * as Yup from 'yup'

export default function Auth() {
  const [hasError, setHasError] = useState(false)
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username required'),
    password: Yup.string().required('Password required')
  })
  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (values) => {
      setHasError(false)
      const result = await signIn('credentials', {
        username: values.username,
        password: values.password,
        redirect: false
      })

      if (result.error) setHasError(true)
    }
  })

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card shadow-lg w-96">
        <div className="card-body">
          <div className="py-4">
            <h1 className="font-semibold text-lg">Login Admin</h1>
          </div>

          {hasError && (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Invalid email or username</span>
              </div>
            </div>
          )}

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g johndoe"
                  className="input input-bordered w-full max-w-xs"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                {formik.errors.username && (
                  <label className="label">
                    <span className="label-text text-error">{formik.errors.username}</span>
                  </label>
                )}
              </div>
              <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="your password"
                  className="input input-bordered w-full max-w-xs"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && (
                  <label className="label">
                    <span className="label-text text-error">{formik.errors.password}</span>
                  </label>
                )}
              </div>
            </div>
            <div className="card-action">
              <button type="submit" className="btn btn-block btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}