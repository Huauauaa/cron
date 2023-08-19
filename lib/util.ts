export function addStyle(element: HTMLElement, styles: string) {
  const node = document.createElement('style')
  node.innerHTML = styles
  element.shadowRoot!.appendChild(node)
}
