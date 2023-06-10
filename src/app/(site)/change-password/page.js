'use client'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useChangePasswordMutation } from '@/redux/services/users'
import { useSession } from 'next-auth/react'

export default function ChangePassword() {
  const { data: session } = useSession()
  const [hasError, setHasError] = useState(false)
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old password required'),
    newPassword: Yup.string().required('New password required'),
    confirmNewPassword: Yup
      .string()
      .oneOf([Yup.ref('newPassword'), null], 'Must match "password" field value'),
  })
  const [changePassword, result] = useChangePasswordMutation()

  const formik = useFormik({
    validationSchema,
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    onSubmit: async (creadential) => {
      setHasError(false)

      creadential.sessionUsername = session.user.username
      delete creadential.confirmNewPassword
      
      changePassword(creadential)
      if (result.error) setHasError(true)
    }
  })

  return (
    <div className="h-max flex items-center justify-center">
      <div className="card shadow-lg w-96">
        <div className="card-body">
          <div className="py-4">
            <h1 className="font-semibold text-lg">Change Password</h1>
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
            <div className="mb-8">
              <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                  <span className="label-text">Old Password</span>
                </label>
                <input
                  type="password"
                  placeholder="old password"
                  className="input input-bordered w-full max-w-xs"
                  name="oldPassword"
                  onChange={formik.handleChange}
                  value={formik.values.oldPassword}
                />
                {formik.errors.oldPassword && (
                  <label className="label">
                    <span className="label-text text-error">{formik.errors.oldPassword}</span>
                  </label>
                )}
              </div>

              <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  type="password"
                  placeholder="new password"
                  className="input input-bordered w-full max-w-xs"
                  name="newPassword"
                  onChange={formik.handleChange}
                  value={formik.values.newPassword}
                />
                {formik.errors.newPassword && (
                  <label className="label">
                    <span className="label-text text-error">{formik.errors.newPassword}</span>
                  </label>
                )}
              </div>

              <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                  <span className="label-text">Confirm New Password</span>
                </label>
                <input
                  type="password"
                  placeholder="new password"
                  className="input input-bordered w-full max-w-xs"
                  name="confirmNewPassword"
                  onChange={formik.handleChange}
                  value={formik.values.confirmNewPassword}
                />
                {formik.errors.confirmNewPassword && (
                  <label className="label">
                    <span className="label-text text-error">{formik.errors.confirmNewPassword}</span>
                  </label>
                )}
              </div>
            </div>

            <div className="card-action">
              <button type="submit" className="btn btn-block btn-primary">Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}