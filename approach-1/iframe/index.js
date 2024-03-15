function updateState() {
  const st = document.getElementById('state')

  st.innerText = JSON.stringify(window.parent.window.state)
}