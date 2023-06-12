'use client'
import { useSession } from 'next-auth/react'
import { Button, Modal } from 'react-daisyui'
import { Plus } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import FormCreateUser from '@/components/users/FormCreate'
import UserList from '@/components/users/UserList'
import { close, open } from '@/redux/features/modalSlice'

export default function Users() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.modal)
  const { data: session } = useSession()

  if (session?.user?.role !== 'admin') return <div>Unauthorized</div>

  return (
    <div>
      <div className="flex justify-start gap-2 mb-4">
        <Button
          size="sm"
          color="primary"
          startIcon={<Plus />}
          onClick={() => dispatch(open())}
        >
          Create User
        </Button>

        <Modal open={isOpen} onClickBackdrop={() => dispatch(close())}>
          <Modal.Header className="font-bold">
            Create New User
          </Modal.Header>

          <Modal.Body className="border-t-2 pt-4">
            <FormCreateUser />
          </Modal.Body>
        </Modal>
      </div>
      {/* <UserList data={users} /> */}
      <UserList />
    </div>
  )
}