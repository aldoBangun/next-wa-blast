import { Badge, Table } from 'react-daisyui'
import { useGetAccountsQuery } from '@/redux/services/accounts'
import moment from 'moment'

export default function AccountList() {
  const { data } = useGetAccountsQuery({ limit: 10, offset: 0 })

  return (
    <>
      <Table>
        <Table.Head>
          <span />
          <span>Date Create</span>
          <span>Name</span>
          <span>Phone Number</span>
          <span>Status</span>
          {/* <span /> */}
        </Table.Head>
        <Table.Body>
          {data && data?.result?.data.map((account, i) => (
            <Table.Row key={account._id}>
              <span>{i+1}</span>
              <span>{account?.register?.dateCreate && moment(account?.register?.dateCreate).format('DD-MM-YYYY HH:mm:ss')}</span>
              <span>{account.pushname}</span>
              <span>{account.msisdn}</span>
              <span>
                <Badge
                  color={account.status ? 'success' : 'secondary'}
                >
                  {account.status ? 'active' : 'inactive'}
                </Badge>
              </span>
              {/* <span>actions here</span> */}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}