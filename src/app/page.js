import fakeWaiting from '@/utils/fakeWaiting'
import Image from 'next/image'

export default async function Home() {
  await fakeWaiting()

  return (
    <>
      <div className="flex gap-4">
        {[1, 2, 3].map(item => (
          <div className="card card-side p-4 bg-base-100 shadow-xl" key={item}>
            <figure className="rounded-xl">
              <Image
                className="h-full"
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                width={400}
                height={400}
              />
            </figure>
            <div className="card-body">
              <div className="mb-2">
                <h2 className="card-title">Nike Air Max</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
    )
}
