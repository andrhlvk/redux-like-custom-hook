import { initStore } from './store'

const initialProductsState = {
  products: [
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ],
}

const configureProductsStore = () => {
  const actions = {
    TOGGLE_FAV: (curGlobalState, productId) => {
      const prodIndex = curGlobalState.products.findIndex(p => p.id === productId)
      const newFavStatus = !curGlobalState.products[prodIndex].isFavorite
      const updatedProducts = [...curGlobalState.products]
      updatedProducts[prodIndex] = {
        ...curGlobalState.products[prodIndex],
        isFavorite: newFavStatus,
      }
      return { products: updatedProducts }
    },
  }

  initStore(actions, initialProductsState)
}

export default configureProductsStore
