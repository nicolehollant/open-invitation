import { provide, inject } from '@vue/composition-api'

const ProviderSymbol = Symbol()

export default function useRoot() {
  const provideRoot = root => provide(ProviderSymbol, root)
  const injectRoot = () => inject(ProviderSymbol)

  return {
    provideRoot,
    injectRoot
  }
}