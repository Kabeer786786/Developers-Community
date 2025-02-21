import Card from './cards/Card'

export default function CardList() {
  let card1 = {
    'image': 'docprint.jpg',
    'title': 'Document Printing',
  }
  let card2 = {
    'image': 'bookprint.webp',
    'title': 'Books Printing',
  }
  let card3 = {
    'image': 'certificateprint.webp',
    'title': 'Certificate Printing',
  }
  let card4 = {
    'image': 'photoprint.webp',
    'title': 'Photo Printing',
  }
  let card5 = {
    'image': 'certificateprint.webp',
    'title': 'Cards & Lamination',
  }
  let card6 = {
    'image': 'bulkprint.jpg',
    'title': 'Bulk Printing',
  }
  let card7 = {
    'image': 'giftprint.jpg',
    'title': 'Gifts and Others',
  }
  let cards = [card1, card2, card3, card4, card5, card6, card7, card7];

  return (
    <>
      <div className="hidden sm:mb-4 mt-10 sm:flex sm:justify-center">
        <div className="relative rounded-full px-10 py-2 text-2xl font-semibold text-gray-600 ring-2 ring-gray-300 hover:ring-purple-500">
          Explore our brand new {' '}
          <a className="font-semibold text-purple-600">
            <span aria-hidden="true" className="absolute inset-0" />
            Services <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
      <div className='flex flex-wrap max-w-7xl items-center justify-center m-auto lg:mb-20 lg:mt-12 gap-4 lg:gap-6 p-4 lg:p-0'>
        {
          cards.map((card, index) => {
            return <a key={index} href='/steps'><Card key={index} imageURL={card.image} title={card.title} /></a>
          })
        }
      </div>
    </>
  )
}
