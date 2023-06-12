'use client'
import { Table, Button, Modal } from 'react-daisyui'
import {
  Check,
  Trash,
  Pencil,
  X as Cross
} from 'react-bootstrap-icons'
import moment from 'moment'
import { useSession } from 'next-auth/react'
import { useSelector, useDispatch } from 'react-redux'
import {
  useDisableUserMutation,
  useEnableUserMutation,
  useDeleteUserMutation
} from '@/redux/services/users'
import { useGetUsersQuery } from '@/redux/services/users'
import { close, open } from '@/redux/features/modalSlice'
import FormEdit from './FormEdit'
import { useState } from 'react'

export default function UserList() {
  const { data, isLoading, isFetching, error } = useGetUsersQuery({ limit: 10, offset: 0 })
  const [selectedUser, setSelectedUser] = useState(null)

  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.modal)

  const [disableUser] = useDisableUserMutation()
  const [enableUser] = useEnableUserMutation()
  const [deleteUser] = useDeleteUserMutation()
  const { data: session } = useSession()

  const handleClick = (mutation, username) => {
    const payload = {
      username,
      sessionUsername: session?.user?.username
    }
    mutation(payload)
  }

  const handleClickEdit = (username) => {
    setSelectedUser(username)
    dispatch(open())
  }

  console.log({error, data})

  return (
    <>
      <Table className="w-full">
          <Table.Head>
            <span />
            <span>
              <div className="w-72">Date Crete</div>
            </span>
            <span>
              <div className="w-96">Name</div>
            </span>
            <span>
              <div className="w-full">
                Username
              </div>
            </span>
            <span />
          </Table.Head>

          <Table.Body className="w-full">
            {/* {(!data && error) && (
              <Table.Row>
                <span>{'Error on fetching'}</span>
              </Table.Row>
            )} */}
            {(!data && isFetching) && Array.from({ length: 5 }).map((item, i) => (
              <Table.Row key={i}>
                <span><div className="h-4 w-4 rounded-md bg-gray-400 animate-pulse"></div></span>
                <span><div className="h-4 w-full rounded-md bg-gray-400 animate-pulse"></div></span>
                <span><div className="h-4 w-full rounded-md bg-gray-400 animate-pulse"></div></span>
                <span><div className="h-4 w-full rounded-md bg-gray-400 animate-pulse"></div></span>
                <span className="flex items-center gap-2">
                  <div className="h-4 w-16 rounded-md bg-gray-400 animate-pulse"></div>
                  <div className="h-4 w-16 rounded-md bg-gray-400 animate-pulse"></div>
                </span>
              </Table.Row>
            ))}
            {data && data?.result?.data.map((user, i) => (
              <Table.Row key={user.username}>
                <span>{i+1}</span>
                <span>{moment(user.dateCreate).format('DD-MM-YYYY HH:mm:ss')}</span>
                <span>{user.name}</span>
                <span>{user.username}</span>
                <span className="flex items-center gap-1">
                  {user.status ? (
                    <Button
                      className="text-xs"
                      color="warning"
                      size="xs"
                      startIcon={<Cross />}
                      onClick={() => handleClick(disableUser, user.username)}
                    >
                      Disable
                    </Button>
                  ) : (
                    <>
                      <Button
                        className="text-xs"
                        color="success"
                        size="xs"
                        startIcon={<Check />}
                        onClick={() => handleClick(enableUser, user.username)}
                      >
                        Enable
                      </Button>
                      <Button
                        className="text-xs"
                        color="info"
                        size="xs"
                        startIcon={<Pencil />}
                        onClick={() => handleClickEdit(user.username)}
                      >
                        Edit
                      </Button>
                      <Button
                        className="text-xs"
                        color="error"
                        size="xs"
                        startIcon={<Trash />}
                        onClick={() => handleClick(deleteUser, user.username)}
                      >
                        Delete
                      </Button>
                      <Modal open={isOpen && selectedUser === user.username} onClickBackdrop={() => dispatch(close())}>
                        {selectedUser === user.username && (
                          <>
                            <Modal.Header >
                              Edit User
                            </Modal.Header>
                            <Modal.Body>
                              <FormEdit currentUser={user} />
                            </Modal.Body>
                          </>
                        )}
                      </Modal>
                    </>
                  )}

                </span>
              </Table.Row>
            ))}
          </Table.Body>
      </Table>
    </>
  )
}