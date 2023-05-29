import fakeWaiting from '@/utils/fakeWaiting'
import SummaryList from '@/components/dashboard/SummaryList'

export default async function Home() {
  await fakeWaiting()

  return (
    <>
      <SummaryList />
    </>
    )
}
