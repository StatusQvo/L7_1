let health = parseInt(
  prompt('Введите число параметра "здоровье" для персонажа')
)
debugger
if (health <= 0 || !health) {
  console.log(health)
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  alert(`Параметр "здоровье" равен ${health}`)
}
