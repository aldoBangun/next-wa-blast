'use client'
import { useFormik } from 'formik'
import { useSession } from 'next-auth/react'
import { useUpdateUserMutation } from '@/redux/services/users'
import { Button, Checkbox } from 'react-daisyui'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { close } from '@/redux/features/modalSlice'

export default function FormEdit({ currentUser }) {
  // const [hasError, setHasError] = useState(false)
  const dispatch = useDispatch()
  const [updateUser] = useUpdateUserMutation()
  const { data: session } = useSession()
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
    username: Yup.string().email('Invalid email').required('Username required'),
  })
  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: currentUser.name,
      username: currentUser.username,
      password: '',
      allowedManageAccount: currentUser.allowedManageAccount
    },
    onSubmit: async (payload) => {
      // setHasError(false)

      payload.sessionUsername = session?.user?.username
      updateUser(payload)
      dispatch(close())

      // if (result.error) setHasError(true)
    }
  })

  return (<>
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-8">
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="e.g johndoe"
            className="input input-bordered w-full"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && (
            <label className="label">
              <span className="label-text text-error">{formik.errors.name}</span>
            </label>
          )}
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="e.g johndoe"
            className="input input-bordered w-full"
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

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="your password"
            className="input input-bordered w-full"
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

        <div className="form-control w-full mb-4">
          <div className="flex items-center gap-2">
            <Checkbox
              color="primary"
              id="allowedManageAccount"
              name="allowedManageAccount"
              value={formik.values.allowedManageAccount}
              checked={formik.values.allowedManageAccount}
              onChange={formik.handleChange}
            />
            <label className="label cursor-pointer" htmlFor="allowedManageAccount">
              <span className="label-text">Manage Account</span>
            </label>
          </div>
        </div>
      </div>

      <Button type="submit" color="primary">Submit</Button>
    </form>
  </>)
}