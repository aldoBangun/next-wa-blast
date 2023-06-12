'use client'
import { Button, Modal } from 'react-daisyui'
import { Plus } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { open, close } from '@/redux/features/modalSlice'
import QRCode from 'react-qr-code'
import { useRequestQrMutation } from '@/redux/services/accounts'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import AccountList from '@/components/accounts/AccountList'

export default function Accounts() {
  const [accountId, setAccountId] = useState(undefined)
  const { data: session } = useSession()
  const [requestQr, result] = useRequestQrMutation()
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.modal)
  let requestInterval = null

  const handleClickAddAccount = () => {
    requestInterval = setInterval(() => {
      requestQr({
        sessionUsername: session?.user?.username,
        accountId: accountId
      })
    }, 20000)

    dispatch(open())
  }

  useEffect(() => {
    if (result?.data?.result?.accountId) setAccountId(result?.data?.result?.accountId)
    if (result?.data?.code == -24) {
      clearInterval(requestInterval)
      dispatch(close())
    }
  }, [result, dispatch, requestInterval])

  return <>
    <div>
      {(session?.user?.role === 'admin' || session?.user?.allowedManageAccount) && (
        <div className="flex justify-start gap-2 mb-4">
          <Button
            size="sm"
            color="primary"
            startIcon={<Plus />}
            onClick={handleClickAddAccount}
          >
            Add Account
          </Button>

          <Modal
            open={isOpen}
            onClickBackdrop={() => dispatch(close())}
          >
            <Modal.Header className="font-bold">
              Add New Account
            </Modal.Header>

            <Modal.Body className="border-t-[1px] border-b-[1px] py-16">
              <div className="flex justify-center">
                <QRCode value={result?.data?.result?.qr || ''} />
              </div>
            </Modal.Body>
            <Modal.Actions>
              <div className="text-center flex-1 cursor-default">Scan QR Code</div>
            </Modal.Actions>
          </Modal>
        </div>
      )}
      {/* <UserList data={users} /> */}
      {/* <UserList /> */}
      <AccountList />
    </div>
  </>
}